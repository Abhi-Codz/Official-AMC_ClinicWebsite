import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer reveal">
      <p className="footer-credit">
        a Dr. Abhishek Singh | Dr. Pallavi Singh | Mrs. Alka Mishra production
      </p>

      <p className="footer-main">
        Arihant Medical Clinic © {new Date().getFullYear()}
      </p>

      <p className="footer-sub">
        Email: arihantmedicalcare@gmail.com · Phone: +977-9855014563
      </p>
    </footer>
  );
}
