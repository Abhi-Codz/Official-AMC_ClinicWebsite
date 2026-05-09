import "./ContactSection.css";
import logo from "../assets/La' Hospitale_Alt1-cropped.svg";

export default function ContactSection() {
  return (
    <section className="contact-section reveal">
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <img src={logo} alt="Arihant Medical Clinic" className="contact-logo" />

          <p className="contact-description">
            "At Arihant Medical Clinic, your health is guided by a team led by an
            AIIMS graduate, committed to truly personalized care. We believe
            internal medicine goes beyond treating symptoms, it’s about
            understanding your complete well-being. From managing complex
            diabetes and hypertension to preventive health check-ups, we deliver
            expert, patient-centric care in a welcoming, accessible setting. Our
            aim is to bring the rigor and dedication of AIIMS to your community."
          </p>
          <p className="contact-quote">
            <i>
            - Dr. Abhishek Singh, Owner at Arihant Medical Clinic
            </i> 
          </p>

          <div className="contact-socials">
            <a href="https://www.facebook.com/profile.php?id=61586128291775" aria-label="Facebook"
                    target="_blank"
                    rel="noreferrer">
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" />
            </a>
            <a href="https://www.instagram.com/arihant.medicalcare/" aria-label="Instagram"
                    target="_blank"
                    rel="noreferrer">
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" />
            </a>
            <a
              href="https://www.google.com/maps/place/Arihant+medical+clinic/@27.0138837,84.8795598,17z/data=!3m1!4b1!4m6!3m5!1s0x399355002abeabc7:0xe0221462d679ad5c!8m2!3d27.0138837!4d84.8821347!16s%2Fg%2F11mznxg9sg?entry=ttu&g_ep=EgoyMDI2MDIxMC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noreferrer"
              aria-label="Google Maps"
            >
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/googlemaps.svg" />
            </a>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="contact-divider" />

        {/* RIGHT SIDE */}
        <div className="contact-right">
          <h2 className="visiting-title">Visiting Hours</h2>

          <p className="visiting-days">Sunday – Friday</p>
          <p className="visiting-time">9:00 AM – 7:00 PM</p>

          <div className="contact-map">
            <iframe
              title="Arihant Medical Clinic Location"
              src="https://www.google.com/maps?q=27.0138837,84.8821347&z=17&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
