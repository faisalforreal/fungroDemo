import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, 'dist');
const templatePath = path.join(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('Error: dist/index.html not found. Run "vite build" first.');
  process.exit(1);
}

const rawTemplate = fs.readFileSync(templatePath, 'utf-8');
const serverEntryPath = pathToFileURL(path.join(distDir, 'server', 'entry-server.js')).href;
const { render } = await import(serverEntryPath);

const routesToPrerender = [
  '/',
  '/teenlancers',
  '/companies',
  '/parents',
  '/shelancers',
  '/projects',
  '/shark-tank',
  '/arcade',
  '/calculator',
  '/blogs',
  '/blogs/how-to-earn-money-as-a-teenager-in-india-2026',
  '/blogs/top-10-skills-companies-hire-teenagers-for',
  '/blogs/why-shark-tank-india-backed-fungro',
  '/about',
  '/contact',
  '/404'
];

console.log(`\n🚀 Starting SSG Prerendering for ${routesToPrerender.length} public routes...\n`);

for (const route of routesToPrerender) {
  const helmetContext = {};
  const { html: rawAppHtml } = render(route, helmetContext);

  // 1. Extract Head elements from rendered HTML
  const titleMatch = rawAppHtml.match(/<title>[\s\S]*?<\/title>/i);
  const metaMatches = rawAppHtml.match(/<meta\s+[^>]*>/gi) || [];
  const linkMatches = rawAppHtml.match(/<link\s+rel="canonical"[^>]*>/gi) || [];
  const scriptMatches = rawAppHtml.match(/<script\s+type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi) || [];

  // 2. Clean hoisted tags from appHtml so #root only holds clean body DOM
  let cleanBodyHtml = rawAppHtml
    .replace(/<title>[\s\S]*?<\/title>/gi, '')
    .replace(/<meta\s+[^>]*>/gi, '')
    .replace(/<link\s+rel="canonical"[^>]*>/gi, '')
    .replace(/<script\s+type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi, '');

  // 3. Prepare Base Template
  let pageHtml = rawTemplate;

  // Clean placeholder meta tags from template head (we inject per-route tags)
  pageHtml = pageHtml.replace(/<title>[\s\S]*?<\/title>/i, '');
  pageHtml = pageHtml.replace(/<meta\s+name="title"[^>]*>/gi, '');
  pageHtml = pageHtml.replace(/<meta\s+name="description"[^>]*>/gi, '');
  pageHtml = pageHtml.replace(/<meta\s+name="keywords"[^>]*>/gi, '');
  pageHtml = pageHtml.replace(/<meta\s+name="robots"[^>]*>/gi, '');
  pageHtml = pageHtml.replace(/<link\s+rel="canonical"[^>]*>/gi, '');
  pageHtml = pageHtml.replace(/<meta\s+property="og:[^"]*"[^>]*>/gi, '');
  pageHtml = pageHtml.replace(/<meta\s+name="twitter:[^"]*"[^>]*>/gi, '');
  pageHtml = pageHtml.replace(/<!-- Primary SEO Meta Tags[\s\S]*?-->/gi, '');
  pageHtml = pageHtml.replace(/<!-- Open Graph \/ Facebook -->/gi, '');
  pageHtml = pageHtml.replace(/<!-- Twitter Card -->/gi, '');
  pageHtml = pageHtml.replace(/^\s*[\r\n]/gm, ''); // remove empty lines
  // Also remove fallback JSON-LD script from index.html template if route has its own schemas
  if (scriptMatches.length > 0) {
    pageHtml = pageHtml.replace(/<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/gi, '');
  }

  // Deduplicate meta tags
  const seenMetaNames = new Set();
  const filteredMetas = [];
  for (const metaTag of metaMatches) {
    const keyMatch = metaTag.match(/(?:name|property)="([^"]+)"/i);
    const key = keyMatch ? keyMatch[1] : metaTag;
    if (!seenMetaNames.has(key)) {
      seenMetaNames.add(key);
      filteredMetas.push(metaTag);
    }
  }

  // Assemble dynamic head elements
  const headElements = [];
  if (titleMatch) headElements.push(titleMatch[0]);
  headElements.push(...filteredMetas);
  headElements.push(...linkMatches);
  headElements.push(...scriptMatches);

  const formattedHead = headElements.map(tag => `    ${tag}`).join('\n');

  // Insert into <head>
  pageHtml = pageHtml.replace('<head>', `<head>\n${formattedHead}`);

  // Insert rendered clean HTML into #root
  pageHtml = pageHtml.replace('<div id="root"></div>', `<div id="root">${cleanBodyHtml}</div>`);

  // 4. Determine destination path
  let targetFile;
  if (route === '/') {
    targetFile = path.join(distDir, 'index.html');
  } else if (route === '/404') {
    targetFile = path.join(distDir, '404.html');
  } else {
    targetFile = path.join(distDir, route.replace(/^\//, ''), 'index.html');
  }

  fs.mkdirSync(path.dirname(targetFile), { recursive: true });
  fs.writeFileSync(targetFile, pageHtml, 'utf-8');

  const relativePath = path.relative(distDir, targetFile);
  const sizeKb = (Buffer.byteLength(pageHtml, 'utf8') / 1024).toFixed(2);
  console.log(`✓ [Prerendered] ${route.padEnd(52)} -> ${relativePath.padEnd(35)} (${sizeKb} KB)`);
}

console.log(`\n🎉 SSG Prerendering complete for all ${routesToPrerender.length} routes!\n`);
