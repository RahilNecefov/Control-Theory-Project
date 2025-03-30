
import React, { useEffect, useRef } from 'react';
import { Users } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface TeamMember {
  name: string;
  role: string;
  image?: string;
}

const TeamSection: React.FC = () => {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  const teamMembers: TeamMember[] = [
    { 
      name: "Rahil Nəcəfov", 
      role: "Web Developer",
      image: "/lovable-uploads/fbf351d1-680d-45ed-8ffd-f80335d32862.png"
    },
    { 
      name: "Cəbrayıl Qasımlı", 
      role: "Hardware Engineer",
      image: "/lovable-uploads/951049d8-8a21-44fa-b6f7-de630fa4d8f0.png" 
    },
    { 
      name: "Fərman Əliyev", 
      role: "Control Engineer",
      image: "/lovable-uploads/0152083f-f341-47b3-a243-c5ba527442e9.png" 
    },
    { 
      name: "Rəvan Xıdırov", 
      role: "Control Engineer",
      image: "/lovable-uploads/f3a76111-dda0-4006-b3c3-73096987d095.png" 
    },
    { 
      name: "Tariyel Bədəlzadə", 
      role: "Graphic Designer",
      image: "/lovable-uploads/276164c1-bd45-45c1-92b7-db64ee82135f.png" 
    },
    { 
      name: "Nigar Sadıqlı", 
      role: "SMM",
      image: "/lovable-uploads/5b592a14-8b39-45e8-9ef3-7fa0dd0e948b.png" 
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
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 slide-item"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="mx-auto mb-4 overflow-hidden w-24 h-24 rounded-full border-2 border-arduino-blue">
                <Avatar className="w-full h-full">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback className="bg-gradient-to-br from-arduino-blue to-arduino-teal text-white text-2xl font-bold">
                    {member.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
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
