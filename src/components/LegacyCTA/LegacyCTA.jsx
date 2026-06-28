import { useEffect } from "react";
import "./LegacyCTA.css";

import footerCtaImg from "../../assets/images/footer-cta.jpg";

export default function LegacyCTA() {
  useEffect(() => {
    const revealItems = document.querySelectorAll(".legacy-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("legacy-show");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="group relative h-[445px] w-full overflow-hidden bg-[#111] max-[1199px]:h-[410px] max-[991px]:h-[390px] max-[767px]:h-[430px] max-[575px]:h-[405px] max-[420px]:h-[380px]">
      <img
        src={footerCtaImg}
        alt="Luxury jewelry campaign"
        className="absolute inset-0 h-full w-full scale-[1.04] object-cover object-center transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-100"
      />

      <div className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(0,0,0,0.76)_0%,rgba(0,0,0,0.5)_35%,rgba(0,0,0,0.18)_68%,rgba(0,0,0,0.06)_100%),linear-gradient(0deg,rgba(0,0,0,0.12),rgba(0,0,0,0.12))] max-[767px]:bg-[linear-gradient(90deg,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.58)_58%,rgba(0,0,0,0.25)_100%)]"></div>

      <div className="vel-container relative z-[2] h-full">
        <div className="legacy-reveal flex h-full flex-col justify-center text-white">
          <h2 className="m-0 font-['Source_Serif_4'] text-[clamp(38px,3.8vw,50px)] font-medium leading-[1.2] tracking-[-1.2px] text-white max-[767px]:text-[clamp(32px,8vw,42px)] max-[767px]:leading-[1.18] max-[575px]:text-[clamp(30px,9vw,38px)]">
            Your Legacy Deserves <br />
            More Than Ordinary
          </h2>

          <p className="mt-6 max-w-[520px] font-['Manrope'] text-[15px] font-normal leading-[1.7] text-white/80 max-[767px]:mt-[22px] max-[767px]:max-w-[430px]">
            Discover jewelry that speaks to your story{" "}
            <br className="max-[767px]:hidden" />
            crafted with rare stones, timeless design details.
          </p>

          <a
            href="#shop"
            className="mt-10 inline-flex h-[48px] w-[178px] items-center justify-center bg-[#b48a43] font-['Manrope'] text-[14px] font-semibold text-white no-underline transition duration-300 hover:-translate-y-1 hover:bg-[#17120d] max-[767px]:mt-8 max-[767px]:h-[46px] max-[767px]:w-[162px] max-[767px]:text-[13px]"
          >
            Get Started Now
          </a>
        </div>
      </div>
    </section>
  );
}