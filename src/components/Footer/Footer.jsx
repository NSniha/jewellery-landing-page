import { useEffect, useState } from "react";
import "./Footer.css";

const footerColumns = [
  {
    title: "Company",
    links: ["About Us", "Careers", "Blog", "Contact"],
  },
  {
    title: "Products",
    links: ["Rings", "Earing", "Bracelet", "Necklace"],
  },
  {
    title: "Our Policies",
    links: ["Privacy Policy", "Terms of Service", "Refund Policy", "Code of Conduct"],
  },
  {
    title: "Social Media",
    links: ["Instagram", "Facebook", "Linkedin", "Youtube"],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [toast, setToast] = useState("");

  useEffect(() => {
    const revealItems = document.querySelectorAll(".footer-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("footer-show");
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

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setToast("Please enter your email.");
    } else {
      setToast("Thank you for subscribing!");
      setEmail("");
    }

    setTimeout(() => setToast(""), 1800);
  };

  return (
    <footer className="vel-footer">
      <div className="vel-footer-container">
        <div className="vel-footer-main">
          <div className="vel-footer-newsletter footer-reveal">
            <a href="/" className="vel-footer-logo">
              Veloura.
            </a>

            <p>
              Subscribe to our newsletter to receive the <br />
              latest offers and news.
            </p>

            <form className="vel-footer-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Email Here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <button type="submit">Subs</button>
            </form>
          </div>

          <div className="vel-footer-links footer-reveal">
            {footerColumns.map((column) => (
              <div className="vel-footer-column" key={column.title}>
                <h4>{column.title}</h4>

                <ul>
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="vel-footer-bottom">
        <p>© 2025 Veloura. All RIghts Reserved</p>
      </div>

      {toast && <div className="vel-footer-toast">{toast}</div>}
    </footer>
  );
}