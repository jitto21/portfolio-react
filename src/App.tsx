import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <footer className="bg-warm-card py-12 border-t border-cream-200">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-warm-textLight text-sm">
                &copy; {new Date().getFullYear()} Jitto Thomas Palathra. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a href="#" className="text-warm-textLight hover:text-warm-text transition-colors text-sm">
                  Twitter
                </a>
                <a href="https://www.linkedin.com/in/jitto21/" className="text-warm-textLight hover:text-warm-text transition-colors text-sm">
                  LinkedIn
                </a>
                <a href="#" className="text-warm-textLight hover:text-warm-text transition-colors text-sm">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
