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
      setActiveIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="vel-section-padding bg-[#fafafa]" id="testimonials">
      <div className="vel-container pt-6 pb-14">
        <div className="testi-reveal mb-[48px] flex items-end justify-between gap-[30px] max-[991px]:mb-11 max-[767px]:mb-[34px] max-[767px]:flex-col max-[767px]:items-start max-[767px]:gap-[18px]">
          <h2 className="m-0 font-['Source_Serif_4'] text-[clamp(38px,3.8vw,50px)] font-medium leading-[1.2] tracking-[-1.2px] text-[#252525] max-[767px]:text-[clamp(32px,8vw,42px)] max-[575px]:leading-[1.14]">
            The Sparkle in <br />
            <em className="font-normal italic">Their Words</em>
          </h2>

          <button
            className="mb-2 cursor-pointer border-0 border-b border-current bg-transparent font-['Manrope'] text-[16px] text-[#8d8d8d] transition duration-300 hover:-translate-x-1 hover:text-[#ad8440] max-[767px]:mb-0 max-[767px]:text-[15px]"
            onClick={() =>
              document.querySelector("#shop")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            View All
          </button>
        </div>

        <div className="testi-reveal grid grid-cols-[39.5%_1fr] items-stretch gap-12 max-[1199px]:grid-cols-[42%_1fr] max-[1199px]:gap-[42px] max-[991px]:grid-cols-1 max-[991px]:gap-[34px]">
          <div className="h-[420px] overflow-hidden bg-[#ddd] max-[1199px]:h-[390px] max-[991px]:h-[450px] max-[767px]:h-[380px] max-[575px]:h-[315px] max-[420px]:h-[275px]">
            <img
              key={activeTestimonial.image}
              src={activeTestimonial.image}
              alt={activeTestimonial.name}
              className="testi-image-switch h-full w-full object-cover"
            />
          </div>

          <div className="relative flex min-h-[420px] flex-col max-[1199px]:min-h-[390px] max-[991px]:min-h-0">
            <span className="-mt-[7px] mb-[22px] block font-['Source_Serif_4'] text-[92px] font-semibold leading-[0.78] text-[#252525] max-[767px]:mb-[14px] max-[767px]:text-[74px]">
              “
            </span>

            <div className="testi-text-switch" key={activeTestimonial.id}>
              <p className="m-0 max-w-[760px] font-['Source_Serif_4'] text-[clamp(26px,2.8vw,38px)] font-medium leading-[1.22] tracking-[-1px] text-[#252525] max-[1199px]:text-[clamp(29px,3.2vw,39px)] max-[767px]:text-[clamp(26px,7vw,34px)] max-[575px]:text-[clamp(24px,8vw,31px)]">
                {activeTestimonial.quote}
              </p>

              <div className="mt-[42px] max-[767px]:mt-8">
                <h4 className="mb-[9px] mt-0 font-['Manrope'] text-[20px] font-medium leading-[1.2] text-[#252525] max-[767px]:text-[18px]">
                  {activeTestimonial.name}
                </h4>

                <span className="font-['Manrope'] text-[14px] leading-[1.4] text-[#9a9a9a]">
                  {activeTestimonial.location}
                </span>
              </div>
            </div>

            <div className="mt-auto flex justify-end gap-[30px] max-[991px]:mt-[38px] max-[991px]:justify-start max-[575px]:gap-4">
              <button
                className="grid h-[50px] w-[50px] cursor-pointer place-items-center border border-[#cfcfcf] bg-transparent text-[#252525] transition duration-300 hover:-translate-y-1 hover:border-[#ad8440] hover:bg-[#ad8440] hover:text-white max-[575px]:h-[46px] max-[575px]:w-[46px]"
                onClick={handlePrev}
                aria-label="Previous testimonial"
              >
                <ion-icon name="arrow-back-outline"></ion-icon>
              </button>

              <button
                className="grid h-[50px] w-[50px] cursor-pointer place-items-center border border-[#cfcfcf] bg-transparent text-[#252525] transition duration-300 hover:-translate-y-1 hover:border-[#ad8440] hover:bg-[#ad8440] hover:text-white max-[575px]:h-[46px] max-[575px]:w-[46px]"
                onClick={handleNext}
                aria-label="Next testimonial"
              >
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}