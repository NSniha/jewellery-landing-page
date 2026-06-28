import { useEffect, useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    id: 1,
    question: "Are your gemstones and diamonds ethically sourced?",
    answer:
      "Yes. We are committed to ethical sourcing and work exclusively with trusted suppliers who adhere to conflict-free and responsible mining practices.",
  },
  {
    id: 2,
    question: "Do you offer custom or bespoke jewelry services?",
    answer:
      "Yes, our bespoke service allows you to create a unique piece with our expert design team, from concept to final craftsmanship.",
  },
  {
    id: 3,
    question: "What is your return or exchange policy?",
    answer:
      "We accept eligible returns and exchanges within the stated return window, provided the item is unused and in its original packaging.",
  },
  {
    id: 4,
    question: "Is complimentary jewelry care included?",
    answer:
      "Yes, selected Veloura pieces include complimentary jewelry care guidance to help preserve their brilliance and longevity.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    const revealItems = document.querySelectorAll(".faq-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("faq-show");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="vel-section-padding bg-white" id="faq">
      <div className="vel-container py-14 grid grid-cols-[30%_1fr] items-start gap-[72px] max-[1199px]:grid-cols-[31%_1fr] max-[1199px]:gap-[56px] max-[991px]:grid-cols-1 max-[991px]:gap-10">
        <div className="faq-reveal">
          <h2 className="m-0 font-['Source_Serif_4'] text-[clamp(38px,3.8vw,50px)] font-medium leading-[1.2] tracking-[-1.2px] text-[#252525] max-[991px]:text-[clamp(34px,5vw,44px)] max-[767px]:text-[clamp(32px,8vw,42px)] max-[767px]:leading-[1.16] max-[575px]:text-[clamp(30px,9vw,38px)]">
            Frequently Asked <br />
            Questions
          </h2>

          <p className="mt-7 max-w-[310px] font-['Manrope'] text-[15px] font-normal leading-[1.65] text-[#303030] max-[991px]:mt-5 max-[575px]:max-w-none">
            Have another question? Please{" "}
            <br className="max-[575px]:hidden" />
            contact our team!
          </p>
        </div>

        <div className="flex flex-col gap-5 max-[767px]:gap-[18px]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                className="faq-reveal overflow-hidden bg-[#f8f8f8] transition-colors duration-300 hover:bg-[#f6f1ea]"
                style={{ transitionDelay: `${index * 0.08}s` }}
                key={faq.id}
              >
                <button
                  className="flex min-h-[76px] w-full cursor-pointer items-center justify-between gap-6 border-0 bg-transparent px-[26px] text-left text-[#252525] max-[1199px]:min-h-[72px] max-[767px]:min-h-[68px] max-[767px]:px-[22px] max-[575px]:min-h-16 max-[575px]:gap-4 max-[575px]:px-[18px]"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="font-['Manrope'] text-[20px] font-medium leading-[1.3] tracking-[-0.35px] text-[#252525] max-[1199px]:text-[19px] max-[767px]:text-[18px] max-[575px]:text-[17px]">
                    {faq.question}
                  </span>

                  <ion-icon
                    className={`shrink-0 text-[22px] text-[#252525] transition-transform duration-300 max-[767px]:text-[20px] ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    name="chevron-down-outline"
                  ></ion-icon>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isOpen ? "max-h-[180px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="m-0 px-[26px] pb-[26px] font-['Manrope'] text-[16px] font-normal leading-[1.7] text-[#777] max-[767px]:px-[22px] max-[767px]:pb-[22px] max-[575px]:px-[18px] max-[575px]:pb-5">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}