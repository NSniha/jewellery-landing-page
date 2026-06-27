import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");
  const [searchText, setSearchText] = useState("");

  const cartItems = [];

  return (
    <header className="jewel-header">
      <div className="jewel-container jewel-nav">
        <nav className="jewel-links">
          <a href="#shop">Shop</a>
          <a href="#collections">Collections <span>⌄</span></a>
          <a href="#company">Company</a>
        </nav>

        <a href="/" className="jewel-logo">
          Veloura.
        </a>

        <div className="jewel-actions">
          <div className="lang-wrap">
            <button onClick={() => setLanguageOpen(!languageOpen)}>
              {selectedLang} <span>⌄</span>
            </button>

            {languageOpen && (
              <div className="lang-dropdown">
                {["EN", "BN", "FR"].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setSelectedLang(lang);
                      setLanguageOpen(false);
                    }}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button onClick={() => setSearchOpen(true)} aria-label="Search">
            <SearchIcon />
          </button>

          <button
            onClick={() => setCartOpen(true)}
            className="cart-btn"
            aria-label="Cart"
          >
            <BagIcon />
            <span>{cartItems.length}</span>
          </button>

          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-overlay" onClick={() => setMenuOpen(false)}>
          <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
            <button className="drawer-close" onClick={() => setMenuOpen(false)}>
              ×
            </button>

            <a href="#shop" onClick={() => setMenuOpen(false)}>Shop</a>
            <a href="#collections" onClick={() => setMenuOpen(false)}>Collections</a>
            <a href="#company" onClick={() => setMenuOpen(false)}>Company</a>
          </div>
        </div>
      )}

      {searchOpen && (
        <div className="search-overlay" onClick={() => setSearchOpen(false)}>
          <div className="search-box" onClick={(e) => e.stopPropagation()}>
            <button className="search-close" onClick={() => setSearchOpen(false)}>
              ×
            </button>

            <h3>Search Products</h3>

            <input
              type="text"
              placeholder="Search products..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              autoFocus
            />

            <p className="empty-text">
              Products will appear here after product section is added.
            </p>
          </div>
        </div>
      )}

      {cartOpen && (
        <div className="cart-overlay" onClick={() => setCartOpen(false)}>
          <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
            <button className="cart-close" onClick={() => setCartOpen(false)}>
              ×
            </button>

            <h3>Your Cart</h3>

            <p className="empty-text">
              Your cart is empty. Products will be connected later.
            </p>
          </div>
        </div>
      )}
    </header>
  );
}

function SearchIcon() {
  return (
    <svg width="23" height="23" viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
      <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg width="23" height="23" viewBox="0 0 24 24" fill="none">
      <path
        d="M7 8H17L18 21H6L7 8Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M9 8C9 5.8 10.2 4 12 4C13.8 4 15 5.8 15 8"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}