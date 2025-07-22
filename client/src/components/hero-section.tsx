import { ArrowRight, Code } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-gradient-to-br from-slate-50 to-white py-20 lg:py-32">
      <div className="section-container">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Innovative Mobile <span className="text-primary">Experiences</span>
              </h1>
              <p className="mt-6 text-xl text-slate-600 max-w-3xl">
                Creating beautiful, intuitive apps that solve real-world problems. Learn programming, prepare for interviews, and enhance your skills with our comprehensive mobile applications.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => scrollToSection('apps')}
                  className="btn-primary"
                >
                  Explore Our Apps
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="btn-secondary"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-5">
            <div className="relative">
              <div className="mx-auto w-64 sm:w-80">
                <div className="relative">
                  <div className="bg-slate-900 rounded-3xl p-2 shadow-2xl">
                    <img 
                      src="https://play-lh.googleusercontent.com/uQzaOLy6OqTkGqI6nS4XkYt3dXVn8BxBmS8S6fy-WMMi6QixwsDkXzKo6joc8brXlvRM=w526-h296-rw" 
                      alt="Programming Buddy App Interface" 
                      className="w-full h-auto rounded-2xl"
                    />
                  </div>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-lg">
                    <Code className="text-white h-8 w-8" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
