import { useRef } from "react";
import "./Review.css";

const reviews = [
  { name: "Astha Rajlaxmi", rating: 5, text: "The hospital staff & Doctors were caring and professional. Doctors explained everything clearly and made us feel reassured throughout the treatment. The facilities were clean and well-maintained and the overall experience was smooth and comforting. Truly grateful for the care and support provided." },
  { name: "Praphulla Jha", rating: 5, text: "Exceptional clinic! The staff as well as doctors are highly professional, and communication is clear and efficient. Treatment techniques are effective and tailored to my needs, ensuring a comfortable and speedy recovery. Highly recommend for anyone seeking top-notch care and attention." },
  { name: "Mahesh Pokhrel", rating: 5, text: "Managed by excellent team of doctors. Very compassionate and friendly care is available here." },
  { name: "sadesh Mandal", rating: 5, text: "Nice 🙂 …" },
  { name: "Purge Wick", rating: 5, text: "Had a splendid experience at AMC, very caring and renowned staffs. They treated a road rash over my knee with immense care." },
  { name: "Codz", rating: 5, text: "The Doctors, and employees included are very friendly, I was surprised how direct and candid they were with prescriptions.. Highly recommended to my friends for good treatment." },
  { name: "Neha Shukla", rating: 5, text: "" },

];

export default function ReviewsSection() {
  const scrollRef = useRef(null);
  const renderStars = (count) => "★".repeat(count) + "☆".repeat(5 - count);

  return (
    <section className="reviews reveal">
      <h2 className="reviews-title">What Our Patients Say About Us</h2>

      <div className="reviews-scroll" ref={scrollRef}>
        {[...reviews, ...reviews].map((review, index) => (
          <div className="review-card" key={index}>
            <div className="review-stars">{renderStars(review.rating)}</div>
            <div className="review-text">“{review.text}”</div>
            <p className="review-name">— {review.name}</p>
          </div>
        ))}
      </div>

      <a className="reviews-button" href="https://www.google.com/search?sca_esv=d7358c9ad4b11281&sxsrf=ANbL-n5n4zfEsChP--xATDpUDDBeEZZoNg:1771079785544&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qORJHSD2a4-VzBKhtXuNwAWJJT__uYNG_14xmZNuZzMoAmnkCp-Knpqc-0LldYAuRve-Hj5oqRVWNp4XoL9LI-Gr9N6xVl-AN_dSYmtwvjHhQeoYD3A%3D%3D&q=Arihant+medical+clinic+Reviews&sa=X&ved=2ahUKEwjMyfGrmtmSAxUog_0HHQRKAkEQ0bkNegQIHBAF&biw=1536&bih=782&dpr=1.25" target="_blank" rel="noreferrer">
        <span>View all reviews</span>
        <div className="google-icon" style={{ 
          width: "22px", height: "22px", borderRadius: "50%", 
          background: "white", color: "#ff0000", display: "flex", 
          alignItems: "center", justifyContent: "center", fontWeight: "bold"
        }}>G</div>
      </a>
    </section>
  );
}