import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AppsShowcase from "@/components/apps-showcase";
import FeaturesSection from "@/components/features-section";
import ScreenshotsSection from "@/components/screenshots-section";
import TestimonialsSection from "@/components/testimonials-section";
import FAQSection from "@/components/faq-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <AppsShowcase />
      <FeaturesSection />
      <ScreenshotsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
