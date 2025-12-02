import { useState } from 'react';
import quotesOnTheGoImg from '../assets/quotes-on-the-go.webp';
import cvsHealthImg from '../assets/cvs-health-logo.webp';
import tonicPosImg from '../assets/tonic-pos-logo.webp';
import epImg from '../assets/entertainment-partners-logo.webp';
import aetnaImg from '../assets/aetna-logo.webp';

interface Project {
  id: number;
  title: string;
  client?: string;
  image?: string;
  description: string;
  period: string;
  category: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  type: 'work' | 'personal';
}

const Projects = () => {
  const [activeTab, setActiveTab] = useState<'work' | 'personal'>('work');
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects: Project[] = [
    // Work Projects
    {
      id: 1,
      title: 'TONIC Back of House',
      client: 'TONIC',
      image: tonicPosImg,
      description: 'Developed a comprehensive healthcare management platform that streamlines patient records, appointment scheduling, and medical billing. Implemented role-based access control and HIPAA-compliant data handling. The system reduced administrative overhead by 40% and improved patient satisfaction scores.',
      period: 'July 2024 - Dec 2025',
      category: 'Hospitality',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      liveLink: 'https://example.com',
      type: 'work',
    },
    {
      id: 2,
      title: 'Smart Time Fenix',
      client: 'Entertainment Partners',
      image: epImg,
      description: 'Built a scalable streaming platform supporting 100K+ concurrent users with adaptive bitrate streaming, real-time analytics, and personalized content recommendations. Integrated payment gateways and subscription management systems.',
      period: 'Nov 2022 - June 2024',
      category: 'Entertainment',
      technologies: ['React', 'TypeScript', 'Redis', 'CDN'],
      liveLink: 'https://example.com',
      type: 'work',
    },
    {
      id: 3,
      title: 'Quotes on the go',
      client: 'Aetna',
      image: quotesOnTheGoImg,
      description: 'Created an end-to-end hotel management solution with booking engine, inventory management, and guest services portal. Features include dynamic pricing, multi-property support, and integrated POS system.',
      period: 'Mar 2022 - Oct 2022',
      category: 'Financial',
      technologies: ['Vue.js', 'Express', 'MongoDB', 'Stripe'],
      type: 'work',
    },
    {
      id: 4,
      title: 'Aetna Quote & Enroll',
      client: 'Aetna',
      image: aetnaImg,
      description: 'Created an end-to-end hotel management solution with booking engine, inventory management, and guest services portal. Features include dynamic pricing, multi-property support, and integrated POS system.',
      period: 'Dec 2020 - Feb 2022',
      category: 'Financial',
      technologies: ['Vue.js', 'Express', 'MongoDB', 'Stripe'],
      type: 'work',
    },
    {
      id: 5,
      title: 'CVS Dashboard',
      client: 'CVS Health',
      image: cvsHealthImg,
      description: 'Created an end-to-end hotel management solution with booking engine, inventory management, and guest services portal. Features include dynamic pricing, multi-property support, and integrated POS system.',
      period: 'Dec 2019 - Nov 2020',
      category: 'Financial',
      technologies: ['Angular', 'Chart.js', 'Angular Material', 'Bootstrap'],
      type: 'work',
    },

    // Personal Projects
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Designed and developed a modern, responsive portfolio website showcasing my work and skills. Built with React and TypeScript, featuring smooth animations, dark mode, and optimized performance.',
      period: 'Nov 2024 - Dec 2024',
      category: 'Web Development',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      githubLink: 'https://github.com/yourusername/portfolio',
      liveLink: 'https://yourportfolio.com',
      type: 'personal',
    },
    {
      id: 7,
      title: 'Task Manager App',
      description: 'A minimalist task management application with drag-and-drop functionality, priority levels, and due date reminders. Includes offline support using service workers and local storage.',
      period: 'Jun 2024 - Jul 2024',
      category: 'Productivity',
      technologies: ['React', 'Firebase', 'PWA'],
      githubLink: 'https://github.com/yourusername/task-manager',
      type: 'personal',
    },
    {
      id: 8,
      title: 'Weather Dashboard',
      description: 'Interactive weather application with real-time data, 7-day forecasts, and location-based alerts. Features beautiful visualizations and responsive design for mobile and desktop.',
      period: 'Mar 2024 - Apr 2024',
      category: 'Web App',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      githubLink: 'https://github.com/yourusername/weather-app',
      liveLink: 'https://weather.yoursite.com',
      type: 'personal',
    },
  ];

  const filteredProjects = projects.filter(project => project.type === activeTab);
  console.log(filteredProjects);

  const toggleDescription = (projectId: number) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-warm-text mb-4">
            Featured Projects
          </h2>
          <p className="text-warm-textLight text-lg">
            A collection of my professional and personal work
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-warm-card rounded-lg p-1 card-shadow">
            <button
              onClick={() => setActiveTab('work')}
              className={`px-8 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === 'work'
                  ? 'bg-warm-text text-warm-card'
                  : 'text-warm-textLight hover:text-warm-text'
              }`}
            >
              Work Projects
            </button>
            <button
              onClick={() => setActiveTab('personal')}
              className={`px-8 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === 'personal'
                  ? 'bg-warm-text text-warm-card'
                  : 'text-warm-textLight hover:text-warm-text'
              }`}
            >
              Personal Projects
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-warm-card rounded-2xl overflow-hidden card-shadow hover:shadow-xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project thumbnail */}
              <div className="w-full h-48 p-8 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-cream-100 to-cream-200 flex items-center justify-center">
                    <span className="text-5xl">
                      {project.type === 'work' ? '💼' : '🎨'}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6 space-y-4">
                {/* Project header */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-warm-textLight uppercase tracking-wide">
                      {project.category}
                    </span>
                    <span className="text-warm-textLight">{project.period}</span>
                  </div>

                  {/* Title with links */}
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xl font-bold text-warm-text flex-1">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-warm-textLight hover:text-warm-text transition-colors"
                          title="Live Demo"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-warm-textLight hover:text-warm-text transition-colors"
                          title="View Code"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Accordion Button */}
                <button
                  onClick={() => toggleDescription(project.id)}
                  className="w-full flex items-center justify-between py-2 text-sm font-medium text-warm-text hover:text-cream-700 transition-colors"
                >
                  <span>
                    {expandedProject === project.id ? 'Hide' : 'View'} Details
                  </span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      expandedProject === project.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Accordion Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedProject === project.id ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="pt-2 pb-4 space-y-4">
                    <p className="text-sm text-warm-textLight leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div>
                      <p className="text-xs font-semibold text-warm-text mb-2">Technologies:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-cream-100 text-warm-text text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
