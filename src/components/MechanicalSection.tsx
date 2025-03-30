
import React, { useEffect, useRef } from 'react';
import { Layers3 } from 'lucide-react';

const MechanicalSection: React.FC = () => {
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
    <section id="mechanical" className="section bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 
          ref={el => elementsRef.current[0] = el}
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-arduino-dark slide-item"
        >
          Crafting the <span className="text-arduino-blue">Conveyor</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div 
            ref={el => elementsRef.current[1] = el}
            className="slide-item order-2 lg:order-1"
          >
            <div className="bg-arduino-light p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-arduino-dark">Design Process</h3>
              
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="text-lg font-bold text-arduino-blue mb-2">Planning & Measurement</h4>
                  <p className="text-arduino-gray">
                    Determining optimal belt width, length, and motor requirements based on intended application.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="text-lg font-bold text-arduino-blue mb-2">Materials Selection</h4>
                  <p className="text-arduino-gray">
                    PVC sheets for the frame, rubber belt for durability, aluminum rollers for smooth operation.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="text-lg font-bold text-arduino-blue mb-2">Assembly & Testing</h4>
                  <p className="text-arduino-gray">
                    Precision alignment of rollers and motors for optimal belt tension and movement.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="bg-arduino-dark text-white p-4 rounded-lg text-center">
                  <h5 className="font-bold">PVC</h5>
                  <p className="text-sm text-white/70">Frame</p>
                </div>
                <div className="bg-arduino-dark text-white p-4 rounded-lg text-center">
                  <h5 className="font-bold">Rubber</h5>
                  <p className="text-sm text-white/70">Belt</p>
                </div>
                <div className="bg-arduino-dark text-white p-4 rounded-lg text-center">
                  <h5 className="font-bold">Aluminum</h5>
                  <p className="text-sm text-white/70">Rollers</p>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            ref={el => elementsRef.current[2] = el}
            className="slide-item relative order-1 lg:order-2"
          >
            <div className="bg-arduino-dark rounded-xl overflow-hidden h-96">
              {/* 3D model representation */}
              <div className="h-full w-full relative">
                {/* Base frame */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-32 bg-arduino-gray rounded-lg animate-spin-slow" style={{ animationDuration: '30s' }}>
                  {/* Belt */}
                  <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-8 bg-black rounded-lg"></div>
                  
                  {/* Front roller */}
                  <div className="absolute top-1/4 left-[5%] transform -translate-y-1/2 w-6 h-12 bg-arduino-light rounded-full"></div>
                  
                  {/* Back roller */}
                  <div className="absolute top-1/4 right-[5%] transform -translate-y-1/2 w-6 h-12 bg-arduino-light rounded-full"></div>
                  
                  {/* Motor */}
                  <div className="absolute top-3/4 left-[10%] transform -translate-y-1/2 w-16 h-16 bg-arduino-blue rounded"></div>
                  
                  {/* Arduino */}
                  <div className="absolute top-3/4 right-[10%] transform -translate-y-1/2 w-14 h-10 bg-arduino-teal rounded-md"></div>
                  
                  {/* Sensor */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-arduino-orange rounded"></div>
                </div>
                
                {/* Front exploded view indicators */}
                <div className="absolute top-1/4 left-1/4 w-20 h-20">
                  <Layers3 className="w-10 h-10 text-arduino-orange animate-float" />
                  <div className="w-px h-16 bg-arduino-orange/50 absolute top-full left-1/2 transform -translate-x-1/2"></div>
                </div>
                
                <div className="absolute bottom-1/4 right-1/4 w-20 h-20">
                  <Layers3 className="w-10 h-10 text-arduino-blue animate-float" style={{ animationDelay: '0.5s' }} />
                  <div className="w-px h-16 bg-arduino-blue/50 absolute bottom-full left-1/2 transform -translate-x-1/2"></div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-arduino-orange text-white px-4 py-2 rounded-full text-sm">
              3D Model View
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MechanicalSection;
