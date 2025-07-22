import { useState } from "react";

export default function ScreenshotsSection() {
  const [activeApp, setActiveApp] = useState('programming-buddy');

  const screenshots = {
    'programming-buddy': [
      {
        src: "https://play-lh.googleusercontent.com/uQzaOLy6OqTkGqI6nS4XkYt3dXVn8BxBmS8S6fy-WMMi6QixwsDkXzKo6joc8brXlvRM=w526-h296-rw",
        alt: "Programming Buddy Home Screen"
      },
      {
        src: "https://play-lh.googleusercontent.com/-bDEaUpfCGcRSeiUYGPpYfshMnYjseUdta5l_bB8F7cnDc1ukzO0M4LZuBYbdGg7eUI=w526-h296-rw", 
        alt: "Programming Languages Selection"
      },
      {
        src: "https://play-lh.googleusercontent.com/WNAuIBvwcTUdsI8npgnTzHD_CxPqxCunyTjPci1oka3Xui-sKudAI_0uBNRswyjoTUs=w526-h296-rw",
        alt: "Interview Topics Overview"
      },
      {
        src: "https://play-lh.googleusercontent.com/zvQw9GT32MCQVZUkIX2vo3XWKQUN8mP9PS0ykhBv4F38CxdJ7v-pdDQzYx3rIa3e-I0=w526-h296-rw",
        alt: "Java Topics List"
      }
    ],
    'quizillo': [
      {
        src: "https://techuntried.com/images/quiz1.png",
        alt: "Quizillo Home"
      },
      {
        src: "https://techuntried.com/images/quiz2.png", 
        alt: "Quizillo Categories"
      },
      {
        src: "https://techuntried.com/images/quiz3.png",
        alt: "Quizillo Quiz"
      }
    ],
    'bike-game': [
      {
        src: "https://play-lh.googleusercontent.com/kQRXbbZcZpysR8B3qPLZS0eklLpjcP_VawVsL94LBseIyVcnKkJEHUg7U3lTPFLHqjYv=w526-h296-rw",
        alt: "Bike Game Home"
      },
      {
        src: "https://play-lh.googleusercontent.com/NUesDcilXMMD2hkFpXYYlulUv4Re0aWyYdq853qwA8OpTuCvQ54HJmSKSJc9E0Eliw=w526-h296-rw",
        alt: "Cheat Codes List"
      },
      {
        src: "https://play-lh.googleusercontent.com/ilJpkB60OJgdaPxzUckr7MtijdUp7I2I-UDi8Pdj5AezPcmRF_VMNJDLGxWnuH4OulU=w526-h296-rw",
        alt: "Vehicle Codes"
      }
    ]
  };

  const tabs = [
    { id: 'programming-buddy', label: 'Programming Buddy' },
    { id: 'quizillo', label: 'Quizillo' },
    { id: 'bike-game', label: 'Indian Bike Game' }
  ];

  return (
    <section id="screenshots" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">App Screenshots</h2>
          <p className="mt-4 text-xl text-slate-600">See the beautiful interface and user experience</p>
        </div>

        {/* App Selection Tabs */}
        <div className="mt-12 flex justify-center">
          <div className="bg-slate-100 rounded-xl p-2 inline-flex space-x-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveApp(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeApp === tab.id
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Screenshots Container */}
        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {screenshots[activeApp as keyof typeof screenshots]?.map((screenshot, index) => (
              <div key={index} className="bg-slate-900 rounded-2xl p-4 shadow-xl">
                <img 
                  src={screenshot.src} 
                  alt={screenshot.alt}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
