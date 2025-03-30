
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TeamSection from '@/components/TeamSection';
import InspirationSection from '@/components/InspirationSection';
import ComponentsSection from '@/components/ComponentsSection';
import WorkingSection from '@/components/WorkingSection';
import MechanicalSection from '@/components/MechanicalSection';
import CodeSection from '@/components/CodeSection';
import DemoSection from '@/components/DemoSection';
import ApplicationsSection from '@/components/ApplicationsSection';
import ContactSection from '@/components/ContactSection';

const Index: React.FC = () => {
  useEffect(() => {
    // Update the document title
    document.title = "Arduino Conveyor Belt Project";
    
    // Smooth scroll to section if URL has hash
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main>
        <HeroSection />
        <TeamSection />
        <InspirationSection />
        <ComponentsSection />
        <WorkingSection />
        <MechanicalSection />
        <CodeSection />
        <DemoSection />
        <ApplicationsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
