import { useState } from "react";
import "./Header.css";

export default function Header({
  products = [],
  cartItems = [],
  wishlistItems = [],
  onAddToCart,
  onRemoveFromCart,
  onAddToWishlist,
  onRemoveFromWishlist,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState("USA");
  const [searchText, setSearchText] = useState("");

  const [localCart, setLocalCart] = useState([]);
  const [localWishlist, setLocalWishlist] = useState([]);

  const languages = [
    {
      code: "USA",
      label: "English",
      flag: "https://flagcdn.com/w40/us.png",
    },
    {
      code: "FR",
      label: "French",
      flag: "https://flagcdn.com/w40/fr.png",
    },
    {
      code: "IT",
      label: "Italian",
      flag: "https://flagcdn.com/w40/it.png",
    },
  ];

  const isCartControlled = Boolean(onAddToCart || onRemoveFromCart);
  const isWishlistControlled = Boolean(onAddToWishlist || onRemoveFromWishlist);

  const activeCartItems = isCartControlled ? cartItems : localCart;
  const activeWishlistItems = isWishlistControlled
    ? wishlistItems
    : localWishlist;

  const searchableItems = products.length > 0 ? products : activeCartItems;

  const filteredItems = searchableItems.filter((item) =>
    item.name?.toLowerCase().includes(searchText.toLowerCase())
  );

  const currentLanguage =
    languages.find((item) => item.code === lang) || languages[0];

  const isWishlisted = (product) => {
    return activeWishlistItems.some(
      (item) => item.id === product.id || item.name === product.name
    );
  };

  const handleAddToCart = (product) => {
    if (!product) return;

    if (onAddToCart) {
      onAddToCart(product);
    } else {
      setLocalCart((prev) => [...prev, product]);
    }

    setCartOpen(true);
    setSearchOpen(false);
  };

  const handleRemoveFromCart = (product, index) => {
    if (onRemoveFromCart) {
      onRemoveFromCart(product);
    } else {
      setLocalCart((prev) => prev.filter((_, itemIndex) => itemIndex !== index));
    }
  };

  const handleToggleWishlist = (product) => {
    if (!product) return;

    const alreadyAdded = isWishlisted(product);

    if (alreadyAdded) {
      if (onRemoveFromWishlist) {
        onRemoveFromWishlist(product);
      } else {
        setLocalWishlist((prev) =>
          prev.filter(
            (item) => item.id !== product.id && item.name !== product.name
          )
        );
      }
    } else {
      if (onAddToWishlist) {
        onAddToWishlist(product);
      } else {
        setLocalWishlist((prev) => [...prev, product]);
      }
    }
  };

  return (
    <header className="vel-header">
      <div className="vel-header-container">
        <div className="vel-nav">
          <nav className="vel-nav-links">
            <a href="#shop">Shop</a>

            <a href="#collections">
              Collections
              <ion-icon name="chevron-down-outline"></ion-icon>
            </a>

            <a href="#company">Company</a>
          </nav>

          <a href="/" className="vel-logo">
            Veloura.
          </a>

          <div className="vel-actions">
            <div className="vel-lang">
              <button
                className="vel-lang-trigger"
                onClick={() => setLangOpen(!langOpen)}
                aria-label="Change language"
              >
                <img src={currentLanguage.flag} alt={currentLanguage.label} />
                <span>{currentLanguage.code}</span>
                <ion-icon name="chevron-down-outline"></ion-icon>
              </button>

              {langOpen && (
                <div className="vel-lang-dropdown">
                  {languages.map((item) => (
                    <button
                      key={item.code}
                      className={lang === item.code ? "active" : ""}
                      onClick={() => {
                        setLang(item.code);
                        setLangOpen(false);
                      }}
                    >
                      <img src={item.flag} alt={item.label} />
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              className="vel-icon-btn"
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
            >
              <ion-icon name="search-outline"></ion-icon>
            </button>

            <button
              className="vel-icon-btn vel-wishlist-btn"
              onClick={() => setWishlistOpen(true)}
              aria-label="Wishlist"
            >
              <ion-icon name="heart-outline"></ion-icon>
              <span>{activeWishlistItems.length}</span>
            </button>

            <button
              className="vel-icon-btn vel-cart-btn"
              onClick={() => setCartOpen(true)}
              aria-label="Cart"
            >
              <ion-icon name="bag-handle-outline"></ion-icon>
              <span>{activeCartItems.length}</span>
            </button>

            <button
              className="vel-menu-btn"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <ion-icon name="menu-outline"></ion-icon>
            </button>
          </div>
        </div>
      </div>

      {searchOpen && (
        <div className="vel-search-layer" onClick={() => setSearchOpen(false)}>
          <div className="vel-search-panel" onClick={(e) => e.stopPropagation()}>
            <div className="vel-search-top">
              <ion-icon name="search-outline"></ion-icon>

              <input
                type="text"
                placeholder="Search jewelry..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                autoFocus
              />

              <button
                className="vel-search-clear"
                onClick={() => setSearchText("")}
                aria-label="Clear search"
              >
                <ion-icon name="close-outline"></ion-icon>
              </button>

              <button className="vel-search-submit">Search</button>
            </div>

            <div className="vel-search-tags">
              <button onClick={() => setSearchText("ring")}>Ring</button>
              <button onClick={() => setSearchText("necklace")}>Necklace</button>
              <button onClick={() => setSearchText("bracelet")}>Bracelet</button>
              <button onClick={() => setSearchText("earrings")}>Earrings</button>
            </div>

            <div className="vel-search-list">
              {searchableItems.length === 0 ? (
                <div className="vel-search-empty">
                  <ion-icon name="sparkles-outline"></ion-icon>
                  <p>
                    Product section add করার পর এখানে jewelry search result show
                    হবে।
                  </p>
                </div>
              ) : filteredItems.length > 0 ? (
                filteredItems.slice(0, 6).map((item, index) => (
                  <div className="vel-search-product" key={item.id || index}>
                    <div className="vel-search-product-img">
                      {item.image ? (
                        <img src={item.image} alt={item.name} />
                      ) : (
                        <ion-icon name="diamond-outline"></ion-icon>
                      )}
                    </div>

                    <div className="vel-search-product-info">
                      <h4>{item.name}</h4>
                      <span>Luxury Jewelry</span>
                    </div>

                    <div className="vel-search-price">
                      {item.oldPrice && <del>${item.oldPrice}</del>}
                      {item.price && <strong>${item.price}</strong>}
                    </div>

                    <button
                      className={
                        isWishlisted(item)
                          ? "vel-search-wish active"
                          : "vel-search-wish"
                      }
                      onClick={() => handleToggleWishlist(item)}
                      aria-label="Add to wishlist"
                    >
                      <ion-icon
                        name={isWishlisted(item) ? "heart" : "heart-outline"}
                      ></ion-icon>
                    </button>

                    <button
                      className="vel-search-add"
                      onClick={() => handleAddToCart(item)}
                    >
                      Add
                    </button>
                  </div>
                ))
              ) : (
                <div className="vel-search-empty">
                  <ion-icon name="search-outline"></ion-icon>
                  <p>No product found.</p>
                </div>
              )}
            </div>

            <button className="vel-see-all" onClick={() => setSearchOpen(false)}>
              See all
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </button>
          </div>
        </div>
      )}

      {menuOpen && (
        <div className="vel-menu-overlay" onClick={() => setMenuOpen(false)}>
          <aside
            className="vel-mobile-drawer"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="vel-drawer-top">
              <a href="/" className="vel-drawer-logo">
                Veloura.
              </a>

              <button
                className="vel-close-btn"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <ion-icon name="close-outline"></ion-icon>
              </button>
            </div>

            <div className="vel-drawer-intro">
              <span>Menu</span>
              <p>Explore timeless jewelry collections crafted for your moment.</p>
            </div>

            <nav className="vel-drawer-nav">
              <a href="#shop" onClick={() => setMenuOpen(false)}>
                <span>01</span>
                <strong>Shop</strong>
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </a>

              <a href="#collections" onClick={() => setMenuOpen(false)}>
                <span>02</span>
                <strong>Collections</strong>
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </a>

              <a href="#company" onClick={() => setMenuOpen(false)}>
                <span>03</span>
                <strong>Company</strong>
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </a>
            </nav>

            <div className="vel-drawer-footer">
              <a href="#collections" onClick={() => setMenuOpen(false)}>
                View Collections
                <ion-icon name="sparkles-outline"></ion-icon>
              </a>
            </div>
          </aside>
        </div>
      )}

      {wishlistOpen && (
        <div className="vel-menu-overlay" onClick={() => setWishlistOpen(false)}>
          <aside
            className="vel-side-drawer"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="vel-close-btn vel-absolute-close"
              onClick={() => setWishlistOpen(false)}
              aria-label="Close wishlist"
            >
              <ion-icon name="close-outline"></ion-icon>
            </button>

            <div className="vel-drawer-heading">
              <span>Saved Items</span>
              <h3>Your Wishlist</h3>
            </div>

            {activeWishlistItems.length === 0 ? (
              <div className="vel-empty-state">
                <ion-icon name="heart-outline"></ion-icon>
                <p>Your wishlist is empty.</p>
                <small>Product section add করার পর wishlist connect হবে।</small>
              </div>
            ) : (
              <div className="vel-side-list">
                {activeWishlistItems.map((item, index) => (
                  <div className="vel-side-item" key={item.id || index}>
                    <div className="vel-side-img">
                      {item.image ? (
                        <img src={item.image} alt={item.name} />
                      ) : (
                        <ion-icon name="diamond-outline"></ion-icon>
                      )}
                    </div>

                    <div className="vel-side-info">
                      <h4>{item.name}</h4>
                      {item.price && <span>${item.price}</span>}
                    </div>

                    <button
                      className="vel-side-action"
                      onClick={() => handleAddToCart(item)}
                      aria-label="Add wishlist item to cart"
                    >
                      <ion-icon name="bag-handle-outline"></ion-icon>
                    </button>

                    <button
                      className="vel-side-remove"
                      onClick={() => handleToggleWishlist(item)}
                      aria-label="Remove from wishlist"
                    >
                      <ion-icon name="trash-outline"></ion-icon>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </aside>
        </div>
      )}

      {cartOpen && (
        <div className="vel-menu-overlay" onClick={() => setCartOpen(false)}>
          <aside
            className="vel-side-drawer"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="vel-close-btn vel-absolute-close"
              onClick={() => setCartOpen(false)}
              aria-label="Close cart"
            >
              <ion-icon name="close-outline"></ion-icon>
            </button>

            <div className="vel-drawer-heading">
              <span>Shopping Bag</span>
              <h3>Your Cart</h3>
            </div>

            {activeCartItems.length === 0 ? (
              <div className="vel-empty-state">
                <ion-icon name="bag-handle-outline"></ion-icon>
                <p>Your cart is empty.</p>
                <small>Product section add করার পর cart connect হবে।</small>
              </div>
            ) : (
              <div className="vel-side-list">
                {activeCartItems.map((item, index) => (
                  <div className="vel-side-item" key={item.id || index}>
                    <div className="vel-side-img">
                      {item.image ? (
                        <img src={item.image} alt={item.name} />
                      ) : (
                        <ion-icon name="diamond-outline"></ion-icon>
                      )}
                    </div>

                    <div className="vel-side-info">
                      <h4>{item.name}</h4>
                      {item.price && <span>${item.price}</span>}
                    </div>

                    <button
                      className="vel-side-remove"
                      onClick={() => handleRemoveFromCart(item, index)}
                      aria-label="Remove from cart"
                    >
                      <ion-icon name="trash-outline"></ion-icon>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </aside>
        </div>
      )}
    </header>
  );
}