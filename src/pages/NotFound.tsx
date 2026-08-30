import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/seo/SEOHead';
import { Home, Flame, ArrowRight } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-20 px-4">
      <SEOHead
        title="404 — Page Not Found | FunGro"
        description="The page you are looking for does not exist on FunGro. Browse our live projects and teen freelancing guides."
        noindex={true}
      />

      <div className="text-center max-w-md mx-auto space-y-6">
        <div className="text-7xl font-black text-emerald-400 font-mono">404</div>
        <h1 className="text-2xl font-bold text-white">Oops! This page took a break.</h1>
        <p className="text-xs text-gray-400">
          The page you requested might have been moved, renamed, or is temporarily unavailable.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-black bg-emerald-400 hover:bg-emerald-300 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-gray-300 bg-[#0e1512] border border-gray-800 hover:border-gray-700"
          >
            <Flame className="w-4 h-4 text-orange-400" />
            <span>Browse Live Gigs</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
