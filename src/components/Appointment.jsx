import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Appointment.css';

export default function Appointment() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");
  
  // Typewriter Logic
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const fullText = "Request an Appointment";
  const typingSpeed = 150;

  useEffect(() => {
    const handleType = () => {
      const updatedText = isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000); // Wait before deleting
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, isDeleting ? 100 : typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting]);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    emailjs.sendForm('service_tcyy5rr', 'template_e21cq1s', form.current, 'YIAXH4_I3omnQMA8c')
      .then(() => {
        setIsSending(false);
        setStatus("success");
        e.target.reset();
      }, () => {
        setIsSending(false);
        setStatus("error");
      });
  };

  return (
    <section id="appointment" className="appointment-section reveal">
      <div className="container">
        <div className="appointment-grid">
          
          <div className="appointment-info reveal">
            {/* Liquid + Typewriter Header */}
            <h2 className="liquid-text">
              {text}<span className="cursor">|</span>
            </h2>
            <p>Our staff will contact you within 24 hours to confirm your appointment slot.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <p>Link Road, Birgunj - 8, Parsa, Nepal</p>
              </div>
              <div className="contact-item">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 18.92z" />
                </svg>
                <p>+977-9855014563
                </p>
              </div>
            </div>
          </div>

          <div className="appointment-card reveal">
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-group"><input type="text" name="name" placeholder="Full Name" required /></div>
              <div className="form-group"><input type="tel" name="phone" placeholder="Phone Number" required /></div>
              <div className="form-group"><input type="email" name="email" placeholder="Email Address" required /></div>
              <div className="form-group">
                <select name="service" required>
                  <option value="">Select a Service</option>
                  <option value="Internal Medicine">Internal Medicine</option>
                  <option value="ECG/Cardiology">ECG / Cardiology</option>
                  <option value="Respiratory">Respiratory</option>
                </select>
              </div>
              <div className="form-group"><textarea name="message" rows="4" placeholder="Reason for visit"></textarea></div>
              <button type="submit" className="submit-btn" disabled={isSending}>
                {isSending ? "Sending..." : "Request Appointment"}
              </button>
              {status === "success" && <p className="msg success">Message sent successfully!</p>}
              {status === "error" && <p className="msg error">Failed to send. Please try again.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}