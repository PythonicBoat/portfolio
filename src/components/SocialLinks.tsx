import React, { useState, useEffect } from 'react';
import { FileText, Github, Linkedin, Mail, Newspaper, Clock } from 'lucide-react';

const SocialLinks = () => {
  const [time, setTime] = useState("");
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString('en-US', {timeZone: 'Asia/Kolkata', hour12: false}) + " IST");
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full p-4 md:p-6 flex flex-col justify-between">
      <div className="mb-3 flex justify-between items-center">
        <div>
          <h2 className="custom-connect-h1 text-lg font-semibold mb-2">Connect</h2>
          <p className="text-[#111827]/70 text-sm mb-2">
            Let's connect and collaborate!
          </p>
        </div>
        <div className="flex items-center gap-2 text-[#111827]/80 text-sm">
          <Clock size={14} />
          <span>{time}</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-2">
        <a
          href="https://github.com/pythonicboat"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 p-3 bg-[#FFF9F6] rounded-lg transition-all duration-300 hover:translate-x-1"
        >
          <Github size={16} />
          <span className="font-medium text-sm">GitHub</span>
        </a>
        
        <a
          href="https://linkedin.com/in/yashvardhan04"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 p-3 bg-[#FFF9F6] rounded-lg transition-all duration-300 hover:translate-x-1"
        >
          <Linkedin size={16} />
          <span className="font-medium text-sm">LinkedIn</span>
        </a>
        
        <a
          href="https://vsyash.medium.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 p-3 bg-[#FFF9F6] rounded-lg transition-all duration-300 hover:translate-x-1"
        >
          <Newspaper size={16} />
          <span className="font-medium text-sm">Medium</span>
        </a>

        <a
          href="mailto:vs21yash@gmail.com"
          className="flex items-center gap-2 p-3 bg-[#FFF9F6] rounded-lg transition-all duration-300 hover:translate-x-1"
        >
          <Mail size={16} />
          <span className="font-medium text-sm">Email</span>
        </a>

        <a
          href="https://docs.google.com/document/d/1viwxXuTqoh44MQKRQ6aYofIhIMQZn0pHr9pLqkgCg3c/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 p-3 bg-[#FFF9F6] rounded-lg transition-all duration-300 hover:translate-x-1"
        >
          <FileText size={16} />
          <span className="font-medium text-sm">Resume</span>
        </a>
      </div>

    </div>
  );
};

export default SocialLinks;