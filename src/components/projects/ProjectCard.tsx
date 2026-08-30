import React from 'react';
import { Project } from '../../types';
import { 
  CheckCircle2, 
  Clock, 
  Flame, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  MapPin, 
  ArrowRight 
} from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onApply: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onApply }) => {
  return (
    <div className="p-6 rounded-3xl bg-[#0e1512] border border-gray-800/80 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-emerald-950/20 relative">
      
      {/* Top Strip: Category + Badges */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            {project.category}
          </span>

          <div className="flex items-center gap-1.5">
            {project.isHot && (
              <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded-full border border-orange-500/30">
                <Flame className="w-3 h-3 fill-orange-400" />
                Hot
              </span>
            )}
            {project.isFeatured && (
              <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full border border-purple-500/30">
                <Sparkles className="w-3 h-3" />
                Featured
              </span>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug mb-2">
          {project.title}
        </h3>

        {/* Company & Location info */}
        <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
          <div className="flex items-center gap-1.5 text-white font-medium">
            <span>{project.company}</span>
            {project.verifiedCompany && (
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            )}
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-gray-500" />
            <span>{project.location}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-xs text-gray-400 leading-relaxed line-clamp-2 mb-4">
          {project.description}
        </p>

        {/* Skill tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-[11px] font-medium bg-[#131c18] text-gray-300 px-2.5 py-1 rounded-lg border border-gray-800"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Payout & CTA Strip */}
      <div className="pt-4 border-t border-gray-800/80 flex items-center justify-between gap-3">
        <div>
          <div className="text-[10px] text-gray-400 uppercase font-semibold">Compensation</div>
          <div className="text-lg font-black text-emerald-400 font-mono flex items-center gap-1">
            <span>{project.stipendFormatted}</span>
            <span className="text-[10px] text-gray-400 font-sans font-normal">UPI</span>
          </div>
        </div>

        <button
          onClick={() => onApply(project)}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-xs text-black bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 transition-all shadow-md shadow-emerald-500/20 hover:scale-105 cursor-pointer"
        >
          <Zap className="w-3.5 h-3.5 fill-black" />
          <span>Quick Apply</span>
        </button>
      </div>

    </div>
  );
};
