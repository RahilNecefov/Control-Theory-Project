
import React, { useEffect, useRef } from 'react';
import { Play } from 'lucide-react';

const DemoSection: React.FC = () => {
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
    <section id="demo" className="section bg-arduino-dark text-white">
      <div className="max-w-6xl mx-auto">
        <h2 
          ref={el => elementsRef.current[0] = el}
          className="text-4xl md:text-5xl font-bold mb-12 text-center slide-item"
        >
          Watch It in <span className="text-arduino-orange">Action</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div 
            ref={el => elementsRef.current[1] = el}
            className="slide-item"
          >
            {/* Video/Animation placeholder */}
            <div className="aspect-video bg-black rounded-xl relative overflow-hidden shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Animated Conveyor Demo */}
                <div className="w-full h-full relative">
                  {/* Conveyor Belt */}
                  <div className="absolute bottom-1/4 w-full h-16 bg-arduino-gray">
                    <div className="h-full w-[200%] animate-conveyor-move">
                      <div className="absolute top-0 h-full w-full bg-repeat-x" style={{
                        backgroundImage: 'linear-gradient(90deg, transparent 0%, transparent 5%, rgba(255, 255, 255, 0.2) 5%, rgba(255, 255, 255, 0.2) 10%, transparent 10%, transparent 20%)',
                        backgroundSize: '50% 100%'
                      }}></div>
                    </div>
                    
                    {/* Objects on conveyor */}
                    <div className="absolute top-1/2 transform -translate-y-1/2 left-1/4 w-8 h-8 bg-arduino-orange rounded animate-conveyor-move" style={{ animationDuration: '8s', animationDelay: '0s' }}></div>
                    
                    <div className="absolute top-1/2 transform -translate-y-1/2 left-1/2 w-8 h-8 bg-arduino-blue rounded-full animate-conveyor-move" style={{ animationDuration: '8s', animationDelay: '2s' }}></div>
                    
                    <div className="absolute top-1/2 transform -translate-y-1/2 left-3/4 w-8 h-8 bg-arduino-teal animate-conveyor-move" style={{ animationDuration: '8s', animationDelay: '4s' }}></div>
                  </div>
                  
                  {/* Arduino + Electronics */}
                  <div className="absolute top-1/4 right-1/4 w-24 h-16 bg-arduino-teal rounded-md"></div>
                  
                  {/* Motor */}
                  <div className="absolute bottom-1/4 transform translate-y-1/2 left-1/4 w-12 h-12 bg-arduino-blue rounded"></div>
                  
                  {/* Sorting mechanism */}
                  <div className="absolute top-1/2 right-1/4 w-4 h-16 bg-arduino-orange animate-[swing_2s_ease-in-out_infinite]"></div>
                </div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-colors cursor-pointer group">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-arduino-orange flex items-center justify-center transition-transform group-hover:scale-110">
                    <Play className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            ref={el => elementsRef.current[2] = el}
            className="slide-item"
          >
            <h3 className="text-2xl font-bold mb-6">Testing Results</h3>
            
            <div className="space-y-6">
              <div className="bg-arduino-gray/20 p-6 rounded-lg border border-arduino-gray/30">
                <h4 className="text-xl font-semibold mb-2 text-arduino-orange">What Worked Well</h4>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start">
                    <span className="text-arduino-blue mr-2">•</span>
                    <span>Precise object detection with IR sensors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-arduino-blue mr-2">•</span>
                    <span>Smooth conveyor movement at various speeds</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-arduino-blue mr-2">•</span>
                    <span>Reliable sorting mechanism for different objects</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-arduino-gray/20 p-6 rounded-lg border border-arduino-gray/30">
                <h4 className="text-xl font-semibold mb-2 text-arduino-orange">Challenges Faced</h4>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start">
                    <span className="text-arduino-blue mr-2">•</span>
                    <span>Belt tension required precise adjustment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-arduino-blue mr-2">•</span>
                    <span>Motor power consumption optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-arduino-blue mr-2">•</span>
                    <span>Sensor calibration for different lighting conditions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
