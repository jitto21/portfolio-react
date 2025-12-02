interface WorkExperience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  responsibilities: string[];
  skills: string[];
}

const Experience = () => {
  const workExperiences: WorkExperience[] = [
    {
      id: 1,
      company: 'Vrize',
      role: 'Senior Software Engineer',
      period: 'Nov 2022 - Dec 2025',
      description: 'Revamp of a POS software dashboard application (TONIC POS) using Angular and TypeScript, RxJS, NgRx for state management and integrating Chart.js, D3.js and contributed as a team player in developing an enterprise-grade payroll processing software called Smart Time Fenix, leading to a 30% reduction in payroll processing time and increased customer satisfaction.',
      responsibilities: [
        'Boosted application performance by 30% by using SVG sprites for icon management, ensuring accessibility and scalability.',
        'Conducted code reviews and maintained 75%+ unit test coverage using Jest, ensuring quality and stability as part of the Test-Driven Development (TDD) process.',
        'Worked closely with UI/UX designers to ensure design specifications were met and to create a seamless, user-friendly interface and WCAG-compliant components, using Figma for design collaboration.',
        'Mentored junior developers, providing technical guidance, best practices in Angular, TypeScript, and state management, fostering growth and knowledge-sharing across the team.',
        'Integrated Java Spring Boot RESTful APIs through a Node.js and Express middleware layer, maintaining over 75% unit test coverage with Mocha and Chai.',
        'Implemented key technology solutions for product expansion into the UK entertainment industry, contributing to a 40% growth in international market presence and a strengthened competitive position for the company.',
        'Implemented object-oriented programming in TypeScript with the InversifyJS package in Node.js to achieve Inversion of Control through the dependency injection design pattern.'
      ],
      skills: ['Angular', 'TypeScript', 'NgRx', 'RxJS', 'Jest', 'Mocha', 'Chai', 'Node.JS', 'Express', 'Inversify', 'Bootstrap', 'Angular Material', 'SVG sprite', 'D3.js', 'Chart.js'],
    },
    {
      id: 2,
      company: 'Cognizant Technology Solutions',
      role: 'Front End Developer',
      period: 'Dec 2019 - Oct 2022',
      description: 'Developed a user-friendly mobile and web app using Angular with Ionic for Aetna Quote and Enroll, leading to a 20% increase in mobile enrollment and better accessibility for customers, resulting in improved user engagement and customer retention.',
      responsibilities: [
        'Achieved a 7/10 web accessibility score by diligently following accessibility best practices, leading to better SEO, increased user satisfaction and improved brand reputation.',
        'Analysed and enhanced accessibility standards by leveraging testing tools like Axe, Wave, Google Lighthouse, and NVDA screen reader, leading to a 70% improvement in website accessibility. This positively impacted user satisfaction and brand reputation. ',
        'Utilised Chart.JS and D3 to transform Java API data into dynamic charts, tables, and visualisations, enriching the user experience and supporting informed decision-making for the business.',
        'Collaborated with DevOps in building the CI/CD pipeline for Ionic code repository for iOS and android builds.'
      ],
      skills: ['Angular', 'TypeScript', 'NgRx', 'RxJS', 'Jest', 'Bootstrap', 'Angular Material', 'SEO', 'WCAG', 'Ionic', 'Chart.js'],
    },
  ];

  const allSkills = [
    // Frontend
    'Angular', 'React', 'TypeScript', 'JavaScript', 'Ionic', 'Bootstrap', 'Angular Material', 'Chart.js', 'D3.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS',
    'NgRx', 'RxJS',
    // Backend
    'Node.js', 'Express', 'REST API', 'Firebase', 'Firestore',
    // Database
    'MongoDB', 'MySQL',
    // DevOps & Tools
    'AWS', 'Git', 'CI/CD', 'Jenkins', 'Jira', 'Splunk', 'Spinnaker',
    // Others
    'Agile', 'Scrum', 'Jest', 'Mocha', 'Chai', 'Jasmine', 'Karma', 'Webpack', 'Vite',
  ];

  return (
    <section id="experience" className="min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-warm-text mb-4">
            Work Experience
          </h2>
          <p className="text-warm-textLight text-lg">
            My professional journey and technical expertise
          </p>
        </div>

        <div className="bg-warm-card rounded-3xl p-8 md:p-12 card-shadow">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Timeline */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-warm-text mb-8">Timeline</h3>
              <div className="space-y-8">
                {workExperiences.map((exp, index) => (
                  <div key={exp.id} className="relative pl-8 pb-8 border-l-2 border-cream-200">
                    {/* Timeline dot */}
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-warm-text rounded-full border-4 border-warm-card"></div>

                    {/* Content */}
                    <div className="space-y-4">
                      {/* Header */}
                      <div>
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <h4 className="text-xl font-bold text-warm-text">{exp.role}</h4>
                          <span className="text-sm text-warm-textLight whitespace-nowrap">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-warm-textLight font-medium">{exp.company}</p>
                      </div>

                      {/* Description */}
                      <p className="text-warm-textLight leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Responsibilities */}
                      <div>
                        <p className="text-sm font-semibold text-warm-text mb-2">
                          Key Responsibilities:
                        </p>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-sm text-warm-textLight p-2 rounded-lg hover:bg-cream-100 transition-colors duration-200 cursor-default"
                            >
                              <svg
                                className="w-5 h-5 text-warm-text flex-shrink-0 mt-0.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills used */}
                      <div>
                        <p className="text-sm font-semibold text-warm-text mb-2">
                          Technologies Used:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-cream-100 text-warm-text text-xs rounded-full hover:bg-warm-text hover:text-warm-card transition-colors duration-200 cursor-pointer"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Remove border for last item */}
                    {index === workExperiences.length - 1 && (
                      <div className="absolute bottom-0 left-0 w-0.5 h-8 bg-warm-card"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - All Skills */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24">
                <h3 className="text-2xl font-bold text-warm-text mb-8">All Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {allSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-warm-text text-warm-card text-sm rounded-full hover:bg-cream-700 hover:scale-105 transition-all duration-200 cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
