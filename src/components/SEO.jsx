import { Helmet } from "react-helmet";

export default function SEO() {
  return (
    <Helmet>
      {/* 1. The Title (Crucial for that 45 score) */}
      <title>Arihant Medical Clinic | Expert Internal Medicine & Cardiology</title>
      
      {/* 2. The Meta Description (The 2-line summary in Google) */}
      <meta name="description" content="Book an appointment at Arihant Medical Clinic. Led by AIIMS graduates, providing ethical care in Cardiology, Respiratory, and Diabetes management." />
      
      {/* 3. Keywords */}
      <meta name="keywords" content="Medical Clinic, Dr. Abhishek Singh, Internal Medicine, Cardiology, ECG, Respiratory Clinic, Diabetes Doctor" />
      
      {/* 4. Open Graph (For when you share the link on WhatsApp/Social Media) */}
      <meta property="og:title" content="Arihant Medical Clinic - Health is Wealth" />
      <meta property="og:description" content="Experienced doctors across core specialties. Clear communication and ethical care." />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}