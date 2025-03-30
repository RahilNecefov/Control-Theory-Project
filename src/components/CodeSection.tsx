
import React, { useEffect, useRef, useState } from 'react';
import { FileCode } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CodeSection: React.FC = () => {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeTab, setActiveTab] = useState('setup');
  
  const codeSnippets = {
    setup: `// Arduino Conveyor Belt - Setup
#include <Servo.h>

// Pin definitions
#define IR_SENSOR_PIN 2
#define MOTOR_ENA 9
#define MOTOR_IN1 7
#define MOTOR_IN2 8
#define SERVO_PIN 10

Servo sortingServo;  // Create servo object

void setup() {
  Serial.begin(9600);
  
  // Configure pins
  pinMode(IR_SENSOR_PIN, INPUT);
  pinMode(MOTOR_ENA, OUTPUT);
  pinMode(MOTOR_IN1, OUTPUT);
  pinMode(MOTOR_IN2, OUTPUT);
  
  // Attach servo
  sortingServo.attach(SERVO_PIN);
  sortingServo.write(90);  // Center position
  
  Serial.println("Conveyor belt system initialized!");
}`,
    loop: `// Arduino Conveyor Belt - Main Loop
void loop() {
  // Check for object using IR sensor
  bool objectDetected = !digitalRead(IR_SENSOR_PIN);
  
  if (objectDetected) {
    Serial.println("Object detected!");
    
    // Start conveyor belt
    startConveyor(200);  // Speed 0-255
    
    // Wait until object reaches sorting position
    delay(1000);
    
    // Sort the object
    sortObject();
    
    // Stop conveyor after sorting
    stopConveyor();
    delay(1000);  // Wait before checking for next object
  }
}`,
    functions: `// Arduino Conveyor Belt - Helper Functions
void startConveyor(int speed) {
  digitalWrite(MOTOR_IN1, HIGH);
  digitalWrite(MOTOR_IN2, LOW);
  analogWrite(MOTOR_ENA, speed);
  Serial.println("Conveyor started");
}

void stopConveyor() {
  digitalWrite(MOTOR_IN1, LOW);
  digitalWrite(MOTOR_IN2, LOW);
  analogWrite(MOTOR_ENA, 0);
  Serial.println("Conveyor stopped");
}

void sortObject() {
  // Move servo to push object to the right
  sortingServo.write(45);
  delay(500);
  
  // Return to center position
  sortingServo.write(90);
  Serial.println("Object sorted");
}`
  };
  
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
    <section id="code" className="section bg-gradient-to-b from-arduino-light to-white">
      <div className="max-w-6xl mx-auto">
        <h2 
          ref={el => elementsRef.current[0] = el}
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-arduino-dark slide-item"
        >
          Smart <span className="text-arduino-blue">Code</span>, Smart System
        </h2>
        
        <div 
          ref={el => elementsRef.current[1] = el}
          className="slide-item mb-8"
        >
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Button 
              onClick={() => setActiveTab('setup')}
              variant="ghost"
              className={`px-6 py-3 ${activeTab === 'setup' ? 'bg-arduino-blue text-white' : 'bg-arduino-light text-arduino-dark'}`}
            >
              Setup
            </Button>
            <Button 
              onClick={() => setActiveTab('loop')}
              variant="ghost"
              className={`px-6 py-3 ${activeTab === 'loop' ? 'bg-arduino-blue text-white' : 'bg-arduino-light text-arduino-dark'}`}
            >
              Loop
            </Button>
            <Button 
              onClick={() => setActiveTab('functions')}
              variant="ghost"
              className={`px-6 py-3 ${activeTab === 'functions' ? 'bg-arduino-blue text-white' : 'bg-arduino-light text-arduino-dark'}`}
            >
              Functions
            </Button>
          </div>
          
          <div className="relative">
            <div className="absolute top-0 left-0 w-full bg-arduino-dark text-white py-2 px-4 rounded-t-lg flex items-center">
              <FileCode className="w-5 h-5 mr-2" />
              <span>conveyor_belt.ino</span>
            </div>
            
            <pre className="code-block pt-12 rounded-lg text-sm md:text-base overflow-x-auto">
              <code>{codeSnippets[activeTab as keyof typeof codeSnippets]}</code>
            </pre>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div 
            ref={el => elementsRef.current[2] = el}
            className="slide-item"
          >
            <div className="bg-arduino-light p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-arduino-dark">Sensor Logic</h3>
              <ul className="space-y-2 text-arduino-gray">
                <li className="flex items-start">
                  <span className="text-arduino-orange mr-2">•</span>
                  <span>IR sensors detect object presence using reflectivity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-arduino-orange mr-2">•</span>
                  <span>Input signal triggers conveyor movement via interrupt</span>
                </li>
                <li className="flex items-start">
                  <span className="text-arduino-orange mr-2">•</span>
                  <span>Multiple sensors can be used for position tracking</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div 
            ref={el => elementsRef.current[3] = el}
            className="slide-item"
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="bg-arduino-light p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-arduino-dark">Motor Control</h3>
              <ul className="space-y-2 text-arduino-gray">
                <li className="flex items-start">
                  <span className="text-arduino-orange mr-2">•</span>
                  <span>L298N driver translates Arduino signals to motor power</span>
                </li>
                <li className="flex items-start">
                  <span className="text-arduino-orange mr-2">•</span>
                  <span>PWM controls precise speed for smooth operation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-arduino-orange mr-2">•</span>
                  <span>Direction control via H-bridge configuration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeSection;
