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

  useEffect(() => {
    const revealItems = document.querySelectorAll(".category-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("category-show");
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

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const handleViewAll = () => {
    document.querySelector("#shop")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="vel-section-padding bg-white" id="collections">
      <div className="vel-container">
        <div className="category-reveal mb-[42px] flex items-end justify-between gap-[30px] max-[767px]:mb-8 max-[767px]:flex-col max-[767px]:items-start">
          <h2 className="m-0 font-['Source_Serif_4'] text-[clamp(38px,3.8vw,50px)] font-medium leading-[1.2] tracking-[-1.2px] text-[#252525] max-[991px]:text-[clamp(34px,5vw,44px)] max-[767px]:text-[clamp(32px,8vw,42px)] max-[575px]:text-[clamp(30px,9vw,38px)] max-[575px]:leading-[1.14]">
            Our Exclusive Categories <br />
            <em className="font-normal italic">for Every Occasion</em>
          </h2>

          <button
            className="mb-2 cursor-pointer border-0 border-b border-current bg-transparent font-['Manrope'] text-[16px] text-[#8d8d8d] transition duration-300 hover:-translate-x-1 hover:text-[#ad8440] max-[767px]:mb-0 max-[767px]:text-[15px]"
            onClick={handleViewAll}
          >
            View All
          </button>
        </div>

        <div className="grid grid-cols-3 gap-[26px] max-[991px]:grid-cols-2 max-[767px]:grid-cols-1 max-[767px]:gap-[30px]">
          {categories.map((category, index) => {
            const isActive = activeCategory.id === category.id;

            return (
              <article
                className="category-reveal group cursor-pointer"
                style={{ transitionDelay: `${index * 0.12}s` }}
                key={category.id}
                onClick={() => handleCategoryClick(category)}
              >
                <div
                  className={`relative h-[498px] overflow-hidden bg-[#f8f7f5] transition duration-500 max-[1199px]:h-[410px] max-[991px]:h-[400px] max-[767px]:h-[410px] max-[575px]:h-[360px] max-[420px]:h-[315px] ${
                    isActive ? "ring-1 ring-[#ad8440]/45" : "ring-0"
                  }`}
                >
                  <img
                    src={category.image}
                    alt={category.title}
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.055]"
                  />

                  <div className="absolute inset-0 z-[1] bg-[rgba(20,14,10,0.16)] opacity-0 transition duration-500 group-hover:opacity-100"></div>
                </div>

                <div className="pt-5 max-[767px]:pt-4">
                  <h3
                    className={`mb-2 mt-0 font-['Manrope'] text-[21px] font-extrabold leading-[1.15] tracking-[-0.35px] transition duration-300 max-[767px]:text-[20px] ${
                      isActive ? "text-[#ad8440]" : "text-[#252525]"
                    }`}
                  >
                    {category.title}
                  </h3>

                  <p className="vel-copy-small m-0 max-w-[360px] text-[#929292]">
                    {category.text}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}