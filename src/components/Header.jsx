import { useEffect, useState } from "react";
import logo from "../assets/La' Hospitale_Alt1-cropped.svg";
import "./Header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for subtle shrink + shadow enhancement
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-inner container">
        {/* Logo */}
        <img
          src={logo}
          alt="Clinic Logo"
          style={{
            height: "63px",
            width: "auto",
          }}
        />

        {/* Navigation */}
        <nav className="nav-links">
          <a href="#services">Services</a>
          <a href="#doctors">Doctors</a>
          <a href="#appointment">Appointment</a>
        </nav>
      </div>
    </header>
  );
}
