import { useEffect, useState } from "react";
import "./Testimonials.css";

import testiOne from "../../assets/images/testimonial-1.jpg";
import testiTwo from "../../assets/images/testimonial-2.jpg";
import testiThree from "../../assets/images/testimonial-3.jpg";

const testimonials = [
  {
    id: 1,
    image: testiOne,
    quote:
      "Veloura brought my dream engagement ring to life down to the tiniest detail. It feels like it was made just for me.",
    name: "Isabelle Manrope",
    location: "New York",
  },
  {
    id: 2,
    image: testiTwo,
    quote:
      "The craftsmanship is breathtaking. Every sparkle feels intentional, elegant, and deeply personal.",
    name: "Sophia Laurent",
    location: "Paris",
  },
  {
    id: 3,
    image: testiThree,
    quote:
      "I found the perfect anniversary piece. The design, packaging, and service felt truly luxurious.",
    name: "Amelia Ricci",
    location: "Milan",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTestimonial = testimonials[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const revealItems = document.querySelectorAll(".testi-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("testi-show");
          }
        });
      },
      { threshold: 0.18 }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => {
      revealItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="vel-testimonials" id="testimonials">
      <div className="vel-testi-container">
        <div className="vel-testi-top testi-reveal">
          <h2>
            The Sparkle in <br />
            <em>Their Words</em>
          </h2>

          <button className="vel-testi-view">View All</button>
        </div>

        <div className="vel-testi-slider testi-reveal">
          <div className="vel-testi-image-wrap">
            <img
              key={activeTestimonial.image}
              src={activeTestimonial.image}
              alt={activeTestimonial.name}
            />
          </div>

          <div className="vel-testi-content">
            <span className="vel-testi-quote-mark">“</span>

            <div className="vel-testi-text-wrap" key={activeTestimonial.id}>
              <p>"{activeTestimonial.quote}"</p>

              <div className="vel-testi-author">
                <h4>{activeTestimonial.name}</h4>
                <span>{activeTestimonial.location}</span>
              </div>
            </div>

            <div className="vel-testi-controls">
              <button onClick={handlePrev} aria-label="Previous testimonial">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </button>

              <button onClick={handleNext} aria-label="Next testimonial">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}