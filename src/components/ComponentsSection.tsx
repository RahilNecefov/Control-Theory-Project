
import React, { useEffect, useRef } from 'react';
import { Zap, Database, Box, Layers } from 'lucide-react';

interface ComponentItem {
  name: string;
  icon: React.ReactNode;
  description: string;
}

const ComponentsSection: React.FC = () => {
  const componentsRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  const components: ComponentItem[] = [
    {
      name: "Arduino UNO / Nano",
      icon: <Database className="w-10 h-10 text-arduino-blue" />,
      description: "The brain of the operation, controlling all movements and sensor readings"
    },
    {
      name: "Servo/Stepper Motors",
      icon: <Zap className="w-10 h-10 text-arduino-blue" />,
      description: "Provides precise movement control for the conveyor belt system"
    },
    {
      name: "IR Sensors / Ultrasonic",
      icon: <Layers className="w-10 h-10 text-arduino-blue" />,
      description: "Detects objects on the conveyor belt for automated sorting and processing"
    },
    {
      name: "L298N Motor Driver",
      icon: <Zap className="w-10 h-10 text-arduino-blue" />,
      description: "Controls motor direction and speed with PWM signals from Arduino"
    },
    {
      name: "Belt & Rollers",
      icon: <Box className="w-10 h-10 text-arduino-blue" />,
      description: "Physical components that create the conveyor system for smooth transport"
    },
    {
      name: "Power Supply",
      icon: <Database className="w-10 h-10 text-arduino-blue" />,
      description: "Provides consistent power to motors and electronics for reliable operation"
    }
  ];
  
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
    <section id="components" className="section bg-gradient-to-b from-white to-arduino-light">
      <div className="max-w-6xl mx-auto">
        <h2 
          ref={el => elementsRef.current[0] = el}
          className="text-4xl md:text-5xl font-bold mb-16 text-center text-arduino-dark slide-item"
        >
          What <span className="text-arduino-blue">Makes It</span> Work?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={componentsRef}>
          {components.map((component, index) => (
            <div
              key={index}
              ref={el => elementsRef.current[index + 1] = el}
              className="component-card slide-item"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-arduino-light rounded-full flex items-center justify-center mr-4">
                  {component.icon}
                </div>
                <h3 className="text-xl font-bold text-arduino-dark">{component.name}</h3>
              </div>
              <p className="text-arduino-gray">{component.description}</p>
            </div>
          ))}
        </div>
        
        <div 
          ref={el => elementsRef.current[7] = el}
          className="mt-16 p-6 bg-arduino-teal/10 rounded-xl border border-arduino-teal/30 text-center slide-item"
        >
          <p className="text-arduino-dark text-lg">
            All components work together in harmony to create an efficient, programmable conveyor system.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComponentsSection;
