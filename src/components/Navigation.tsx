
import React, { useState, useEffect } from 'react';
import { Box } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
}

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems: NavItem[] = [
    { id: 'hero', label: 'Home' },
    { id: 'inspiration', label: 'Idea' },
    { id: 'components', label: 'Components' },
    { id: 'how-it-works', label: 'Working' },
    { id: 'mechanical', label: 'Design' },
    { id: 'code', label: 'Code' },
    { id: 'demo', label: 'Demo' },
    { id: 'applications', label: 'Uses' },
    { id: 'contact', label: 'Contact' },
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      // Update navbar style based on scroll position
      setIsScrolled(window.scrollY > 10);
      
      // Find which section is currently in view
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);
  
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-arduino-blue rounded-md flex items-center justify-center mr-3">
              <Box className="w-5 h-5 text-white" />
            </div>
            <span className={`font-bold text-xl ${isScrolled ? 'text-arduino-dark' : 'text-arduino-blue'}`}>
              Arduino Conveyor
            </span>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`px-2 py-1 text-sm font-medium transition-colors relative ${
                      activeSection === item.id 
                        ? 'text-arduino-blue' 
                        : isScrolled ? 'text-arduino-dark hover:text-arduino-blue' : 'text-arduino-dark hover:text-arduino-blue'
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-arduino-blue"></span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Mobile navigation dots */}
          <div className="md:hidden flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-2 h-2 rounded-full ${
                  activeSection === item.id ? 'bg-arduino-blue' : 'bg-arduino-gray/50'
                }`}
                aria-label={`Navigate to ${item.label}`}
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
