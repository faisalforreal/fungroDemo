import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

// Pages
import { Home } from './pages/Home';
import { Teenlancers } from './pages/Teenlancers';
import { Companies } from './pages/Companies';
import { Parents } from './pages/Parents';
import { Shelancers } from './pages/Shelancers';
import { ProjectsBoard } from './pages/ProjectsBoard';
import { SharkTank } from './pages/SharkTank';
import { Arcade } from './pages/Arcade';
import { Calculator } from './pages/Calculator';
import { Blogs } from './pages/Blogs';
import { BlogPost } from './pages/BlogPost';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

// Scroll to top on client route navigation
export const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname]);

  return null;
};

export const AppContent: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teenlancers" element={<Teenlancers />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/parents" element={<Parents />} />
          <Route path="/shelancers" element={<Shelancers />} />
          <Route path="/projects" element={<ProjectsBoard />} />
          <Route path="/shark-tank" element={<SharkTank />} />
          <Route path="/arcade" element={<Arcade />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
};
