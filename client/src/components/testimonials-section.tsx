import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      rating: 5,
      text: "Programming Buddy helped me prepare for my coding interview. The Java and Python tutorials are excellent, and the practice questions are very similar to real interviews.",
      author: "Rahul Sharma",
      role: "Software Developer"
    },
    {
      rating: 5,
      text: "According to me there is no doubt Quizillo is really very interesting and helpful for me. I have improved a lot by this app.",
      author: "Srishti",
      role: "Student"
    },
    {
      rating: 5,
      text: "The Indian Bike Game cheat codes work perfectly! Easy to use interface and all the latest codes are available. Great work by BhardwajDeveloper team.",
      author: "Arjun Patel",
      role: "Gaming Enthusiast"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="section-container">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">What Our Users Say</h2>
          <p className="mt-4 text-xl text-slate-600">Hear from people who love our apps</p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 mb-6">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-slate-900">{testimonial.author}</p>
                <p className="text-slate-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
