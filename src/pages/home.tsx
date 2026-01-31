import { Header } from "../components/Header";
import { AboutSection } from "../components/about-section";
import { FeaturesSection } from "../components/features-section";
import { CTASection } from "../components/cta-section";
import { Footer } from "../components/Footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in-scroll');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.85;
        if (isVisible && !element.classList.contains('visible')) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AboutSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </div>
  );
}
