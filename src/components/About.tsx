import React from 'react';
import { User } from 'lucide-react';

const About = () => {
  return (
    <div id="about" className="h-full p-4 md:p-6 flex flex-col justify-between">
      <div className="flex items-center gap-2 mb-3">
        <User size={18} className="text-[#111827]" />
        <h2 className="text-lg font-semibold">About Me</h2>
      </div>
      
      <div className="flex-1">
        <p className="mb-3 text-[#111827]/80 text-sm">
          I'm a passionate developer focused on creating intuitive and impactful digital experiences. With expertise in both front-end and back-end development.
        </p>
      </div>
      
      <div className="mt-4">
        <h3 className="font-medium mb-2 text-sm">Tech Stack</h3>
        <div className="flex flex-wrap gap-1.5">
          {['React', 'Node.js', 'TypeScript', 'AWS'].map((tech, index) => (
            <span 
              key={index} 
              className="px-2 py-0.5 bg-[#EEDDD3] text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;