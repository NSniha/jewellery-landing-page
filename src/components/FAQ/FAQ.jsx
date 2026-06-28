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
          if (entry.isIntersecting) {
            entry.target.classList.add("faq-show");
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
    <section className="vel-faq-section" id="faq">
      <div className="vel-faq-container">
        <div className="vel-faq-left faq-reveal">
          <h2>
            Frequently Asked <br />
            Questions
          </h2>

          <p>
            Have another question? Please <br />
            contact our team!
          </p>
        </div>

        <div className="vel-faq-right faq-reveal">
          {faqs.map((faq, index) => (
            <div
              className={`vel-faq-item ${openIndex === index ? "active" : ""}`}
              key={faq.id}
            >
              <button
                className="vel-faq-question"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <span>{faq.question}</span>

                <ion-icon
                  name={
                    openIndex === index
                      ? "chevron-up-outline"
                      : "chevron-down-outline"
                  }
                ></ion-icon>
              </button>

              <div className="vel-faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}