
import React, { useEffect, useRef } from 'react';
import { Package, Factory, Move } from 'lucide-react';

const InspirationSection: React.FC = () => {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
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
    <section id="inspiration" className="section bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 
          ref={el => elementsRef.current[0] = el} 
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-arduino-dark slide-item"
        >
          Why a <span className="text-arduino-blue">Conveyor Belt</span> Robot?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div 
            ref={el => elementsRef.current[1] = el}
            className="flex flex-col items-center text-center slide-item"
          >
            <div className="w-20 h-20 bg-arduino-light rounded-full flex items-center justify-center mb-4">
              <Package className="w-10 h-10 text-arduino-blue" />
            </div>
            <h3 className="text-xl font-bold mb-3">Automation</h3>
            <p className="text-arduino-gray">
              Automates manual tasks like sorting, packaging, and transporting items with precision and consistency.
            </p>
          </div>
          
          <div 
            ref={el => elementsRef.current[2] = el}
            className="flex flex-col items-center text-center slide-item"
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="w-20 h-20 bg-arduino-light rounded-full flex items-center justify-center mb-4">
              <Factory className="w-10 h-10 text-arduino-blue" />
            </div>
            <h3 className="text-xl font-bold mb-3">Industrial Applications</h3>
            <p className="text-arduino-gray">
              Perfect for small-scale factory simulations, educational demonstrations, and DIY manufacturing projects.
            </p>
          </div>
          
          <div 
            ref={el => elementsRef.current[3] = el}
            className="flex flex-col items-center text-center slide-item"
            style={{ transitionDelay: '0.4s' }}
          >
            <div className="w-20 h-20 bg-arduino-light rounded-full flex items-center justify-center mb-4">
              <Move className="w-10 h-10 text-arduino-blue" />
            </div>
            <h3 className="text-xl font-bold mb-3">Smart Automation</h3>
            <p className="text-arduino-gray">
              Integrates sensors and programmable logic for intelligent object detection, sorting, and processing.
            </p>
          </div>
        </div>
        
        <div 
          ref={el => elementsRef.current[4] = el}
          className="bg-arduino-light p-8 rounded-2xl shadow-inner slide-item"
        >
          <h3 className="text-2xl font-bold mb-4 text-arduino-dark">Problem It Solves</h3>
          <p className="text-lg text-arduino-gray leading-relaxed">
            Manual sorting and movement of objects is time-consuming, inconsistent, and labor-intensive. 
            Our Arduino conveyor system provides an affordable, customizable solution that can be 
            adapted for various applications—from sorting different-sized objects to creating 
            automated production lines for small-scale projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InspirationSection;
