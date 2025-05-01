import React from 'react';
import { Code, Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <div id="hero" className="h-full p-4 md:p-6 flex flex-col justify-center relative overflow-hidden">
      <div className="absolute -top-8 -right-8 text-[#FADCD9]/20">
        <Code size={100} />
      </div>
      <div className="absolute -bottom-8 -left-8 text-[#FADCD9]/20">
        <Terminal size={100} />
      </div>
      
      <div className="relative z-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
          Yashvardhan Singh
        </h1>
        <div className="overflow-hidden h-10 md:h-12">
          <div className="animate-slide">
            <div className="text-lg md:text-xl font-semibold text-[#111827]/90 py-2 tracking-tight">Product Engineer</div>
            <div className="text-lg md:text-xl font-semibold text-[#111827]/90 py-2 tracking-tight">DevOps Developer</div>
            <div className="text-lg md:text-xl font-semibold text-[#111827]/90 py-2 tracking-tight">AI Enthusiast</div>
          </div>
        </div>
        <p className="mt-4 text-[#111827]/70 max-w-lg text-sm md:text-base">
          Tech for all, AI for everyone.
        </p>
        <div className="mt-6">
          <a 
            href="#projects" 
            className="inline-block px-4 py-2 bg-[#111827] text-[#FFF9F6] rounded-lg font-medium transition-all duration-300 hover:bg-[#111827]/90 hover:translate-y-[-2px] hover:shadow-md text-sm"
          >
            View My Work
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;