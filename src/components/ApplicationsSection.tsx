
import React, { useEffect, useRef } from 'react';
import { Factory, Cpu, Bot, WifiIcon } from 'lucide-react';

const ApplicationsSection: React.FC = () => {
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
    <section id="applications" className="section bg-arduino-dark text-white">
      <div className="max-w-6xl mx-auto">
        <h2 
          ref={el => elementsRef.current[0] = el}
          className="text-4xl md:text-5xl font-bold mb-12 text-center slide-item"
        >
          Where Can We <span className="text-arduino-orange">Use</span> This?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div 
            ref={el => elementsRef.current[1] = el}
            className="slide-item"
          >
            <h3 className="text-2xl font-bold mb-6">Real-world Applications</h3>
            
            <div className="space-y-6">
              <div className="bg-arduino-gray/20 p-6 rounded-lg border border-arduino-gray/30 flex items-start">
                <Factory className="w-8 h-8 text-arduino-orange mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold mb-2">Manufacturing</h4>
                  <p className="text-white/80">
                    Automating small-scale production lines for sorting, quality control, and assembly processes in DIY manufacturing setups.
                  </p>
                </div>
              </div>
              
              <div className="bg-arduino-gray/20 p-6 rounded-lg border border-arduino-gray/30 flex items-start">
                <Cpu className="w-8 h-8 text-arduino-orange mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold mb-2">Educational Platforms</h4>
                  <p className="text-white/80">
                    Teaching automation principles, motor control, and sensor integration in engineering and robotics courses.
                  </p>
                </div>
              </div>
              
              <div className="bg-arduino-gray/20 p-6 rounded-lg border border-arduino-gray/30 flex items-start">
                <Bot className="w-8 h-8 text-arduino-orange mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold mb-2">Hobby Robotics</h4>
                  <p className="text-white/80">
                    Creating automated systems for hobby projects like coin sorters, candy dispensers, or custom vending machines.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            ref={el => elementsRef.current[2] = el}
            className="slide-item"
            style={{ transitionDelay: '0.2s' }}
          >
            <h3 className="text-2xl font-bold mb-6">Future Enhancements</h3>
            
            <div className="bg-white/10 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4 text-arduino-orange">What's Next?</h4>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-arduino-blue rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <WifiIcon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h5 className="font-bold">IoT Integration</h5>
                    <p className="text-white/80">Connect via WiFi/Bluetooth for remote monitoring and control from smartphones</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-arduino-blue rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Cpu className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h5 className="font-bold">Machine Learning</h5>
                    <p className="text-white/80">Add computer vision for advanced object recognition and sorting capabilities</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-arduino-blue rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h5 className="font-bold">Multi-Belt Systems</h5>
                    <p className="text-white/80">Expand to interconnected conveyor networks for more complex automation tasks</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div 
              ref={el => elementsRef.current[3] = el}
              className="mt-8 p-6 bg-arduino-orange/20 border border-arduino-orange/30 rounded-lg text-center slide-item"
            >
              <p className="text-white/90 italic">
                "The possibilities are limited only by your imagination and creativity."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
