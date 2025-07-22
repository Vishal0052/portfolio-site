import { GraduationCap, HelpCircle, Bike, CheckCircle, ExternalLink } from "lucide-react";

export default function AppsShowcase() {
  return (
    <section id="apps" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Our Mobile Apps</h2>
          <p className="mt-4 text-xl text-slate-600">Discover our innovative solutions designed for modern learners and developers</p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Programming Buddy - Featured App */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow duration-300 lg:col-span-1 ring-2 ring-primary/20">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                  <GraduationCap className="text-white h-8 w-8" />
                </div>
                <div className="ml-4">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-2">FEATURED</span>
                  <h3 className="text-2xl font-bold text-slate-900">Programming Buddy</h3>
                </div>
              </div>
              <p className="text-slate-600 mb-6">
                Master Java, C, C++, and Python with interactive tutorials, interview questions, and practice quizzes. Perfect for students and job seekers.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-slate-600">
                  <CheckCircle className="text-accent mr-3 h-5 w-5" />
                  <span>Step-by-step tutorials</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <CheckCircle className="text-accent mr-3 h-5 w-5" />
                  <span>Interview preparation</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <CheckCircle className="text-accent mr-3 h-5 w-5" />
                  <span>Interactive quizzes</span>
                </div>
              </div>
              <a 
                href="https://play.google.com/store/apps/details?id=com.vishal.programming_buddy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <i className="fab fa-google-play mr-2"></i>
                Get on Google Play
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quizillo */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center shadow-lg">
                  <HelpCircle className="text-white h-8 w-8" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-slate-900">Quizillo</h3>
                </div>
              </div>
              <p className="text-slate-600 mb-6">
                Play engaging quizzes on Science, Math, GK, and many other exciting topics! Test your knowledge with fun trivia.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-slate-600">
                  <CheckCircle className="text-accent mr-3 h-5 w-5" />
                  <span>Multiple Categories</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <CheckCircle className="text-accent mr-3 h-5 w-5" />
                  <span>Fun Trivia</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <CheckCircle className="text-accent mr-3 h-5 w-5" />
                  <span>Interactive Gameplay</span>
                </div>
              </div>
              <a 
                href="https://play.google.com/store/apps/details?id=com.techuntried.quiz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                <i className="fab fa-google-play mr-2"></i>
                Get on Google Play
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Indian Bike Game Cheat Codes */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Bike className="text-white h-8 w-8" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-slate-900">Indian Bike Game Cheat Codes</h3>
                </div>
              </div>
              <p className="text-slate-600 mb-6">
                Unlock every mission, vehicle, and plugin using our latest cheat code collection for Indian Bike Driving 3D.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-slate-600">
                  <CheckCircle className="text-accent mr-3 h-5 w-5" />
                  <span>Latest cheat codes</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <CheckCircle className="text-accent mr-3 h-5 w-5" />
                  <span>Offline access</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <CheckCircle className="text-accent mr-3 h-5 w-5" />
                  <span>Easy copy & paste</span>
                </div>
              </div>
              <a 
                href="https://play.google.com/store/apps/details?id=com.vishal.bikeDriving3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors duration-200"
              >
                <i className="fab fa-google-play mr-2"></i>
                Get on Google Play
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
