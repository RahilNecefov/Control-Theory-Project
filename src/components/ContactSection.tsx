
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Youtube, Box } from 'lucide-react';

const ContactSection: React.FC = () => {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    elementsRef.current.forEach(el => {
      if (el) observer.observe(el);
    });
    
    return () => {
      elementsRef.current.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="contact" className="section bg-gradient-to-b from-white to-arduino-light">
      <div className="max-w-6xl mx-auto text-center">
        <h2 
          ref={el => elementsRef.current[0] = el}
          className="text-4xl md:text-5xl font-bold mb-6 text-arduino-dark slide-item"
        >
          Thanks for Visiting!
        </h2>
        
        <p 
          ref={el => elementsRef.current[1] = el}
          className="text-xl mb-12 text-arduino-gray slide-item"
        >
          Built with passion and curiosity
        </p>
        
        <div 
          ref={el => elementsRef.current[2] = el}
          className="flex flex-wrap justify-center gap-6 mb-16 slide-item"
        >
          <Button 
            variant="outline" 
            className="bg-white text-arduino-dark border-arduino-dark hover:bg-arduino-light flex items-center gap-2 px-8 py-6"
          >
            <Github className="w-5 h-5" />
            GitHub
          </Button>
          
          <Button 
            variant="outline" 
            className="bg-white text-arduino-dark border-arduino-dark hover:bg-arduino-light flex items-center gap-2 px-8 py-6"
          >
            <Youtube className="w-5 h-5" />
            YouTube Video
          </Button>
          
          <Button 
            variant="outline" 
            className="bg-white text-arduino-dark border-arduino-dark hover:bg-arduino-light flex items-center gap-2 px-8 py-6"
          >
            <Box className="w-5 h-5" />
            Contact Me
          </Button>
        </div>
        
        <div 
          ref={el => elementsRef.current[3] = el}
          className="slide-item"
        >
          {/* Logo or Robot Signature */}
          <div className="w-24 h-24 bg-arduino-blue rounded-full mx-auto flex items-center justify-center mb-8">
            <div className="w-12 h-12 bg-white rounded-md flex items-center justify-center">
              <div className="w-6 h-6 bg-arduino-orange rounded-sm"></div>
            </div>
          </div>
          
          <p className="text-arduino-gray text-sm">© 2023 Arduino Conveyor Project</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
