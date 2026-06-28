import { useEffect } from "react";
import "./Hero.css";

import heroMain from "../../assets/images/hero-main.jpg";
import heroCardOne from "../../assets/images/hero-card-1.jpg";
import heroCardTwo from "../../assets/images/hero-card-2.jpg";

const heroCards = [
  {
    id: 1,
    image: heroCardOne,
    alt: "Pearl jewelry collection",
    text: "Every piece tells a story of beauty, strength, and timeless elegance.",
    overlay:
      "bg-[linear-gradient(90deg,rgba(18,12,8,0.7)_0%,rgba(18,12,8,0.42)_48%,rgba(18,12,8,0.14)_100%)]",
  },
  {
    id: 2,
    image: heroCardTwo,
    alt: "Luxury jewelry detail",
    text: "Discover jewelry that reflects your style and celebrates your moment.",
    overlay:
      "bg-[linear-gradient(90deg,rgba(18,12,8,0.78)_0%,rgba(18,12,8,0.5)_48%,rgba(18,12,8,0.18)_100%)]",
  },
];

export default function Hero() {
  useEffect(() => {
    const revealItems = document.querySelectorAll(".hero-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("hero-show");
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

  return (
    <section className="vel-section-padding bg-white">
      <div className="vel-container pt-8">
        <div className="hero-reveal relative h-[567px] overflow-hidden bg-black max-[1199px]:h-[520px] max-[767px]:h-[560px] max-[480px]:h-[520px]">
          <img
            src={heroMain}
            alt="Handcrafted jewelry"
            className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.025]"
          />

          <div className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(18,12,8,0.72)_0%,rgba(18,12,8,0.48)_36%,rgba(18,12,8,0.22)_68%,rgba(18,12,8,0.1)_100%),linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2))]"></div>

          <p className="hero-body-text hero-text-reveal absolute right-6 top-7 z-[2] m-0 max-w-[390px] text-right text-white max-[1199px]:max-w-[330px] max-[767px]:left-5 max-[767px]:right-5 max-[767px]:max-w-none max-[767px]:text-center">
            The brilliance of artisan-crafted fine jewelry, where each piece
            tells a story of legacy, luxury, and love.
            <span className="ml-auto mt-4 block h-px w-[98px] bg-white/90 max-[767px]:mx-auto"></span>
          </p>

          <h1 className="hero-main-title hero-title-reveal">
            <em>Experience</em> The Elegance Of <br />
            Handcrafted <em>Jewelry</em>
          </h1>

          <span className="hero-spark absolute left-[11.5%] top-[57%] z-[2] text-[38px] text-white max-[767px]:left-[9%] max-[767px]:top-[64%]">
            ✦
          </span>

          <span className="hero-spark absolute right-[12%] top-[35.5%] z-[2] text-[38px] text-white max-[767px]:right-[9%] max-[767px]:top-[38%]">
            ✦
          </span>

          <a
            href="#collections"
            className="absolute bottom-7 left-8 z-[2] inline-flex items-center gap-3 font-['Manrope'] text-[16px] text-white no-underline drop-shadow-[0_6px_18px_rgba(0,0,0,0.55)] transition duration-300 hover:translate-x-1 max-[480px]:left-6"
          >
            Learn More <ArrowIcon />
          </a>
        </div>

        <div className="mt-[30px] grid grid-cols-2 gap-[30px] max-[767px]:grid-cols-1 max-[767px]:gap-[22px]">
          {heroCards.map((card, index) => (
            <article
              className="hero-reveal group relative h-[276px] overflow-hidden bg-black max-[767px]:h-[260px]"
              style={{ transitionDelay: `${index * 0.12}s` }}
              key={card.id}
            >
              <img
                src={card.image}
                alt={card.alt}
                className="h-full w-full scale-[1.01] object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.055]"
              />

              <div className={`absolute inset-0 z-[1] ${card.overlay}`}></div>

              <div className="absolute bottom-6 left-7 z-[2] max-w-[430px] text-white max-[480px]:bottom-[22px] max-[480px]:left-[22px]">
                <p className="hero-body-text-sm m-0 max-w-[390px] text-white drop-shadow-[0_5px_18px_rgba(0,0,0,0.65)]">
                  {card.text}
                </p>

                <span className="mt-[10px] block h-px w-[95px] bg-white/85"></span>

                <a
                  href="#shop"
                  className="mt-[13px] inline-flex items-center gap-3 font-['Manrope'] text-[16px] text-white no-underline drop-shadow-[0_6px_18px_rgba(0,0,0,0.55)] transition duration-300 hover:translate-x-1"
                >
                  Learn More <ArrowIcon />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 34 18" width="34" height="18" fill="none">
      <path d="M1 9H30" stroke="currentColor" strokeWidth="1.25" />
      <path d="M23 2L30 9L23 16" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}