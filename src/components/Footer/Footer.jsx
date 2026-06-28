import { useEffect, useState } from "react";
import "./Footer.css";

const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About Veloura", href: "#company" },
      { label: "Our Craft", href: "#collections" },
      { label: "Journal", href: "#testimonials" },
      { label: "Contact", href: "#faq" },
    ],
  },
  {
    title: "Collections",
    links: [
      { label: "Engagement Rings", href: "#shop" },
      { label: "Fine Necklaces", href: "#shop" },
      { label: "Signature Earrings", href: "#shop" },
      { label: "Tennis Bracelets", href: "#shop" },
    ],
  },
  {
    title: "Client Care",
    links: [
      { label: "Shipping & Delivery", href: "#faq" },
      { label: "Returns & Exchanges", href: "#faq" },
      { label: "Jewelry Care", href: "#faq" },
      { label: "Bespoke Service", href: "#collections" },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "Instagram", href: "#" },
      { label: "Facebook", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "YouTube", href: "#" },
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [toast, setToast] = useState("");
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const revealItems = document.querySelectorAll(".footer-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("footer-show");
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

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(""), 1800);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();

    const userEmail = email.trim();

    if (!userEmail) {
      showToast("Please enter your email address.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(userEmail)) {
      showToast("Please enter a valid email address.");
      return;
    }

    showToast("Thank you for joining Veloura updates.");
    setEmail("");
  };

  return (
    <footer className="w-full bg-[#f8f7f5] text-[#252525]">
      <div className="vel-container">
        <div className="grid min-h-[365px] grid-cols-[36%_1fr] items-start gap-[90px] py-[70px] max-[1199px]:grid-cols-[34%_1fr] max-[1199px]:gap-16 max-[991px]:grid-cols-1 max-[991px]:gap-[54px] max-[991px]:py-16 max-[767px]:py-[54px]">
          <div className="footer-reveal">
            <a
              href="/"
              className="font-['Source_Serif_4'] text-[40px] font-medium italic leading-none tracking-[-1.1px] text-[#252525] no-underline max-[767px]:text-[36px]"
            >
              Veloura.
            </a>

            <p className="mt-7 max-w-[430px] font-['Manrope'] text-[15px] font-normal leading-[1.7] text-[#303030]">
              Receive private previews, refined jewelry edits, and thoughtful
              care notes from the Veloura atelier.
            </p>

            <form
              className="mt-7 grid h-[66px] w-[413px] max-w-full grid-cols-[1fr_118px] items-center gap-[14px] bg-[#b48a43] px-[17px] max-[767px]:h-16 max-[767px]:grid-cols-[1fr_105px] max-[575px]:w-full max-[575px]:gap-[10px] max-[575px]:px-3 max-[420px]:grid-cols-[1fr_92px]"
              onSubmit={handleSubscribe}
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-full w-full border-0 bg-transparent font-['Manrope'] text-[15px] text-white outline-none placeholder:text-white/90 max-[575px]:text-[14px]"
                aria-label="Email address"
              />

              <button
                type="submit"
                className="h-[42px] w-full cursor-pointer border-0 bg-[#202020] font-['Manrope'] text-[14px] font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#111]"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="footer-reveal grid grid-cols-4 gap-[58px] pt-6 max-[1199px]:gap-9 max-[991px]:grid-cols-2 max-[991px]:gap-x-[60px] max-[991px]:gap-y-[38px] max-[991px]:pt-0 max-[575px]:grid-cols-1 max-[575px]:gap-[30px]">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h4 className="mb-6 mt-0 font-['Manrope'] text-[15px] font-bold leading-[1.2] text-[#252525] max-[575px]:mb-4">
                  {column.title}
                </h4>

                <ul className="m-0 list-none p-0">
                  {column.links.map((link) => (
                    <li className="mb-[15px] last:mb-0" key={link.label}>
                      <a
                        href={link.href}
                        className="font-['Manrope'] text-[14px] leading-[1.4] text-[#8f8f8f] no-underline transition duration-300 hover:pl-1 hover:text-[#ad8440]"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid min-h-[86px] place-items-center border-t border-[rgba(173,170,170,0.22)] px-5 text-center max-[767px]:min-h-[85px]">
        <p className="m-0 font-['Manrope'] text-[14px] font-normal leading-[1.2] text-[#8f8f8f]">
          <strong className="font-normal">
            © {currentYear} Veloura. All rights reserved.
          </strong>{" "}
          Crafted for timeless elegance, responsible luxury, and refined jewelry
          experiences.
        </p>
      </div>

      {toast && <div className="footer-toast">{toast}</div>}
    </footer>
  );
}