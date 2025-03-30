
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const beltRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-conveyor-move');
        }
      },
      { threshold: 0.1 }
    );
    
    if (beltRef.current) {
      observer.observe(beltRef.current);
    }
    
    return () => {
      if (beltRef.current) {
        observer.unobserve(beltRef.current);
      }
    };
  }, []);
  
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('inspiration');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="section bg-gradient-to-b from-arduino-light to-white relative overflow-hidden">
      <div className="absolute w-full h-full opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-arduino-blue animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-arduino-orange animate-pulse-glow"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 rounded-full bg-arduino-teal animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Arduino <span className="text-arduino-blue">Conveyor Belt</span> Project
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-arduino-gray animate-fade-in" style={{ animationDelay: '0.3s' }}>
          A DIY Smart Conveyor System with Arduino Automation
        </p>
        
        <div className="w-full max-w-3xl mx-auto mb-12">
          <div className="conveyor-belt animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div ref={beltRef} className="conveyor-line"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex justify-around w-full">
              <div className="w-8 h-8 bg-arduino-orange rounded-md animate-float" style={{ animationDelay: '0s' }}></div>
              <div className="w-8 h-8 bg-arduino-teal rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
              <div className="w-8 h-8 bg-arduino-blue animate-float" style={{ animationDelay: '0.8s' }}></div>
            </div>
          </div>
        </div>
        
        <Button 
          onClick={scrollToNextSection}
          variant="default" 
          className="bg-arduino-blue hover:bg-arduino-teal text-white rounded-full px-8 py-6 text-lg animate-fade-in"
          style={{ animationDelay: '0.9s' }}
        >
          Start the journey <ArrowDown className="ml-2" size={18} />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
