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
  cartItems = [],
  wishlistItems = [],
  onAddToCart,
  onAddToWishlist,
  onRemoveFromWishlist,
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

  const isWishlisted = (product) =>
    wishlistItems.some((item) => item.id === product.id);

  const handleWishlist = (product) => {
    if (isWishlisted(product)) {
      onRemoveFromWishlist(product);
      setToast("Removed from wishlist");
    } else {
      onAddToWishlist(product);
      setToast("Added to wishlist");
    }

    setTimeout(() => setToast(""), 1600);
  };

  const handleCart = (product) => {
    onAddToCart(product);
    setToast("Added to cart");

    setTimeout(() => setToast(""), 1600);
  };

  return (
    <section className="vel-products-section" id="shop">
      <div className="vel-products-container">
        <div className="vel-products-top product-reveal">
          <h2>
            Our Most Coveted <br />
            <em>Creations of Distinction</em>
          </h2>

          <button
            className="vel-products-view"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            View All
          </button>
        </div>

        <div className="vel-products-grid">
          {products.map((product, index) => (
            <article
              className="vel-product-card product-reveal"
              style={{ transitionDelay: `${index * 0.08}s` }}
              key={product.id}
            >
              <div className="vel-product-image">
                <img src={product.image} alt={product.name} />

                <div className="vel-product-actions">
                  <button
                    className={isWishlisted(product) ? "active" : ""}
                    onClick={() => handleWishlist(product)}
                    aria-label="Add to wishlist"
                  >
                    <ion-icon
                      name={isWishlisted(product) ? "heart" : "heart-outline"}
                    ></ion-icon>
                  </button>

                  <button
                    onClick={() => setQuickView(product)}
                    aria-label="Quick view"
                  >
                    <ion-icon name="eye-outline"></ion-icon>
                  </button>

                  <button
                    onClick={() => handleCart(product)}
                    aria-label="Add to cart"
                  >
                    <ion-icon name="bag-handle-outline"></ion-icon>
                  </button>
                </div>
              </div>

              <div className="vel-product-info">
                <div>
                  <h3>{product.name}</h3>
                  <p>{product.category}</p>
                </div>

                <span>${product.price}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="vel-service-grid">
          {services.map((service, index) => (
            <div
              className="vel-service-card product-reveal"
              style={{ transitionDelay: `${index * 0.1}s` }}
              key={service.title}
            >
              <h3>{service.title}</h3>
              <p>{service.text}</p>

              <button>
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>

      {quickView && (
        <div className="vel-quick-overlay" onClick={() => setQuickView(null)}>
          <div className="vel-quick-box" onClick={(e) => e.stopPropagation()}>
            <button
              className="vel-quick-close"
              onClick={() => setQuickView(null)}
              aria-label="Close quick view"
            >
              <ion-icon name="close-outline"></ion-icon>
            </button>

            <div className="vel-quick-img">
              <img src={quickView.image} alt={quickView.name} />
            </div>

            <div className="vel-quick-content">
              <span>{quickView.category}</span>
              <h3>{quickView.name}</h3>

              <div className="vel-quick-price">
                <strong>${quickView.price}</strong>
                <del>${quickView.oldPrice}</del>
              </div>

              <p>
                A refined Veloura piece designed with delicate craftsmanship,
                timeless shine, and modern luxury.
              </p>

              <div className="vel-quick-actions">
                <button onClick={() => handleWishlist(quickView)}>
                  <ion-icon
                    name={
                      isWishlisted(quickView) ? "heart" : "heart-outline"
                    }
                  ></ion-icon>
                  Wishlist
                </button>

                <button onClick={() => handleCart(quickView)}>
                  <ion-icon name="bag-handle-outline"></ion-icon>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {toast && <div className="vel-product-toast">{toast}</div>}
    </section>
  );
}