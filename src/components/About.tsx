import React from 'react';
import { User } from 'lucide-react';

const About = () => {
  return (
    <div id="about" className="h-full p-4 md:p-6 flex flex-col justify-between">
      <div className="flex items-center gap-2 mb-3">
        <User size={18} className="text-[#111827]" />
        <h2 className="custom-connect-h2 text-lg font-semibold">About Me</h2>
      </div>
      
      <div className="flex-1">
        <p className="mb-3 text-[#111827]/80 text-sm">
        A pre-final undergrad who thrives at the nexus of innovation and impact. My passion lies in architecting seamless, data-driven ecosystems—from adaptive machine-learning platforms to peer-to-peer networks and cloud-native services—that empower stakeholders with real-time insights and actionable intelligence. I embrace holistically integrated solutions and leverage modern toolchains and scalable frameworks.
        </p>
      </div>
      
      <div className="mt-4 text-[#eeddd3]">
        <h3 className="font-medium mb-2 text-sm text-[#111827]">Tech Stack</h3>
        <div className="flex flex-wrap gap-1.5">
          {[
  'python', 'postgresql', 'fastapi', 'html', 'css', 'bash', 'git', 'c',
  'linux', 'django', 'nginx', 'discord', 'react', 'mongodb', 'figma',
  'cloudflare', 'nextjs', 'prisma', 'vercel', 'aws', 'java', 'numpy', 'tensorflow', 'matplotlib'
]
.map((tech, index) => (
            <span 
              key={index} 
              className="px-2 py-0.5 bg-[#111827] text-xs rounded-full"
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