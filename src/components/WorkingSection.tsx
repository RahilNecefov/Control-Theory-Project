
import React, { useEffect, useRef, useState } from 'react';
import { CircleCheck } from 'lucide-react';

const WorkingSection: React.FC = () => {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      title: "Object Detected",
      description: "IR or ultrasonic sensors detect an object on the conveyor belt, triggering the Arduino program."
    },
    {
      title: "Conveyor Moves",
      description: "The Arduino activates motors through the L298N driver, moving the conveyor belt at the programmed speed."
    },
    {
      title: "Motor Speed Adjusts",
      description: "PWM signals from Arduino dynamically adjust motor speed based on sensor feedback and program settings."
    },
    {
      title: "Sensor Decides Action",
      description: "Additional sensors determine sorting actions, like diverting objects to different paths based on size or color."
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
    
    // Auto-advance steps for animation
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    
    return () => {
      elementsRef.current.forEach(el => {
        if (el) observer.unobserve(el);
      });
      clearInterval(interval);
    };
  }, [steps.length]);

  return (
    <section id="how-it-works" className="section bg-arduino-light">
      <div className="max-w-6xl mx-auto">
        <h2 
          ref={el => elementsRef.current[0] = el}
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-arduino-dark slide-item"
        >
          The <span className="text-arduino-blue">Brain</span> Behind the Belt
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div 
            ref={el => elementsRef.current[1] = el}
            className="slide-item"
          >
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-arduino-dark">Step-by-step Flow</h3>
              
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div 
                    key={index}
                    className={`flex p-4 rounded-lg transition-all duration-500 ${
                      activeStep === index ? 'bg-arduino-blue text-white shadow-md' : 'bg-arduino-light/50'
                    }`}
                  >
                    <div className="mr-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        activeStep === index ? 'bg-white text-arduino-blue' : 'bg-arduino-teal/20 text-arduino-teal'
                      }`}>
                        {activeStep >= index ? <CircleCheck className="w-5 h-5" /> : index + 1}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{step.title}</h4>
                      <p className={activeStep === index ? 'text-white/90' : 'text-arduino-gray'}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div 
            ref={el => elementsRef.current[2] = el}
            className="slide-item"
          >
            <div className="relative h-72 md:h-96 bg-arduino-dark rounded-xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Animated Arduino + Conveyor System */}
                <div className="w-full h-full flex flex-col items-center justify-center p-6">
                  {/* Arduino Board */}
                  <div className="w-32 h-20 bg-arduino-teal rounded-md mb-8 relative animate-pulse-glow">
                    <div className="absolute top-2 left-2 w-4 h-4 bg-arduino-orange rounded-full"></div>
                    <div className="absolute bottom-2 right-2 w-4 h-4 bg-arduino-orange rounded-full"></div>
                  </div>
                  
                  {/* Connected Lines */}
                  <div className="w-1 h-10 bg-arduino-orange"></div>
                  
                  {/* Conveyor with object */}
                  <div className="w-full h-24 bg-arduino-gray rounded-lg relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full">
                      <div className="h-full w-[200%] animate-conveyor-move">
                        <div className="absolute top-0 h-full w-full bg-repeat-x" style={{
                          backgroundImage: 'linear-gradient(90deg, transparent 0%, transparent 5%, rgba(255, 255, 255, 0.2) 5%, rgba(255, 255, 255, 0.2) 10%, transparent 10%, transparent 20%)',
                          backgroundSize: '50% 100%'
                        }}></div>
                      </div>
                    </div>
                    
                    {/* Object on conveyor */}
                    <div className={`absolute top-1/2 transform -translate-y-1/2 w-12 h-12 rounded transition-all duration-1000 ease-in-out ${
                      activeStep === 0 ? 'bg-arduino-orange left-0' : 
                      activeStep === 1 ? 'bg-arduino-orange left-1/4' :
                      activeStep === 2 ? 'bg-arduino-orange left-1/2' :
                      'bg-arduino-orange left-3/4'
                    }`}></div>
                    
                    {/* IR Sensor */}
                    <div className="absolute top-0 left-0 w-6 h-6 bg-arduino-blue rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingSection;
