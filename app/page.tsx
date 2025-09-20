'use client';

import { Sparkles, ArrowRight, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center space-y-8 px-6 max-w-4xl">
        {/* Icon with glow effect */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-white/20 rounded-full blur-xl scale-150"></div>
            <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-6 border border-white/20">
              <Sparkles className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>

        {/* Main title */}
        <div className="space-y-4">
          <h1 className="text-7xl md:text-8xl font-thin tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            PreviewLink
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
            Experience the future of link previews with elegant design and seamless performance
          </p>
        </div>

        {/* Feature indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-12">
          <div className="flex items-center gap-3 text-gray-300">
            <div className="p-2 bg-white/5 rounded-lg border border-white/10">
              <Zap className="w-5 h-5" />
            </div>
            <span className="text-sm font-medium">Tailwind CSS</span>
          </div>
          
          <div className="hidden sm:block w-px h-6 bg-gray-700"></div>
          
          <div className="flex items-center gap-3 text-gray-300">
            <div className="p-2 bg-white/5 rounded-lg border border-white/10">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="text-sm font-medium">Lucide React</span>
          </div>
        </div>

        {/* Call to action */}
        <div className="pt-8">
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full border border-white/20 hover:border-white/30 transition-all duration-300 text-white font-medium">
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-20 opacity-30">
        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
      </div>
      <div className="absolute bottom-32 right-32 opacity-20">
        <div className="w-1 h-1 bg-white rounded-full animate-ping"></div>
      </div>
      <div className="absolute top-1/3 right-20 opacity-25">
        <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
}