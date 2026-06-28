import { useEffect } from "react";
import "./LegacyCTA.css";

import footerCtaImg from "../../assets/images/footer-cta.jpg";

export default function LegacyCTA() {
  useEffect(() => {
    const revealItems = document.querySelectorAll(".legacy-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("legacy-show");
          }
        });
      },
      { threshold: 0.16 }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => {
      revealItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <section className="vel-legacy-cta">
      <img src={footerCtaImg} alt="Luxury jewelry campaign" />

      <div className="vel-legacy-overlay"></div>

      <div className="vel-legacy-container">
        <div className="vel-legacy-content legacy-reveal">
          <h2>
            Your Legacy Deserves <br />
            More Than Ordinary
          </h2>

          <p>
            Discover jewelry that speaks to your story <br />
            crafted with rare stones, timeless design details.
          </p>

          <a href="#shop">Get Started Now</a>
        </div>
      </div>
    </section>
  );
}