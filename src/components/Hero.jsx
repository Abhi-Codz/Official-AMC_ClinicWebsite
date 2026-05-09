import { useState, useEffect } from "react";
import hero1 from "../assets/hero1.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";
import hero5 from "../assets/hero5.webp";
import "./Hero.css";

const images = [hero1, hero3, hero4, hero5];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero reveal"
      style={{
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        padding: "2rem 0",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          gap: "3rem",
          alignItems: "center",
        }}
      >
        {/* Left: Image Slideshow */}
        <div
          className="hero-image-wrapper"
          style={{
            flex: 1,
            position: "relative",
            height: "500px",
            overflow: "hidden",
            borderRadius: "18px",
            boxShadow: "0 15px 20px rgba(0, 0, 0, 0.6)",
          }}
        >
          <img
            src={images[current]}
            alt="Clinic interior"
            className="hero-image"
          />

          {/* Dots */}
          <div
            style={{
              position: "absolute",
              bottom: "16px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: "8px",
            }}
          >
            {images.map((_, index) => (
              <span
                key={index}
                onClick={() => setCurrent(index)}
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor:
                    index === current
                      ? "#0a2540"
                      : "rgba(255,255,255,0.7)",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
              />
            ))}
          </div>
        </div>

        {/* Right: Text Content */}
        <div
          className="hero-text-content"
          style={{
            flex: 1,
            maxWidth: "520px",
          }}
        >
          {/* Eyebrow */}
          <span
            style={{
              display: "inline-block",
              marginBottom: "0.75rem",
              fontSize: "0.85rem",
              fontWeight: "600",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#f97316",
            }}
          >
            Health is the Ultimate Wealth
          </span>

          {/* Main headline */}
          <h1
            style={{
              fontSize: "2.75rem",
              lineHeight: "1.15",
              marginBottom: "1.2rem",
              color: "#0a2540",
              fontWeight: "700",
            }}
          >
            <span className="liquid-text">Arihant</span>
            <br />
            <span className="liquid-text">Medical Clinic</span>
          </h1>

          {/* Description */}
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.75",
              marginBottom: "1.8rem",
              color: "#475569",
            }}
          >
            At Arihant Medical Clinic, we furnish an ethical healthcare.
            Supported by a team led by the renowned AIIMS graduate, modern
            diagnostics, and a patient-first approach.
          </p>

          {/* Trust bullets */}
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              marginBottom: "2.2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {[
              "Experienced doctors across core specialties",
              "Modern, comfortable clinical environment",
              "Clear communication and ethical care",
            ].map((item, index) => (
              <li
                key={index}
                className="hero-bullet"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  marginBottom: "0.65rem",
                  color: "#334155",
                  fontSize: "0.95rem",
                  animationDelay: `${index * 0.15}s`,
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: "#f97316",
                  }}
                />
                {item}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#appointment"
            style={{
              display: "inline-block",
              backgroundColor: "#f97316",
              color: "#fff",
              padding: "0.85rem 2rem",
              fontSize: "1rem",
              fontWeight: "600",
              borderRadius: "8px",
              textDecoration: "none",
              boxShadow: "0 8px 18px rgba(249, 115, 22, 0.35)",
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 12px 24px rgba(249, 115, 22, 0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 8px 18px rgba(249, 115, 22, 0.35)";
            }}
          >
            Book an Appointment
          </a>
        </div>
      </div>
    </section>
  );
}