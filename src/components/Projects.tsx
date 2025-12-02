import { useState } from 'react';
import quotesOnTheGoImg from '../assets/quotes-on-the-go.webp';
import cvsHealthImg from '../assets/cvs-health-logo.webp';
import tonicPosImg from '../assets/tonic-pos-logo.webp';
import epImg from '../assets/entertainment-partners-logo.webp';
import aetnaImg from '../assets/aetna-logo.webp';
import locationFinderImg from '../assets/location-finder-logo.webp';
import angularImg from '../assets/angular-logo.webp';
import nextJsImg from '../assets/nextjs-logo.webp';

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
      description: 'A POS software dashboard application (TONIC POS) developed using Angular and TypeScript, RxJS, NgRx for state management and integrating Chart.js, D3.js for enhanced data visualization and decision-making.',
      period: 'July 2024 - Dec 2025',
      category: 'Hospitality',
      technologies: ['Angular', 'NgRx', 'RxJS', 'Chart.js', 'D3.js', 'Angular Material', 'Bootstrap', 'Jest'],
      type: 'work',
    },
    {
      id: 2,
      title: 'Smart Time Fenix',
      client: 'Entertainment Partners',
      image: epImg,
      description: 'An enterprise-grade payroll processing software called Smart Time Fenix built using Angular and TypeScript, RxJS, NgRx for state management in the front-end, Node.JS and Express with inversify.js to achieve IOC using Dependency injection as the middleware and Java Spring Boot as the backend. Redis and MySQL as databases',
      period: 'Nov 2022 - June 2024',
      category: 'Entertainment',
      technologies: ['React', 'TypeScript', 'Redis', 'CDN'],
      type: 'work',
    },
    {
      id: 3,
      title: 'Quotes on the go',
      client: 'Aetna',
      image: quotesOnTheGoImg,
      description: 'This is a native mobile application available in iOS and Android built using Ionic with Angular to help the agents with calculating insurance quotes on the go',
      period: 'Mar 2022 - Oct 2022',
      category: 'Financial',
      liveLink: 'https://play.google.com/store/apps/details?id=com.aetna.ssieappmobile&hl=en_IN',
      technologies: ['Ionic', 'Angular', 'Typescript', 'Angular Material', 'Bootstrap'],
      type: 'work',
    },
    {
      id: 4,
      title: 'Aetna Quote & Enroll',
      client: 'Aetna',
      image: aetnaImg,
      description: 'This is a web application built using Angular to quote and enroll various insurance products.',
      period: 'Dec 2020 - Feb 2022',
      category: 'Financial',
      technologies: ['Angular', 'Angular Material', 'Bootstrap'],
      type: 'work',
    },
    {
      id: 5,
      title: 'CVS Dashboard',
      client: 'CVS Health',
      image: cvsHealthImg,
      description: 'This is a web application built using Angular to visualize data in tables and charts for processed or failed claims and other data.',
      period: 'Dec 2019 - Nov 2020',
      category: 'Financial',
      technologies: ['Angular', 'Chart.js', 'Angular Material', 'Bootstrap'],
      type: 'work',
    },

    // Personal Projects
    {
      id: 7,
      title: 'E-directory application',
      description: 'Developed a Next.js-based e-directory application with a Firebase, Firestore backend integrated with India Post Digicode, advanced member filters, and features like event notifications and a shared calendar for birthdays, anniversaries, and invitations.',
      period: 'May 2025 - Aug 2025',
      category: 'Productivity',
      image: nextJsImg,
      technologies: ['React', 'Next.JS', 'Firebase', 'Firestore', 'Firebase Authentication', 'Supabase'],
      liveLink: 'https://www.palathra.in/',
      githubLink: 'https://github.com/jitto21/palathra-app',
      type: 'personal',
    },
    {
      id: 6,
      title: 'Angular Custom Input',
      description: 'Input field that masks the last characters entered by the user. Masks on blur and retains the original value on focus of the input field',
      period: 'Jan 2023',
      image: angularImg,
      category: 'NPM Package',
      technologies: ['Angular', 'TypeScript', 'Angular Material'],
      liveLink: 'https://www.npmjs.com/package/custom-input-lib-jtp',
      type: 'personal',
    },
    {
      id: 8,
      title: 'Location Finder',
      description: 'This Angular application enables users to input longitude and latitude coordinates and displays a precise pinpoint marker on an interactive map powered by the Leaflet library.',
      period: 'Sept 2022',
      category: 'Productivity',
      image: locationFinderImg,
      technologies: ['Angular', 'TypeScript', 'Angular Material', 'leaflet'],
      githubLink: 'https://github.com/jitto21/radiXplore',
      liveLink: 'https://radi-explore.netlify.app/',
      type: 'personal',
    },
  ];

  const filteredProjects = projects.filter(project => project.type === activeTab);

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
