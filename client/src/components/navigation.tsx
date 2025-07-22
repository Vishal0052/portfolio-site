import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="section-container">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-slate-800">BhardwajDeveloper</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-slate-600 hover:text-primary transition-colors duration-200"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('apps')}
                className="text-slate-600 hover:text-primary transition-colors duration-200"
              >
                Our Apps
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="text-slate-600 hover:text-primary transition-colors duration-200"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('screenshots')}
                className="text-slate-600 hover:text-primary transition-colors duration-200"
              >
                Screenshots
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-slate-600 hover:text-primary transition-colors duration-200"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-slate-600 hover:text-primary transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6 text-slate-600" /> : <Menu className="h-6 w-6 text-slate-600" />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-3 py-2 text-slate-600 hover:text-primary"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('apps')}
              className="block w-full text-left px-3 py-2 text-slate-600 hover:text-primary"
            >
              Our Apps
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="block w-full text-left px-3 py-2 text-slate-600 hover:text-primary"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('screenshots')}
              className="block w-full text-left px-3 py-2 text-slate-600 hover:text-primary"
            >
              Screenshots
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left px-3 py-2 text-slate-600 hover:text-primary"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 text-slate-600 hover:text-primary"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
