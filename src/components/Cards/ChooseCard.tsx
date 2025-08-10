import React from 'react';

export default function ChooseCard({ imageSrc, imageAlt, title }:{ imageSrc?: string, imageAlt?: string, title?: string }) {
  return (
    <div className="group cursor-pointer">
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 rounded-2xl p-6 h-72 relative overflow-hidden hover:scale-105 transition-transform duration-300 shadow-2xl">
        {/* Background Image */}
        <img 
          src={imageSrc || "/api/placeholder/300/250"} 
          alt={imageAlt || "Instant Access"} 
          className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-60"
        />
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-slate-800/30 to-blue-900/40 rounded-2xl"></div>
        
        {/* Title */}
        <div className="relative z-20">
          <h3 className="text-white font-light text-sm mb-4 bg-white/20 backdrop-blur-md p-1 px-2 rounded-full w-fit">{title || "Instant Access"}</h3>
        </div>
        
        {/* Hover effect overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div> */}
        
        {/* Edge glow effect */}
        <div className="absolute inset-0 rounded-2xl border border-cyan-500/20 group-hover:border-cyan-400/40 transition-colors duration-300"></div>
      </div>
    </div>
  );
}