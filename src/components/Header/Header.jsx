import { useState } from "react";
import "./Header.css";

export default function Header({ cartItems = [], products = [] }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState("EN");
  const [searchText, setSearchText] = useState("");

  const languages = [
    { code: "EN", label: "English" },
    { code: "BN", label: "Bangla" },
    { code: "FR", label: "French" },
  ];

  const searchableItems = products.length > 0 ? products : cartItems;

  const filteredItems = searchableItems.filter((item) =>
    item.name?.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <header className="vel-header">
      <div className="vel-header-container">
        <div className="vel-nav">
          <nav className="vel-nav-links">
            <a href="#shop">Shop</a>

            <a href="#collections">
              Collections <ChevronIcon />
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
                {lang} <ChevronIcon />
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
                      <span className="vel-lang-icon">{item.code[0]}</span>
                      <span className="vel-lang-text">{item.label}</span>
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
              <SearchIcon />
            </button>

            <button
              className="vel-icon-btn vel-cart-btn"
              onClick={() => setCartOpen(true)}
              aria-label="Cart"
            >
              <BagIcon />
              <span>{cartItems.length}</span>
            </button>

            <button
              className="vel-menu-btn"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>

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
                <CloseIcon />
              </button>
            </div>

            <div className="vel-drawer-intro">
              <span>Menu</span>
              <p>
                Explore timeless jewelry collections crafted for your moment.
              </p>
            </div>

            <nav className="vel-drawer-nav">
              <a href="#shop" onClick={() => setMenuOpen(false)}>
                <span>01</span>
                <strong>Shop</strong>
                <DrawerArrow />
              </a>

              <a href="#collections" onClick={() => setMenuOpen(false)}>
                <span>02</span>
                <strong>Collections</strong>
                <DrawerArrow />
              </a>

              <a href="#company" onClick={() => setMenuOpen(false)}>
                <span>03</span>
                <strong>Company</strong>
                <DrawerArrow />
              </a>
            </nav>

            <div className="vel-drawer-footer">
              <a href="#collections" onClick={() => setMenuOpen(false)}>
                View Collections
              </a>
            </div>
          </aside>
        </div>
      )}

      {searchOpen && (
        <div className="vel-popup-overlay" onClick={() => setSearchOpen(false)}>
          <div className="vel-search-popup" onClick={(e) => e.stopPropagation()}>
            <button
              className="vel-close-btn vel-absolute-close"
              onClick={() => setSearchOpen(false)}
              aria-label="Close search"
            >
              <CloseIcon />
            </button>

            <h3>Search Products</h3>

            <input
              type="text"
              placeholder="Search product..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              autoFocus
            />

            <div className="vel-search-result">
              {searchText.length === 0 ? (
                <p>Product section add করার পর search result এখানে show হবে।</p>
              ) : filteredItems.length > 0 ? (
                filteredItems.map((item, index) => (
                  <div className="vel-search-item" key={item.id || index}>
                    {item.image && <img src={item.image} alt={item.name} />}

                    <div>
                      <h4>{item.name}</h4>
                      {item.price && <span>${item.price}</span>}
                    </div>
                  </div>
                ))
              ) : (
                <p>No product found.</p>
              )}
            </div>
          </div>
        </div>
      )}

      {cartOpen && (
        <div className="vel-menu-overlay" onClick={() => setCartOpen(false)}>
          <aside
            className="vel-cart-drawer"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="vel-close-btn vel-absolute-close"
              onClick={() => setCartOpen(false)}
              aria-label="Close cart"
            >
              <CloseIcon />
            </button>

            <h3>Your Cart</h3>

            {cartItems.length === 0 ? (
              <p>Your cart is empty. Product section add করার পর cart connect হবে।</p>
            ) : (
              <div className="vel-cart-list">
                {cartItems.map((item, index) => (
                  <div className="vel-cart-item" key={item.id || index}>
                    {item.image && <img src={item.image} alt={item.name} />}

                    <div>
                      <h4>{item.name}</h4>
                      {item.price && <span>${item.price}</span>}
                    </div>
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

function ChevronIcon() {
  return (
    <svg viewBox="0 0 20 20" width="14" height="14" fill="none">
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" width="23" height="23" fill="none">
      <circle
        cx="10.8"
        cy="10.8"
        r="6.8"
        stroke="currentColor"
        strokeWidth="1.55"
      />
      <path
        d="M16.1 16.1L20.5 20.5"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg viewBox="0 0 24 24" width="23" height="23" fill="none">
      <path
        d="M7.2 8.7H16.8L17.75 20H6.25L7.2 8.7Z"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 8.7C9.2 5.9 10.35 4.1 12 4.1C13.65 4.1 14.8 5.9 14.8 8.7"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <path
        d="M6 6L18 18M18 6L6 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DrawerArrow() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
      <path
        d="M7 17L17 7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M9 7H17V15"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}