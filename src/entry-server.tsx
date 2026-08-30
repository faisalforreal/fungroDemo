import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppContent } from './AppContent';

export function render(url: string, helmetContext: Record<string, any> = {}) {
  const html = ReactDOMServer.renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <AppContent />
      </StaticRouter>
    </HelmetProvider>
  );
  return { html };
}
