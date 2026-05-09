import SEO from "./components/SEO";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Doctors from "./components/Doctors";
import Review from "./components/Review";
import Appointment from "./components/Appointment";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );
  
    elements.forEach((el) => observer.observe(el));
  
    return () => observer.disconnect();
  }, []);

  // For the navigation sheen
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("nav a");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) => {
              link.classList.toggle(
                "active",
                link.dataset.section === entry.target.id
              );
            });
          }
        });
      },
      {
        threshold: 0.6,
      }
    );
  
    sections.forEach((section) => observer.observe(section));
  
    return () => observer.disconnect();
  }, []);
  
  

  return (
    <>
      <SEO />
      <Header />
      <Hero />
      <Services />
      <Doctors />
      <Review />
      <Appointment />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;