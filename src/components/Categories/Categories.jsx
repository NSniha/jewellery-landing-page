import { useEffect, useState } from "react";
import "./Categories.css";

import ringImg from "../../assets/images/category-ring.jpg";
import necklaceImg from "../../assets/images/category-necklace.jpg";
import earringsImg from "../../assets/images/category-earrings.jpg";

const categories = [
  {
    id: 1,
    title: "Eternal Rings",
    text: "Crafted to celebrate power, passion, and personal milestones.",
    image: ringImg,
  },
  {
    id: 2,
    title: "Luxe Necklaces",
    text: "From solitaire pendants to statement diamond collars.",
    image: necklaceImg,
  },
  {
    id: 3,
    title: "Signature Earrings",
    text: "Sculptural studs, graceful drops, and chandelier silhouettes.",
    image: earringsImg,
  },
];

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    const revealItems = document.querySelectorAll(".cat-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("cat-show");
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

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setShowInfo(true);
  };

  return (
    <section className="vel-categories" id="collections">
      <div className="vel-category-container">
        <div className="vel-category-top cat-reveal">
          <h2>
            Our Exclusive Categories <br />
            <em>for Every Occasion</em>
          </h2>

          <button className="vel-view-all" onClick={() => setShowInfo(true)}>
            View All
          </button>
        </div>

        <div className="vel-category-grid">
          {categories.map((category, index) => (
            <article
              className={`vel-category-card cat-reveal ${
                activeCategory.id === category.id ? "active" : ""
              }`}
              style={{ transitionDelay: `${index * 0.12}s` }}
              key={category.id}
              onClick={() => handleCategoryClick(category)}
            >
              <div className="vel-category-img">
                <img src={category.image} alt={category.title} />

                <div className="vel-category-overlay">
                  <span>Explore</span>
                </div>
              </div>

              <div className="vel-category-content">
                <h3>{category.title}</h3>
                <p>{category.text}</p>
              </div>
            </article>
          ))}
        </div>

        {showInfo && (
          <div className="vel-category-popup">
            <button onClick={() => setShowInfo(false)} aria-label="Close popup">
              <ion-icon name="close-outline"></ion-icon>
            </button>

            <span>Selected Category</span>
            <h3>{activeCategory.title}</h3>
            <p>{activeCategory.text}</p>
          </div>
        )}
      </div>
    </section>
  );
}