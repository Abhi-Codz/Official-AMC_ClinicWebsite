import { useState, useEffect, useRef } from "react";
import "./Services.css";

const services = [
  { number: 1, title: "Internal Medicine", description: "Comprehensive diagnosis and management of acute and chronic medical conditions.", filled: true, span: 70 },
  { number: 2, title: "ECG", description: "Electrocardiographic evaluation for assessment of heart rhythm and function.", filled: true, span: 60 },
  { number: 3, title: "Respiratory", description: "Diagnosis and treatment of respiratory and pulmonary disorders.", filled: true, span: 50 },
  { number: 4, title: "Endoscopy", description: "Diagnostic endoscopic procedures for gastrointestinal evaluation.", filled: false, span: 45 },
  { number: 5, title: "Diabetes / Thyroid", description: "Specialized care for diabetes and thyroid-related disorders.", filled: false, span: 35 },
  { number: 6, title: "Bronchoscopy", description: "Advanced bronchoscopic procedures for airway examination.", filled: false, span: 25 },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const [scrolled, setScrolled] = useState(false); // Added the missing state
  const sectionRef = useRef(null);

  /* ===== Your Original Scroll logic restored ===== */
  useEffect(() => {
    const onScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        // This triggers/untriggers as the section enters and leaves the view
        const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
        setScrolled(isInView);
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // Initial check
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const size = 640;
  const center = size / 2;
  const outerR = 270;
  const innerR = 200;
  const gap = 3;

  const polar = (angle, r) => {
    const rad = (angle - 90) * (Math.PI / 180);
    return {
      x: center + r * Math.cos(rad),
      y: center + r * Math.sin(rad),
    };
  };

  const arcPath = (start, end) => {
    const outerStart = polar(start, outerR);
    const outerEnd = polar(end, outerR);
    const innerStart = polar(end, innerR);
    const innerEnd = polar(start, innerR);
    return `M ${outerStart.x} ${outerStart.y} A ${outerR} ${outerR} 0 0 1 ${outerEnd.x} ${outerEnd.y} L ${innerStart.x} ${innerStart.y} A ${innerR} ${innerR} 0 0 0 ${innerEnd.x} ${innerEnd.y} Z`;
  };

  let currentAngle = -18;

  return (
    <section 
      id="services" 
      /* "show" class toggles on/off based on viewport presence */
      className={`services-section ${scrolled ? "show" : ""}`} 
      ref={sectionRef}
    >
      <div className="container">
        <div className="services-header">
          <h2>Our Medical Services</h2>
          <p>A platter of specialized medical services we deliver with precision, care, and clinical expertise.</p>
        </div>

        <div className="circle-wrapper">
          {/* Responsive ViewBox added to your original SVG math */}
          <svg viewBox={`0 0 ${size} ${size}`} preserveAspectRatio="xMidYMid meet">
            {services.map((service, index) => {
              const start = currentAngle + gap;
              const end = currentAngle + service.span - gap;
              const mid = (start + end) / 2;
              const numberPos = polar(mid, outerR + 40);
              const path = arcPath(start, end);
              currentAngle += service.span;

              return (
                <g key={index}>
                  <path
                    d={path}
                    className={`segment ${service.filled ? "filled" : "outline"} ${active === index ? "active" : ""}`}
                    onClick={() => setActive(index)}
                  />
                  <text x={numberPos.x} y={numberPos.y} textAnchor="middle" alignmentBaseline="middle" className="segment-number">
                    {service.number}
                  </text>
                </g>
              );
            })}
          </svg>

          <div className="center-content">
            <h3>{services[active].title}</h3>
            <p>{services[active].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}