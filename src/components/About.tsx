import protfolioImg from '../../src/assets/portfolio-dp.jpg';

const About = () => {
  const experiences = [
    { role: 'Senior Software Engineer', company: 'at Vrize', period: 'Nov 2022 - Dec 2025' },
    { role: 'Front end developer', company: 'at Cognizant Technology Solutions', period: 'Dec 2019 - Oct 2022' },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center py-24 px-6">
      <div className="max-w-5xl mx-auto w-full">
        <div className="bg-warm-card rounded-3xl p-8 md:p-16 card-shadow animate-slide-up">
          <div className="grid md:grid-cols-5 gap-12 items-start">
            {/* Left Content */}
            <div className="md:col-span-3 space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-warm-text mb-8">
                  A little bit<br />about me
                </h2>
                <div className="space-y-4 text-warm-textLight text-base leading-relaxed">
                  <p>
                    I'm a highly skilled web developer with a strong technical foundation in Angular, Redux, TypeScript, and a range of other technologies.
                    I'm currently working as a <span className="font-semibold text-warm-text">Senior Software Engineer</span> in <span className="font-semibold text-warm-text">Vrize</span>.
                  </p>
                  <p>
                    In terms of some more things I enjoy, I like to travel and watch sports (mostly football)
                  </p>
                  <p>
                    Alongside that, here and there I play some console games and stuff like that.
                  </p>
                </div>
              </div>

              {/* Experience & Featured */}
              <div className="pt-4">
                <div>
                  <h3 className="text-sm font-semibold text-warm-text mb-4">Work Experience</h3>
                  <div className="space-y-3">
                    {experiences.map((exp, index) => (
                      <div key={index} className="text-sm text-warm-textLight">
                        <div className="font-medium text-warm-text">{exp.role}</div>
                        <div className="text-xs">{exp.company}</div>
                        <div className="text-xs">{exp.period}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="md:col-span-2 flex justify-center items-start">
              <div className="relative w-64 h-80 transform -rotate-3 hover:rotate-0 transition-transform duration-500 animate-float">
                <div className="absolute inset-0 bg-gradient-to-br from-cream-200 to-cream-300 rounded-2xl shadow-xl overflow-hidden">
                  {/* Placeholder for image - replace with actual image */}
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <img src={protfolioImg} alt="profile" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
