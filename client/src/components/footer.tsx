import { ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="section-container">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Explore Our Apps</h3>
          <p className="text-slate-300 mb-8">Download our apps today and transform your digital experience</p>
          
          <div className="bg-slate-800 rounded-2xl p-8 max-w-md mx-auto">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-primary text-white text-sm font-medium rounded-full">Featured App</span>
            </div>
            <h4 className="text-xl font-bold mb-2">Programming Buddy</h4>
            <p className="text-slate-300 mb-6">Master Java, C, C++, and Python with interactive tutorials and interview preparation!</p>
            <a 
              href="https://play.google.com/store/apps/details?id=com.vishal.programming_buddy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <i className="fab fa-google-play mr-2"></i>
              GET IT ON Google Play
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-700">
            <p className="text-slate-300">&copy; 2025 BhardwajDeveloper. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
