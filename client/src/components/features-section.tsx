import { Zap, Shield, Compass, Palette, RotateCcw, Heart } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Zap className="text-white h-8 w-8" />,
      title: "Lightning Fast",
      description: "Experience blazing-fast performance with our optimized code and intuitive interfaces.",
      color: "bg-primary"
    },
    {
      icon: <Shield className="text-white h-8 w-8" />,
      title: "Security First", 
      description: "Your data is protected with industry-leading security protocols and encryption.",
      color: "bg-accent"
    },
    {
      icon: <Compass className="text-white h-8 w-8" />,
      title: "Easy Navigation",
      description: "We design user-friendly interfaces to ensure smooth and intuitive navigation for every user.",
      color: "bg-orange-500"
    },
    {
      icon: <Palette className="text-white h-8 w-8" />,
      title: "Beautiful Design",
      description: "Enjoy elegant, intuitive interfaces that make using our apps a pleasure.",
      color: "bg-purple-500"
    },
    {
      icon: <RotateCcw className="text-white h-8 w-8" />,
      title: "Regular Updates",
      description: "We constantly improve our apps with new features and performance enhancements.",
      color: "bg-blue-500"
    },
    {
      icon: <Heart className="text-white h-8 w-8" />,
      title: "Support",
      description: "We're always open to feedback and ready to help users with any questions or issues.",
      color: "bg-pink-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="section-container">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">What Makes Our Apps Special</h2>
          <p className="mt-4 text-xl text-slate-600">Our commitment to quality and user experience</p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center">
                <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center shadow-lg`}>
                  {feature.icon}
                </div>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-4 text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
