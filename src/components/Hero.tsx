const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-24"
    >
      <div className="max-w-4xl mx-auto">
        <div className="bg-warm-card rounded-3xl p-16 md:p-24 card-shadow animate-fade-in">
          <div className="text-center space-y-8">
            {/* Status indicator */}
            <div className="flex items-center justify-center gap-2 text-sm text-warm-textLight">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Available for work on creative web projects</span>
            </div>

            {/* Main heading */}
            <h1 className="text-6xl md:text-8xl font-bold text-warm-text tracking-tight">
              Jitto Thomas Palathra
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-warm-textLight max-w-2xl mx-auto leading-relaxed">
              I'm a front end and full stack developer having 6 years of digital experience
              working in various impactful projects in the industry across 
              <span className="font-semibold text-warm-text"> healthcare, entertainment and hospitality domains</span>.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-12 py-4 bg-warm-text text-warm-card rounded-lg hover:bg-cream-800 transition-all duration-300 font-medium text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Say hello
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
