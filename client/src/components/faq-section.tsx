import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Are all your apps available for both iOS and Android?",
      answer: "No, all our applications are developed exclusively for Android devices. You can download them directly from the Google Play Store. We ensure a smooth and consistent experience across all supported Android versions."
    },
    {
      question: "Do your apps offer free versions or trials?",
      answer: "Yes, all our apps are completely free to use and include all core features. To support development, we may occasionally show ads. We aim to keep the experience smooth and non-intrusive."
    },
    {
      question: "How do you handle data security across your app portfolio?",
      answer: "We take data security very seriously across our entire app catalog. All data is encrypted both in transit and at rest. We use industry-standard security protocols, conduct regular security audits, and comply with privacy regulations including GDPR and CCPA."
    },
    {
      question: "Do your apps work offline?",
      answer: "Most of our apps offer core functionality that works offline. Your data is automatically synced once the device is back online. However, features that rely on real-time content—such as new categories or quiz levels—require an internet connection for full functionality."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
          <p className="mt-4 text-xl text-slate-600">Get answers to common questions about our apps</p>
        </div>

        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-slate-200 rounded-lg">
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-semibold text-slate-900">{faq.question}</span>
                {openItems.includes(index) ? (
                  <Minus className="h-5 w-5 text-slate-500" />
                ) : (
                  <Plus className="h-5 w-5 text-slate-500" />
                )}
              </button>
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
