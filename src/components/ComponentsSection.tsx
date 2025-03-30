
import React, { useEffect, useRef } from 'react';
import { Cpu, Battery, Gauge, WifiIcon, Box } from 'lucide-react';

interface ComponentItem {
  name: string;
  icon: React.ReactNode;
  description: string;
  price?: string;
  image?: string;
}

const ComponentsSection: React.FC = () => {
  const componentsRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  const components: ComponentItem[] = [
    {
      name: "DC Motor",
      icon: <Gauge className="w-10 h-10 text-arduino-blue" />,
      description: "Provides the mechanical power to drive the conveyor belt system",
      price: "1.20 azn",
      image: "/lovable-uploads/1dd9787f-f2fd-4eea-b0fc-e4f28602e1ce.png"
    },
    {
      name: "DC Motor Driver (DRV8833)",
      icon: <Cpu className="w-10 h-10 text-arduino-blue" />,
      description: "Controls motor direction and speed with PWM signals",
      price: "5.90 azn",
      image: "/lovable-uploads/a834bbd9-b200-457d-9176-2d134cf137a5.png"
    },
    {
      name: "Motor Speed Sensor",
      icon: <Gauge className="w-10 h-10 text-arduino-blue" />,
      description: "Detects and measures the rotational speed of the motor for precise control",
      price: "2.66 azn",
      image: "/lovable-uploads/8cfd93b1-48bc-4cdc-af8b-e30b943e636c.png"
    },
    {
      name: "ESP8266/NodeMCU",
      icon: <WifiIcon className="w-10 h-10 text-arduino-blue" />,
      description: "WiFi-enabled microcontroller for IoT connectivity and control",
      price: "14 azn",
      image: "/lovable-uploads/1b199a51-9336-4f25-9a2e-dacb4563835e.png"
    },
    {
      name: "Conveyor Belt & Frame",
      icon: <Box className="w-10 h-10 text-arduino-blue" />,
      description: "Physical components for smooth transport of items",
      image: "/lovable-uploads/690670c8-727c-4769-86e7-bb1f3939349d.png"
    },
    {
      name: "Additional Components",
      icon: <Battery className="w-10 h-10 text-arduino-blue" />,
      description: "Wires, resistors, capacitors, and other supporting electronics"
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
          className="text-4xl md:text-5xl font-bold mb-8 text-center text-arduino-dark slide-item"
        >
          What <span className="text-arduino-blue">Makes It</span> Work?
        </h2>
        
        <p 
          ref={el => elementsRef.current[1] = el}
          className="text-xl text-center mb-12 text-arduino-gray slide-item"
        >
          Speed Control System Components
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={componentsRef}>
          {components.map((component, index) => (
            <div
              key={index}
              ref={el => elementsRef.current[index + 2] = el}
              className="component-card bg-white p-6 rounded-xl shadow-lg slide-item hover:shadow-xl transition-all"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center mb-4">
                {component.image ? (
                  <div className="w-32 h-32 mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={component.image} 
                      alt={component.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-16 h-16 bg-arduino-light rounded-full flex items-center justify-center mb-4">
                    {component.icon}
                  </div>
                )}
                <h3 className="text-xl font-bold text-arduino-dark text-center">{component.name}</h3>
                {component.price && (
                  <span className="inline-block bg-arduino-orange text-white px-3 py-1 rounded-full text-sm mt-2">
                    {component.price}
                  </span>
                )}
              </div>
              <p className="text-arduino-gray text-center">{component.description}</p>
            </div>
          ))}
        </div>
        
        <div 
          ref={el => elementsRef.current[8] = el}
          className="mt-16 p-6 bg-arduino-teal/10 rounded-xl border border-arduino-teal/30 text-center slide-item"
        >
          <p className="text-arduino-dark text-lg font-medium">
            Total Cost: <span className="text-arduino-blue font-bold">23.76 azn</span>
          </p>
          <p className="text-arduino-gray mt-2">
            All components work together to create an efficient, programmable conveyor system with speed control.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComponentsSection;
