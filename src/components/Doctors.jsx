import { useState } from "react";
import "./Doctors.css";
import doctor1 from "../assets/doctor1.png";
import doctor2 from "../assets/doctor2.png";

export default function Doctors() {
  return (
    <section id="doctors" className="doctors-section reveal">
      <div className="container">
        <div className="doctors-header">
          <h2>Greet Our Doctors</h2>
          <p>
            Experienced medical professionals delivering ethical and
            evidence-based care.
          </p>
        </div>

        <div className="doctors-grid">
          <DoctorCard
            image={doctor1}
            name="Dr. Abhishek Singh"
            qualification="MD Internal Medicine"
            scale="male"
            details={[
              "AIIMS, New Delhi",
              "ATS Global Scholar (USA)",
              "NMC No: 9872",
            ]}
          />

          <DoctorCard
            image={doctor2}
            name="Dr. Pallavi Singh"
            qualification="MBBS"
            scale="female"
            details={[
              "KIST Medical College, TU",
              "NMC No: 37370",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function DoctorCard({ image, name, qualification, details, scale }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="doctor-card" onClick={() => setOpen(!open)}>
      {/* The poster carries the floating outline logic */}
      <div className={`doctor-poster ${open ? "active-selection" : ""}`}>
        
        {/* Internal container to clip the image/glass while letting outline breathe */}
        <div className="doctor-img-container">
          <img
            src={image}
            alt={name}
            className={`doctor-img ${scale} ${open ? "blurred" : ""}`}
          />

          {/* Glassmorphism Overlay */}
          <div className={`doctor-overlay ${open ? "show" : ""}`}>
            <p className="doctor-qual">{qualification}</p>
            <ul className="doctor-details">
              {details.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <h3 className="doctor-name">{name}</h3>
    </div>
  );
}