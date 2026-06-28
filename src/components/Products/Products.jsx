import { useEffect, useState } from "react";
import "./Products.css";
import { products } from "../../data/products";

const services = [
  {
    title: "Master-Crafted Fine Jewelry",
    text: "Each piece is carefully made by skilled artisans using high-quality, ethically sourced materials.",
  },
  {
    title: "Personalized Bespoke Services",
    text: "Create a one of a kind piece with our expert team, perfect for special every moments.",
  },
  {
    title: "Exclusive, Limited Collections",
    text: "We offer exclusive designs in small quantities, so your jewelry stays truly unique.",
  },
];

export default function Products({
  wishlistItems = [],
  onAddToCart = () => {},
  onAddToWishlist = () => {},
  onRemoveFromWishlist = () => {},
}) {
  const [quickView, setQuickView] = useState(null);
  const [toast, setToast] = useState("");

  useEffect(() => {
    const revealItems = document.querySelectorAll(".product-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("product-show");
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

  const isWishlisted = (product) => {
    return wishlistItems.some((item) => item.id === product.id);
  };

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(""), 1600);
  };

  const handleWishlist = (product) => {
    if (isWishlisted(product)) {
      onRemoveFromWishlist(product);
      showToast("Removed from wishlist");
    } else {
      onAddToWishlist(product);
      showToast("Added to wishlist");
    }
  };

  const handleCart = (product) => {
    onAddToCart(product);
    showToast("Added to cart");
  };

  const formatPrice = (value) => `$${Number(value || 0).toFixed(0)}`;

  return (
    <section className="vel-section-padding bg-white" id="shop">
      <div className="vel-container pb-16">
        <div className="product-reveal mb-12 flex items-end justify-between gap-[30px] max-[767px]:mb-[34px] max-[767px]:flex-col max-[767px]:items-start">
          <h2 className="m-0 font-['Source_Serif_4'] text-[clamp(38px,3.8vw,50px)] font-medium leading-[1.2] tracking-[-1.2px] text-[#252525] max-[767px]:text-[clamp(32px,8vw,42px)] max-[575px]:leading-[1.14]">
            Our Most Coveted <br />
            <em className="font-normal italic">Creations of Distinction</em>
          </h2>

          <button
            className="mb-2 cursor-pointer border-0 border-b border-current bg-transparent font-['Manrope'] text-[16px] text-[#8d8d8d] transition duration-300 hover:-translate-x-1 hover:text-[#ad8440] max-[767px]:mb-0 max-[767px]:text-[15px]"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            View All
          </button>
        </div>

        <div className="grid grid-cols-3 gap-x-[26px] gap-y-[42px] max-[991px]:grid-cols-2 max-[575px]:grid-cols-1 max-[575px]:gap-y-[34px]">
          {products.map((product, index) => {
            const wished = isWishlisted(product);

            return (
              <article
                className="product-reveal group cursor-pointer"
                style={{ transitionDelay: `${index * 0.08}s` }}
                key={product.id}
              >
                <div className="relative h-[390px] overflow-hidden bg-[#f8f7f5] max-[1199px]:h-[340px] max-[767px]:h-[310px] max-[575px]:h-[350px] max-[420px]:h-[310px]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover object-center transition-transform duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.045]"
                  />

                  <div className="absolute inset-0 bg-[rgba(18,14,10,0.08)] opacity-0 transition duration-500 group-hover:opacity-100"></div>

                  <div className="absolute bottom-6 left-1/2 z-[2] flex -translate-x-1/2 translate-y-[18px] items-center gap-[10px] opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 max-[575px]:bottom-5 max-[575px]:translate-y-0 max-[575px]:opacity-100">
                    <button
                      className={`grid h-[43px] w-[43px] cursor-pointer place-items-center rounded-full border-0 shadow-[0_14px_34px_rgba(0,0,0,0.12)] backdrop-blur-lg transition duration-300 hover:-translate-y-1 ${
                        wished
                          ? "bg-[#ad8440] text-white"
                          : "bg-white/95 text-[#17120d] hover:bg-[#ad8440] hover:text-white"
                      }`}
                      onClick={() => handleWishlist(product)}
                      aria-label="Add to wishlist"
                    >
                      <ion-icon
                        name={wished ? "heart" : "heart-outline"}
                      ></ion-icon>
                    </button>

                    <button
                      className="grid h-[43px] w-[43px] cursor-pointer place-items-center rounded-full border-0 bg-white/95 text-[#17120d] shadow-[0_14px_34px_rgba(0,0,0,0.12)] backdrop-blur-lg transition duration-300 hover:-translate-y-1 hover:bg-[#ad8440] hover:text-white"
                      onClick={() => setQuickView(product)}
                      aria-label="Quick view"
                    >
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>

                    <button
                      className="grid h-[43px] w-[43px] cursor-pointer place-items-center rounded-full border-0 bg-white/95 text-[#17120d] shadow-[0_14px_34px_rgba(0,0,0,0.12)] backdrop-blur-lg transition duration-300 hover:-translate-y-1 hover:bg-[#ad8440] hover:text-white"
                      onClick={() => handleCart(product)}
                      aria-label="Add to cart"
                    >
                      <ion-icon name="bag-handle-outline"></ion-icon>
                    </button>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-[18px] pt-[17px]">
                  <div className="min-w-0">
                    <h3 className="mb-2 mt-0 truncate font-['Manrope'] text-[17px] font-bold leading-[1.2] tracking-[-0.3px] text-[#252525] transition duration-300 group-hover:text-[#ad8440]">
                      {product.name}
                    </h3>

                    <p className="m-0 font-['Manrope'] text-[13px] leading-[1.45] text-[#9a9a9a]">
                      {product.category}
                    </p>
                  </div>

                  <span className="shrink-0 font-['Manrope'] text-[17px] font-bold leading-[1.2] text-[#252525]">
                    {formatPrice(product.price)}
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-[88px] grid grid-cols-3 gap-[42px] max-[991px]:mt-[72px] max-[991px]:grid-cols-1 max-[991px]:gap-[46px] max-[575px]:mt-[62px]">
          {services.map((service, index) => (
            <div
              className="product-reveal text-center"
              style={{ transitionDelay: `${index * 0.1}s` }}
              key={service.title}
            >
              <h3 className="mx-auto mb-5 mt-0 max-w-[340px] font-['Source_Serif_4'] text-[clamp(26px,3vw,34px)] font-medium leading-[1.25] tracking-[-1.1px] text-[#252525] max-[991px]:max-w-[460px] max-[575px]:text-[30px]">
                {service.title}
              </h3>

              <p className="mx-auto m-0 max-w-[340px] font-['Manrope'] text-[15px] leading-[1.65] text-[#929292] max-[991px]:max-w-[460px]">
                {service.text}
              </p>

              <button className="mt-8 h-10 w-28 cursor-pointer border border-[#a9a9a9] bg-transparent font-['Manrope'] text-[13px] text-[#8f8f8f] transition duration-300 hover:-translate-y-1 hover:border-[#ad8440] hover:bg-[#ad8440] hover:text-white">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>

      {quickView && (
        <div
          className="product-modal-fade fixed inset-0 z-[500] grid place-items-center bg-[rgba(18,14,10,0.52)] p-5 backdrop-blur-[7px]"
          onClick={() => setQuickView(null)}
        >
          <div
            className="product-modal-pop relative grid w-[min(850px,100%)] grid-cols-[0.9fr_1fr] bg-[#fffdf9] max-[767px]:max-h-[calc(100dvh_-_40px)] max-[767px]:grid-cols-1 max-[767px]:overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute right-[18px] top-[18px] z-[2] grid h-[38px] w-[38px] cursor-pointer place-items-center rounded-full border-0 bg-[#f8f1e7] text-[#ad8440] transition duration-300 hover:bg-[#ad8440] hover:text-white"
              onClick={() => setQuickView(null)}
              aria-label="Close quick view"
            >
              <ion-icon name="close-outline"></ion-icon>
            </button>

            <div className="grid min-h-[430px] place-items-center bg-white max-[767px]:min-h-[310px]">
              <img
                src={quickView.image}
                alt={quickView.name}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="px-12 pb-12 pt-16 max-[767px]:px-6 max-[767px]:pb-[30px] max-[767px]:pt-[34px]">
              <span className="inline-block bg-[#f8f1e7] px-[11px] py-[6px] font-['Manrope'] text-[12px] font-extrabold text-[#ad8440]">
                {quickView.category}
              </span>

              <h3 className="mb-[14px] mt-5 font-['Source_Serif_4'] text-[38px] font-medium leading-[1.15] text-[#17120d] max-[767px]:text-[32px]">
                {quickView.name}
              </h3>

              <div className="flex items-center gap-3 font-['Manrope']">
                <strong className="text-[22px] text-[#17120d]">
                  {formatPrice(quickView.price)}
                </strong>

                {quickView.oldPrice && (
                  <del className="text-[15px] text-[#999]">
                    {formatPrice(quickView.oldPrice)}
                  </del>
                )}
              </div>

              <p className="mt-6 max-w-[440px] font-['Manrope'] text-[14px] leading-[1.75] text-[#777]">
                A refined Veloura piece designed with delicate craftsmanship,
                timeless shine, and modern luxury.
              </p>

              <div className="mt-[34px] flex gap-3 max-[575px]:flex-col">
                <button
                  className="inline-flex h-[46px] cursor-pointer items-center justify-center gap-2 border-0 bg-[#f8f1e7] px-[18px] font-['Manrope'] text-[14px] font-bold text-[#ad8440] transition duration-300 hover:bg-[#ad8440] hover:text-white"
                  onClick={() => handleWishlist(quickView)}
                >
                  <ion-icon
                    name={isWishlisted(quickView) ? "heart" : "heart-outline"}
                  ></ion-icon>
                  Wishlist
                </button>

                <button
                  className="inline-flex h-[46px] cursor-pointer items-center justify-center gap-2 border-0 bg-[#17120d] px-[18px] font-['Manrope'] text-[14px] font-bold text-white transition duration-300 hover:bg-[#ad8440]"
                  onClick={() => handleCart(quickView)}
                >
                  <ion-icon name="bag-handle-outline"></ion-icon>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {toast && <div className="product-toast">{toast}</div>}
    </section>
  );
}