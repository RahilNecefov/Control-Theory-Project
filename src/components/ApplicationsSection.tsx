
import React, { useEffect, useRef } from 'react';
import { Factory, Package, Robot } from 'lucide-react';

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
    <section id="applications" className="section bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 
          ref={el => elementsRef.current[0] = el}
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-arduino-dark slide-item"
        >
          Where Can We <span className="text-arduino-blue">Use This</span>?
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div 
            ref={el => elementsRef.current[1] = el}
            className="slide-item"
          >
            <div className="bg-gradient-to-br from-arduino-light to-white p-8 rounded-xl shadow-md h-full flex flex-col">
              <div className="w-16 h-16 bg-arduino-blue rounded-full flex items-center justify-center mb-6">
                <Factory className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-arduino-dark">Small-Scale Production</h3>
              
              <ul className="space-y-3 text-arduino-gray mt-auto">
                <li className="flex items-start">
                  <span className="text-arduino-orange mr-2">•</span>
                  <span>Craft workshop automation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-arduino-orange mr-2">•</span>
                  <span>Small business packaging</span>
                </li>
                <li className="flex items-start">
                  <span className="text-arduino-orange mr-2">•</span>
                  <span>Assembly line for small parts</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div 
            ref={el => elementsRef.current[2] = el}
            className="slide-item"
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="bg-gradient-to-br from-arduino-light to-white p-8 rounded-xl shadow-md h-full flex flex-col">
              <div className="w-16 h-16 bg-arduino-blue rounded-full flex items-center justify-center mb-6">
                <Package className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-arduino-dark">Educational Projects</h3>
              
              <ul className="space-y-3 text-arduino-gray mt-auto">
                <li className="flex items-start">
                  <span className="text-arduino-orange mr-2">•</span>
                  <span>STEM education demonstrations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-arduino-orange mr-2">•</span>
                  <span>Engineering classroom projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-arduino-orange mr-2">•</span>
                  <span>Robotics competition platforms</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div 
            ref={el => elementsRef.current[3] = el}
            className="slide-item"
            style={{ transitionDelay: '0.4s' }}
          >
            <div className="bg-gradient-to-br from-arduino-light to-white p-8 rounded-xl shadow-md h-full flex flex-col">
              <div className="w-16 h-16 bg-arduino-blue rounded-full flex items-center justify-center mb-6">
                <Robot className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-arduino-dark">Prototype Testing</h3>
              
              <ul className="space-y-3 text-arduino-gray mt-auto">
                <li className="flex items-start">
                  <span className="text-arduino-orange mr-2">•</span>
                  <span>Sensor and actuator validation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-arduino-orange mr-2">•</span>
                  <span>Industrial process simulation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-arduino-orange mr-2">•</span>
                  <span>Proof-of-concept demonstrations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div 
          ref={el => elementsRef.current[4] = el}
          className="mt-16 bg-arduino-blue/10 p-8 rounded-xl border border-arduino-blue/30 slide-item"
        >
          <h3 className="text-2xl font-bold mb-6 text-arduino-dark">Future Enhancements</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-arduino-blue mb-2">AI Integration</h4>
              <p className="text-sm text-arduino-gray">Computer vision for object identification and sorting</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-arduino-blue mb-2">IoT Control</h4>
              <p className="text-sm text-arduino-gray">Remote monitoring and operation via smartphone app</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-arduino-blue mb-2">Multi-stage System</h4>
              <p className="text-sm text-arduino-gray">Connected conveyor modules for complex operations</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-arduino-blue mb-2">Data Logging</h4>
              <p className="text-sm text-arduino-gray">Performance metrics tracking and analysis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
