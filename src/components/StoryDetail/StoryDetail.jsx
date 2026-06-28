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
      { threshold: 0.18 }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => {
      revealItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <section className="vel-section-padding w-full bg-white">
      <div className="relative min-h-[530px] w-full overflow-hidden bg-[#b48a43] max-[1199px]:min-h-[500px] max-[991px]:min-h-0">
        <div className="vel-container relative z-[2] min-h-[530px] max-[1199px]:min-h-[500px] max-[991px]:min-h-0">
          <div className="story-reveal flex min-h-[530px] w-[44%] flex-col justify-start pt-[84px] text-white max-[1199px]:min-h-[500px] max-[1199px]:w-[43%] max-[1199px]:pt-[74px] max-[991px]:min-h-0 max-[991px]:w-full max-[991px]:py-[62px] max-[767px]:py-[52px] max-[575px]:py-[44px]">
            <h2 className="m-0 font-['Source_Serif_4'] text-[clamp(42px,4vw,52px)] font-medium leading-[1.28] tracking-[-1.1px] max-[991px]:text-[clamp(38px,6vw,48px)] max-[767px]:text-[clamp(34px,8vw,44px)] max-[767px]:leading-[1.18] max-[575px]:text-[clamp(31px,9vw,40px)]">
              Elevate Your Story in <br />
              Precious Detail
            </h2>

            <p className="mt-[30px] max-w-[520px] font-['Manrope'] text-[17px] font-normal leading-[1.7] text-white/90 max-[1199px]:text-[16px] max-[767px]:mt-6 max-[767px]:text-[15px] max-[767px]:leading-[1.65]">
              Each piece at Veloura. is designed to empower,{" "}
              <br className="max-[575px]:hidden" />
              captivate, and endure. Explore the craftsmanship,{" "}
              <br className="max-[575px]:hidden" />
              elegance, and exclusivity that define your next{" "}
              <br className="max-[575px]:hidden" />
              signature piece.
            </p>

            <a
              href="#collections"
              className="mt-[46px] inline-flex h-[43px] w-[123px] items-center justify-center bg-[#202020] font-['Manrope'] text-[16px] font-medium text-white no-underline transition duration-300 hover:-translate-y-1 hover:bg-[#111] max-[767px]:mt-[34px]"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="story-reveal story-image-full absolute right-0 top-0 z-[1] h-[530px] w-[54.8vw] overflow-hidden max-[1199px]:h-[500px] max-[1199px]:w-[55vw] max-[991px]:relative max-[991px]:h-[455px] max-[991px]:w-full max-[767px]:h-[390px] max-[575px]:h-[330px] max-[420px]:h-[285px]">
          <img
            src={storyImg}
            alt="Luxury diamond jewelry detail"
            className="h-full w-full scale-[1.05] object-cover object-center transition-transform duration-[1250ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          />
        </div>
      </div>
    </section>
  );
}