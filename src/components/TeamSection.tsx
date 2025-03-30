
import React, { useEffect, useRef } from 'react';
import { Users } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  animation?: string;
}

const TeamSection: React.FC = () => {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  const teamMembers: TeamMember[] = [
    { name: "Fərman Əliyev", role: "Control Engineer" },
    { name: "Cəbrayıl Qasımlı", role: "Hardware Engineer" },
    { name: "Tariyel Bədəlzadə", role: "Graphic Designer" },
    { name: "Rəvan Xıdırov", role: "Control Engineer" },
    { name: "Rahil Nəcəfov", role: "Web Developer" },
    { name: "Nigar Sadıqlı", role: "SMM" }
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
    <section id="team" className="section bg-gradient-to-b from-arduino-light to-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 
          ref={el => elementsRef.current[0] = el}
          className="text-4xl md:text-5xl font-bold mb-2 text-arduino-dark slide-item"
        >
          Meet the <span className="text-arduino-blue">Precision Engineers</span>
        </h2>
        
        <div 
          ref={el => elementsRef.current[1] = el}
          className="flex justify-center mb-12 slide-item"
        >
          <div className="relative">
            <Users className="w-16 h-16 text-arduino-blue opacity-20" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8">
              <div className="w-full h-full bg-arduino-blue rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              ref={el => elementsRef.current[index + 2] = el}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg slide-item"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-arduino-blue to-arduino-teal rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">
                  {member.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-arduino-dark">{member.name}</h3>
              <p className="text-arduino-gray mt-2">{member.role}</p>
              <div className="mt-4 w-12 h-1 bg-arduino-orange mx-auto"></div>
            </div>
          ))}
        </div>
        
        <div 
          ref={el => elementsRef.current[8] = el} 
          className="mt-10 slide-item"
        >
          <div className="p-4 bg-arduino-teal/10 rounded-lg inline-block">
            <p className="text-arduino-gray">Working together to create innovative automation solutions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
