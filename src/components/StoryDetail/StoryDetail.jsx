import { useEffect } from "react";
import "./StoryDetail.css";

import storyImg from "../../assets/images/story-detail.jpg";

export default function StoryDetail() {
  useEffect(() => {
    const revealItems = document.querySelectorAll(".story-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("story-show");
          }
        });
      },
      {
        threshold: 0.18,
      }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => {
      revealItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <section className="vel-story-section">
      <div className="vel-story-band">
        <div className="vel-story-container">
          <div className="vel-story-content story-reveal">
            <h2>
              Elevate Your Story in <br />
              Precious Detail
            </h2>

            <p>
              Each piece at Veloura. is designed to empower, <br />
              captivate, and endure. Explore the craftsmanship, <br />
              elegance, and exclusivity that define your next <br />
              signature piece.
            </p>

            <a href="#collections" className="vel-story-btn">
              Learn More
            </a>
          </div>
        </div>

        <div className="vel-story-image-full story-reveal">
          <img src={storyImg} alt="Luxury diamond jewelry detail" />
        </div>
      </div>
    </section>
  );
}