import React from 'react';
import { FolderGit2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React and Node.js',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#',
    },
    {
      title: 'Task Manager',
      description: 'Intuitive task management with drag-and-drop',
      tags: ['TypeScript', 'React', 'Firebase'],
      link: '#',
    },
    {
      title: 'Weather App',
      description: 'Real-time weather with data visualization',
      tags: ['JavaScript', 'Chart.js', 'API'],
      link: '#',
    },
  ];

  return (
    <div id="projects" className="p-4 md:p-6">
      <div className="flex items-center gap-2 mb-4">
        <FolderGit2 size={18} className="text-[#111827]" />
        <h2 className="text-lg font-semibold">Projects</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-[#FFF9F6] rounded-lg shadow-sm p-4 transition-all duration-300 hover:shadow-md hover:translate-y-[-2px]"
          >
            <h3 className="font-semibold text-base mb-2">{project.title}</h3>
            <p className="text-[#111827]/70 mb-3 text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.tags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className="px-2 py-0.5 bg-[#FADCD9] text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              className="inline-block text-xs font-medium hover:text-[#FADCD9] transition-colors duration-300"
            >
              View Project →
            </a>
          </div>
        ))}
        <div className="flex items-center justify-center h-full">
          <a
            target="_blank"
            href="https://github.com/PythonicBoat?tab=repositories"
            className="inline-block px-4 py-2 border border-[#111827] rounded-lg font-medium transition-all duration-300 hover:bg-[#111827] hover:text-[#FFF9F6] text-sm w-full text-center"
          >
            See All Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;