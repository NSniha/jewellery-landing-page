import { useMemo, useState } from "react";
import "./Header.css";

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

  const isCartControlled = Boolean(onAddToCart || onRemoveFromCart);
  const isWishlistControlled = Boolean(onAddToWishlist || onRemoveFromWishlist);

  const activeCartItems = isCartControlled ? cartItems : localCart;
  const activeWishlistItems = isWishlistControlled
    ? wishlistItems
    : localWishlist;

  const searchableItems = products.length > 0 ? products : activeCartItems;

  const currentLanguage =
    languages.find((item) => item.code === lang) || languages[0];

  const filteredItems = searchableItems.filter((item) =>
    item.name?.toLowerCase().includes(searchText.toLowerCase())
  );

  const groupedCartItems = useMemo(() => {
    const map = new Map();

    activeCartItems.forEach((item) => {
      const key = item.id || item.name;

      if (!map.has(key)) {
        map.set(key, {
          ...item,
          key,
          qty: 1,
        });
      } else {
        const existingItem = map.get(key);
        existingItem.qty += 1;
      }
    });

    return Array.from(map.values());
  }, [activeCartItems]);

  const subtotal = groupedCartItems.reduce(
    (sum, item) => sum + Number(item.price || 0) * item.qty,
    0
  );

  const delivery = subtotal > 0 ? 0 : 0;
  const total = subtotal + delivery;

  const formatPrice = (value) => `$${Number(value || 0).toFixed(2)}`;

  const isWishlisted = (product) => {
    return activeWishlistItems.some(
      (item) => item.id === product.id || item.name === product.name
    );
  };

  const closeAllPanels = () => {
    setSearchOpen(false);
    setCartOpen(false);
    setWishlistOpen(false);
    setMenuOpen(false);
    setLangOpen(false);
  };

  const scrollToShop = () => {
    closeAllPanels();

    setTimeout(() => {
      document.querySelector("#shop")?.scrollIntoView({ behavior: "smooth" });
    }, 80);
  };

  const handleAddToCart = (product) => {
    if (!product) return;

    if (onAddToCart) {
      onAddToCart(product);
    } else {
      setLocalCart((prev) => [...prev, product]);
    }

    setSearchOpen(false);
    setWishlistOpen(false);
    setCartOpen(true);
  };

  const handleDecreaseCart = (product) => {
    if (onRemoveFromCart) {
      onRemoveFromCart(product);
    } else {
      setLocalCart((prev) => {
        const removeIndex = prev.findIndex(
          (item) => item.id === product.id || item.name === product.name
        );

        if (removeIndex === -1) return prev;

        return prev.filter((_, index) => index !== removeIndex);
      });
    }
  };

  const handleRemoveCartGroup = (product) => {
    if (onRemoveFromCart) {
      const sameItems = activeCartItems.filter(
        (item) => item.id === product.id || item.name === product.name
      );

      sameItems.forEach((item) => onRemoveFromCart(item));
    } else {
      setLocalCart((prev) =>
        prev.filter(
          (item) => item.id !== product.id && item.name !== product.name
        )
      );
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
    <header className="vel-header relative z-[100] h-[86px] w-full bg-[#ad8440] text-white max-[575px]:h-[76px]">
      <div className="vel-container h-full">
        <div className="grid h-full w-full grid-cols-[1fr_auto_1fr] items-center max-[991px]:grid-cols-[auto_1fr_auto]">
          <nav className="flex items-center gap-[42px] max-[1199px]:gap-[30px] max-[991px]:hidden">
            <a
              href="#shop"
              className="flex items-center gap-2 font-['Manrope'] text-[15px] text-white no-underline transition duration-300 hover:-translate-y-[1px] hover:opacity-80"
            >
              Shop
            </a>

            <a
              href="#collections"
              className="flex items-center gap-2 font-['Manrope'] text-[15px] text-white no-underline transition duration-300 hover:-translate-y-[1px] hover:opacity-80"
            >
              Collections
              <ion-icon name="chevron-down-outline"></ion-icon>
            </a>

            <a
              href="#company"
              className="flex items-center gap-2 font-['Manrope'] text-[15px] text-white no-underline transition duration-300 hover:-translate-y-[1px] hover:opacity-80"
            >
              Company
            </a>
          </nav>

          <a
            href="/"
            className="font-['Source_Serif_4'] text-[39px] font-medium italic leading-none tracking-[-1.2px] text-white no-underline max-[575px]:text-[31px]"
          >
            Veloura.
          </a>

          <div className="flex items-center gap-6 justify-self-end max-[1199px]:gap-[21px] max-[575px]:gap-[11px]">
            <div className="relative max-[575px]:hidden">
              <button
                className="flex h-[38px] cursor-pointer items-center gap-2 border-0 bg-transparent px-1 font-['Manrope'] text-[14px] font-semibold text-white"
                onClick={() => setLangOpen(!langOpen)}
                aria-label="Change language"
              >
                <img
                  src={currentLanguage.flag}
                  alt={currentLanguage.label}
                  className="h-[22px] w-[22px] rounded-full object-cover"
                />
                <span>{currentLanguage.code}</span>
                <ion-icon name="chevron-down-outline"></ion-icon>
              </button>

              {langOpen && (
                <div className="vel-anim-drop absolute right-[-8px] top-[47px] w-[190px] overflow-visible rounded-none bg-white text-[#17120d] shadow-[0_18px_45px_rgba(31,24,16,0.16)] before:absolute before:right-6 before:top-[-8px] before:h-4 before:w-4 before:rotate-45 before:bg-white">
                  {languages.map((item) => (
                    <button
                      key={item.code}
                      className="relative z-[1] flex h-[54px] w-full cursor-pointer items-center gap-[14px] border-0 border-b border-solid border-black/5 bg-white px-[18px] text-left font-['Manrope'] text-[14px] font-semibold text-[#4b433a] transition duration-300 last:border-b-0 hover:bg-[#fbf7f0]"
                      onClick={() => {
                        setLang(item.code);
                        setLangOpen(false);
                      }}
                    >
                      <span
                        className={`absolute left-0 top-0 h-full w-[3px] bg-[#ad8440] transition duration-300 ${
                          lang === item.code ? "opacity-100" : "opacity-0"
                        }`}
                      ></span>
                      <img
                        src={item.flag}
                        alt={item.label}
                        className="h-[26px] w-[26px] rounded-full object-cover"
                      />
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <HeaderIconButton
              label="Search"
              icon="search-outline"
              onClick={() => setSearchOpen(true)}
            />

            <HeaderIconButton
              label="Wishlist"
              icon="heart-outline"
              count={activeWishlistItems.length}
              onClick={() => setWishlistOpen(true)}
            />

            <HeaderIconButton
              label="Cart"
              icon="bag-outline"
              count={activeCartItems.length}
              onClick={() => setCartOpen(true)}
            />

            <button
              className="vel-header-action hidden h-[34px] w-[34px] cursor-pointer place-items-center border-0 bg-transparent p-0 text-white max-[991px]:grid"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <ion-icon name="menu-outline"></ion-icon>
            </button>
          </div>
        </div>
      </div>

      {searchOpen && (
        <SearchPanel
          searchText={searchText}
          setSearchText={setSearchText}
          setSearchOpen={setSearchOpen}
          searchableItems={searchableItems}
          filteredItems={filteredItems}
          isWishlisted={isWishlisted}
          handleToggleWishlist={handleToggleWishlist}
          handleAddToCart={handleAddToCart}
          formatPrice={formatPrice}
        />
      )}

      {menuOpen && <MobileMenu setMenuOpen={setMenuOpen} />}

      {wishlistOpen && (
        <div
          className="vel-anim-layer fixed inset-0 z-[300] flex justify-end bg-[rgba(18,14,10,0.48)] backdrop-blur-lg"
          onClick={() => setWishlistOpen(false)}
        >
          <WishlistDrawer
            items={activeWishlistItems}
            onClose={() => setWishlistOpen(false)}
            onAddToCart={handleAddToCart}
            onRemove={handleToggleWishlist}
            formatPrice={formatPrice}
          />
        </div>
      )}

      {cartOpen && (
        <div
          className="vel-anim-layer fixed inset-0 z-[300] flex justify-end bg-[rgba(18,14,10,0.48)] backdrop-blur-lg"
          onClick={() => setCartOpen(false)}
        >
          <CartDrawer
            items={groupedCartItems}
            subtotal={subtotal}
            delivery={delivery}
            total={total}
            onClose={() => setCartOpen(false)}
            onIncrease={handleAddToCart}
            onDecrease={handleDecreaseCart}
            onRemoveGroup={handleRemoveCartGroup}
            onContinueShopping={scrollToShop}
            formatPrice={formatPrice}
          />
        </div>
      )}
    </header>
  );
}

function HeaderIconButton({ label, icon, count, onClick }) {
  return (
    <button
      className="vel-header-action relative grid h-[35px] w-[35px] cursor-pointer place-items-center border-0 bg-transparent text-white transition duration-300 hover:-translate-y-0.5 hover:opacity-80 max-[575px]:h-[30px] max-[575px]:w-[30px]"
      onClick={onClick}
      aria-label={label}
    >
      <ion-icon name={icon}></ion-icon>

      {typeof count === "number" && (
        <span className="absolute right-[-7px] top-[-5px] grid h-[18px] w-[18px] place-items-center rounded-full bg-white text-[11px] font-extrabold text-[#ad8440]">
          {count}
        </span>
      )}
    </button>
  );
}

function SearchPanel({
  searchText,
  setSearchText,
  setSearchOpen,
  searchableItems,
  filteredItems,
  isWishlisted,
  handleToggleWishlist,
  handleAddToCart,
  formatPrice,
}) {
  return (
    <div
      className="vel-anim-layer fixed inset-x-0 bottom-auto top-[86px] z-[260] min-h-[calc(100dvh_-_86px)] bg-[rgba(18,14,10,0.18)] backdrop-blur-[2px] max-[575px]:top-[76px] max-[575px]:min-h-[calc(100dvh_-_76px)]"
      onClick={() => setSearchOpen(false)}
    >
      <div
        className="vel-search-panel-shell vel-scrollbar vel-anim-search max-h-[min(610px,calc(100dvh_-_110px))] w-[min(700px,calc(100%_-_30px))] overflow-y-auto bg-white text-[#17120d] shadow-[0_22px_60px_rgba(0,0,0,0.18)] max-[575px]:mx-auto max-[575px]:max-h-[calc(100dvh_-_92px)] max-[575px]:w-[calc(100%_-_20px)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid h-14 grid-cols-[42px_1fr_40px_96px] items-center border-b border-[#ece7df] max-[575px]:grid-cols-[36px_1fr_34px_76px]">
          <span className="ml-4 grid place-items-center text-[#ad8440]">
            <ion-icon name="search-outline"></ion-icon>
          </span>

          <input
            type="text"
            placeholder="Search jewelry..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            autoFocus
            className="h-full w-full border-0 bg-transparent font-['Manrope'] text-[14px] text-[#17120d] outline-none"
          />

          <button
            className="grid h-full cursor-pointer place-items-center border-0 bg-transparent text-[#777]"
            onClick={() => setSearchText("")}
            aria-label="Clear search"
          >
            <span className="text-[24px] leading-none">×</span>
          </button>

          <button className="h-full w-full cursor-pointer border-0 bg-[#ad8440] font-['Manrope'] text-[13px] font-extrabold text-white max-[575px]:text-[12px]">
            Search
          </button>
        </div>

        <div className="flex flex-wrap gap-2 border-b border-[#ece7df] px-4 py-[11px]">
          {["Ring", "Necklace", "Bracelet", "Earrings"].map((tag) => (
            <button
              key={tag}
              onClick={() => setSearchText(tag.toLowerCase())}
              className="cursor-pointer rounded-none border border-[#ad8440]/15 bg-[#f8f1e7] px-[11px] py-1.5 font-['Manrope'] text-[12px] text-[#5f5549] transition duration-300 hover:bg-[#ad8440] hover:text-white"
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="bg-white">
          {searchableItems.length === 0 ? (
            <EmptyState
              icon="sparkles-outline"
              title="No products connected."
              text="Products will appear here after the product section is connected."
            />
          ) : filteredItems.length > 0 ? (
            filteredItems.slice(0, 6).map((item, index) => (
              <div
                className="vel-anim-item grid min-h-[90px] grid-cols-[58px_1fr_auto_42px_74px] items-center gap-[14px] border-b border-[#ece7df] bg-white px-[14px] py-3 transition duration-300 hover:bg-[#fbf7f0] max-[575px]:grid-cols-[50px_1fr_38px_60px] max-[575px]:gap-[10px]"
                key={item.id || index}
              >
                <div className="grid h-[60px] w-[52px] place-items-center overflow-hidden bg-[#f7efe4] max-[575px]:h-[56px] max-[575px]:w-[48px]">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <ion-icon name="diamond-outline"></ion-icon>
                  )}
                </div>

                <div className="min-w-0">
                  <h4 className="mb-[5px] mt-0 truncate font-['Manrope'] text-[14px] font-extrabold text-[#17120d]">
                    {item.name}
                  </h4>

                  <span className="inline-block rounded-none bg-[#f8f1e7] px-2 py-[3px] font-['Manrope'] text-[11px] font-extrabold text-[#ad8440]">
                    Luxury Jewelry
                  </span>
                </div>

                <div className="flex items-center justify-end gap-2 whitespace-nowrap max-[575px]:hidden">
                  {item.oldPrice && (
                    <del className="font-['Manrope'] text-[12px] text-[#92877b]">
                      {formatPrice(item.oldPrice)}
                    </del>
                  )}

                  {item.price && (
                    <strong className="font-['Manrope'] text-[14px] font-extrabold text-[#17120d]">
                      {formatPrice(item.price)}
                    </strong>
                  )}
                </div>

                <button
                  className={`grid h-[38px] w-[38px] cursor-pointer place-items-center rounded-none border-0 transition duration-300 ${
                    isWishlisted(item)
                      ? "bg-[#ad8440] text-white"
                      : "bg-[#f8f1e7] text-[#ad8440] hover:bg-[#ad8440] hover:text-white"
                  }`}
                  onClick={() => handleToggleWishlist(item)}
                  aria-label="Add to wishlist"
                >
                  <ion-icon
                    name={isWishlisted(item) ? "heart" : "heart-outline"}
                  ></ion-icon>
                </button>

                <button
                  className="h-9 w-[70px] cursor-pointer rounded-none border-0 bg-[#ad8440] font-['Manrope'] text-[13px] font-extrabold text-white transition duration-300 hover:bg-[#17120d] max-[575px]:w-[58px]"
                  onClick={() => handleAddToCart(item)}
                >
                  Add
                </button>
              </div>
            ))
          ) : (
            <EmptyState
              icon="search-outline"
              title="No product found."
              text="Try searching for another jewelry category."
            />
          )}
        </div>

        <button
          className="flex h-11 w-full cursor-pointer items-center justify-end gap-2 border-0 border-t border-[#ece7df] bg-white pr-[18px] font-['Manrope'] text-[13px] text-[#5f5549] transition duration-300 hover:text-[#ad8440]"
          onClick={() => setSearchOpen(false)}
        >
          See all
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
}

function MobileMenu({ setMenuOpen }) {
  return (
    <div
      className="vel-anim-layer fixed inset-0 z-[300] flex justify-end bg-[rgba(18,14,10,0.48)] backdrop-blur-lg"
      onClick={() => setMenuOpen(false)}
    >
      <aside
        className="vel-scrollbar vel-anim-drawer flex h-[100dvh] w-[min(410px,88vw)] flex-col overflow-y-auto bg-white p-7 text-[#17120d] shadow-[-30px_0_80px_rgba(0,0,0,0.22)] before:absolute before:inset-x-0 before:top-0 before:h-[7px] before:bg-[#ad8440] max-[575px]:w-full max-[575px]:p-[22px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mt-3 flex shrink-0 items-center justify-between">
          <a
            href="/"
            className="font-['Source_Serif_4'] text-[34px] font-medium italic leading-none tracking-[-1px] text-[#17120d] no-underline max-[575px]:text-[30px]"
          >
            Veloura.
          </a>

          <button
            className="grid h-[42px] w-[42px] cursor-pointer place-items-center rounded-none border border-[#ad8440]/20 bg-white text-[#17120d] transition duration-300 hover:bg-[#ad8440] hover:text-white"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <span className="text-[30px] leading-none">×</span>
          </button>
        </div>

        <div className="mt-12 shrink-0 border-b border-[#ad8440]/20 pb-6 max-[575px]:mt-9">
          <span className="mb-3 inline-block font-['Manrope'] text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#ad8440]">
            Menu
          </span>

          <p className="m-0 max-w-[310px] font-['Manrope'] text-[15px] leading-[1.65] text-[#5f5549]">
            Explore timeless jewelry collections crafted for your moment.
          </p>
        </div>

        <nav className="mt-8 flex shrink-0 flex-col gap-[14px]">
          {[
            ["01", "Shop", "#shop"],
            ["02", "Collections", "#collections"],
            ["03", "Company", "#company"],
          ].map(([number, label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="vel-anim-item grid min-h-[68px] grid-cols-[42px_1fr_auto] items-center rounded-none border border-[#ad8440]/15 bg-white px-[18px] text-[#17120d] no-underline transition duration-300 hover:-translate-x-1.5 hover:border-[#ad8440] hover:bg-[#ad8440] hover:text-white max-[575px]:min-h-16"
            >
              <span className="font-['Manrope'] text-[12px] font-extrabold text-[#ad8440]">
                {number}
              </span>

              <strong className="font-['Manrope'] text-[17px] font-bold">
                {label}
              </strong>

              <ion-icon name="arrow-forward-outline"></ion-icon>
            </a>
          ))}
        </nav>

        <div className="mt-auto shrink-0 pb-3 pt-8">
          <a
            href="#collections"
            onClick={() => setMenuOpen(false)}
            className="flex h-[54px] w-full items-center justify-center gap-2 rounded-none bg-[#17120d] font-['Manrope'] text-[14px] font-extrabold text-white no-underline transition duration-300 hover:bg-[#ad8440]"
          >
            View Collections
            <ion-icon name="sparkles-outline"></ion-icon>
          </a>
        </div>
      </aside>
    </div>
  );
}

function EmptyState({ icon, title, text }) {
  return (
    <div className="grid place-items-center gap-3 bg-white px-5 py-9 text-center font-['Manrope'] text-[14px] leading-relaxed text-[#777]">
      <span className="grid h-11 w-11 place-items-center bg-[#f8f1e7] text-[#ad8440]">
        <ion-icon name={icon}></ion-icon>
      </span>

      <div>
        <p className="m-0 font-extrabold text-[#17120d]">{title}</p>
        <small className="mt-1 block text-[13px] leading-relaxed text-[#74685d]">
          {text}
        </small>
      </div>
    </div>
  );
}

function WishlistDrawer({
  items,
  onClose,
  onAddToCart,
  onRemove,
  formatPrice,
}) {
  return (
    <aside
      className="vel-scrollbar vel-anim-drawer h-[100dvh] w-[min(460px,92vw)] overflow-y-auto bg-white px-[30px] pb-[34px] pt-[86px] text-[#17120d] shadow-[-30px_0_80px_rgba(0,0,0,0.22)] max-[575px]:w-full max-[575px]:px-5 max-[575px]:pt-[82px]"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="absolute right-6 top-[22px] grid h-[42px] w-[42px] cursor-pointer place-items-center rounded-none border border-[#ad8440]/20 bg-white text-[#17120d] transition duration-300 hover:bg-[#ad8440] hover:text-white"
        onClick={onClose}
        aria-label="Close wishlist"
      >
        <span className="text-[30px] leading-none">×</span>
      </button>

      <div className="mb-6">
        <span className="mb-3 inline-block font-['Manrope'] text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#ad8440]">
          Saved Items
        </span>

        <h3 className="m-0 font-['Source_Serif_4'] text-[40px] font-medium leading-none text-[#17120d] max-[575px]:text-[34px]">
          Your Wishlist
        </h3>

        <p className="mt-3 font-['Manrope'] text-[14px] leading-relaxed text-[#74685d]">
          Keep your favorite Veloura pieces in one refined place.
        </p>
      </div>

      {items.length === 0 ? (
        <div className="grid min-h-[290px] place-items-center border border-dashed border-[#ad8440]/30 bg-white p-8 text-center">
          <div>
            <div className="mx-auto mb-4 grid h-[72px] w-[72px] place-items-center bg-[#f8f1e7] text-[#ad8440]">
              <ion-icon name="heart-outline"></ion-icon>
            </div>

            <p className="m-0 font-['Manrope'] text-[17px] font-extrabold text-[#17120d]">
              Your wishlist is empty.
            </p>

            <small className="mt-2 block font-['Manrope'] text-[14px] leading-relaxed text-[#74685d]">
              Save your favorite jewelry pieces and return to them anytime.
            </small>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-[14px]">
          {items.map((item, index) => (
            <div
              className="vel-anim-item grid min-h-[92px] grid-cols-[68px_1fr_40px_40px] items-center gap-3 border border-[#ad8440]/15 bg-white p-3 max-[575px]:grid-cols-[60px_1fr_38px]"
              key={item.id || index}
            >
              <div className="grid h-[68px] w-[68px] place-items-center overflow-hidden bg-[#f8f1e7] max-[575px]:h-[60px] max-[575px]:w-[60px]">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <ion-icon name="diamond-outline"></ion-icon>
                )}
              </div>

              <div className="min-w-0">
                <h4 className="mb-[5px] mt-0 truncate font-['Manrope'] text-[15px] font-extrabold text-[#17120d]">
                  {item.name}
                </h4>

                {item.price && (
                  <span className="font-['Manrope'] text-[14px] font-extrabold text-[#ad8440]">
                    {formatPrice(item.price)}
                  </span>
                )}
              </div>

              <button
                className="grid h-[38px] w-[38px] cursor-pointer place-items-center rounded-none border-0 bg-[#f8f1e7] text-[#ad8440] transition duration-300 hover:bg-[#ad8440] hover:text-white max-[575px]:hidden"
                onClick={() => onAddToCart(item)}
                aria-label="Add wishlist item to cart"
              >
                <ion-icon name="bag-outline"></ion-icon>
              </button>

              <button
                className="grid h-[38px] w-[38px] cursor-pointer place-items-center rounded-none border-0 bg-[#fff3f0] text-[#b94a35] transition duration-300 hover:bg-[#b94a35] hover:text-white"
                onClick={() => onRemove(item)}
                aria-label="Remove wishlist item"
              >
                <span className="text-[26px] leading-none">×</span>
              </button>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
}

function CartDrawer({
  items,
  subtotal,
  delivery,
  total,
  onClose,
  onIncrease,
  onDecrease,
  onRemoveGroup,
  onContinueShopping,
  formatPrice,
}) {
  return (
    <aside
      className="vel-scrollbar vel-anim-drawer flex h-[100dvh] w-[min(500px,100vw)] flex-col overflow-y-auto bg-white text-[#17120d] shadow-[-30px_0_80px_rgba(0,0,0,0.22)]"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="shrink-0 border-b border-[#eadfce] bg-white px-7 pb-6 pt-6 max-[575px]:px-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="mb-2 inline-block font-['Manrope'] text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#ad8440]">
              Shopping Bag
            </span>

            <h3 className="m-0 font-['Source_Serif_4'] text-[40px] font-medium leading-none text-[#17120d] max-[575px]:text-[34px]">
              Your Cart
            </h3>
          </div>

          <button
            className="grid h-[42px] w-[42px] cursor-pointer place-items-center rounded-none border border-[#ad8440]/20 bg-white text-[#17120d] transition duration-300 hover:bg-[#ad8440] hover:text-white"
            onClick={onClose}
            aria-label="Close cart"
          >
            <span className="text-[30px] leading-none">×</span>
          </button>
        </div>
      </div>

      {items.length === 0 ? (
        <div className="mx-7 mt-7 grid min-h-[330px] place-items-center border border-dashed border-[#ad8440]/30 bg-white p-8 text-center max-[575px]:mx-5">
          <div>
            <div className="mx-auto mb-4 grid h-[74px] w-[74px] place-items-center bg-[#f8f1e7] text-[#ad8440]">
              <ion-icon name="bag-outline"></ion-icon>
            </div>

            <p className="m-0 font-['Manrope'] text-[18px] font-extrabold text-[#17120d]">
              Your cart is empty.
            </p>

            <small className="mt-2 block font-['Manrope'] text-[14px] leading-relaxed text-[#74685d]">
              Add your favorite jewelry pieces and review them here before
              checkout.
            </small>

            <button
              onClick={onContinueShopping}
              className="mt-7 h-12 cursor-pointer rounded-none border-0 bg-[#17120d] px-7 font-['Manrope'] text-[14px] font-extrabold text-white transition duration-300 hover:bg-[#ad8440]"
            >
              Start Shopping
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="vel-scrollbar flex flex-1 flex-col gap-4 overflow-y-auto bg-white px-7 py-6 pb-8 max-[575px]:px-5">
            {items.map((item) => (
              <div
                className="vel-anim-item border border-[#eadfce] bg-white p-3"
                key={item.key}
              >
                <div className="grid grid-cols-[88px_1fr] gap-4 max-[420px]:grid-cols-[72px_1fr] max-[420px]:gap-3">
                  <div className="grid h-[88px] w-[88px] place-items-center overflow-hidden bg-[#f8f7f5] max-[420px]:h-[72px] max-[420px]:w-[72px]">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <ion-icon name="diamond-outline"></ion-icon>
                    )}
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h4 className="m-0 truncate font-['Manrope'] text-[15px] font-extrabold text-[#17120d]">
                          {item.name}
                        </h4>

                        <span className="mt-1 block font-['Manrope'] text-[13px] font-bold text-[#ad8440]">
                          {formatPrice(item.price)}
                        </span>
                      </div>

                      <button
                        onClick={() => onRemoveGroup(item)}
                        className="grid h-9 w-9 shrink-0 cursor-pointer place-items-center rounded-none border-0 bg-[#fff3f0] text-[#b94a35] transition duration-300 hover:bg-[#b94a35] hover:text-white"
                        aria-label="Remove item"
                      >
                        <span className="text-[24px] leading-none">×</span>
                      </button>
                    </div>

                    <div className="mt-5 flex items-center justify-between gap-4 max-[420px]:flex-col max-[420px]:items-start">
                      <div className="grid h-10 grid-cols-[42px_44px_42px] border border-[#eadfce] bg-white">
                        <button
                          onClick={() => onDecrease(item)}
                          className="grid h-full w-full cursor-pointer place-items-center border-0 border-r border-[#eadfce] bg-white text-[22px] font-medium leading-none text-[#17120d] transition duration-300 hover:bg-[#f8f1e7]"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>

                        <span className="grid h-full w-full place-items-center bg-white font-['Manrope'] text-[14px] font-extrabold text-[#17120d]">
                          {item.qty}
                        </span>

                        <button
                          onClick={() => onIncrease(item)}
                          className="grid h-full w-full cursor-pointer place-items-center border-0 border-l border-[#eadfce] bg-white text-[22px] font-medium leading-none text-[#17120d] transition duration-300 hover:bg-[#f8f1e7]"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      <strong className="font-['Manrope'] text-[15px] font-extrabold text-[#17120d]">
                        {formatPrice(Number(item.price || 0) * item.qty)}
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="shrink-0 border-t border-[#eadfce] bg-white px-7 py-7 pb-9 max-[575px]:px-5">
            <div className="space-y-3">
              <div className="flex items-center justify-between font-['Manrope'] text-[14px] text-[#6f6256]">
                <span>Subtotal</span>

                <strong className="text-[#17120d]">
                  {formatPrice(subtotal)}
                </strong>
              </div>

              <div className="flex items-center justify-between font-['Manrope'] text-[14px] text-[#6f6256]">
                <span>Delivery</span>

                <strong className="text-[#17120d]">
                  {delivery === 0 ? "Free" : formatPrice(delivery)}
                </strong>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-[#eadfce] pt-5 font-['Manrope']">
                <span className="text-[16px] font-extrabold text-[#17120d]">
                  Total
                </span>

                <strong className="text-[22px] font-extrabold text-[#ad8440]">
                  {formatPrice(total)}
                </strong>
              </div>
            </div>

            <button className="mt-7 flex h-[52px] w-full cursor-pointer items-center justify-center gap-2 rounded-none border-0 bg-[#17120d] font-['Manrope'] text-[14px] font-extrabold text-white transition duration-300 hover:bg-[#ad8440]">
              Secure Checkout
              <span className="text-[24px] leading-none">→</span>
            </button>
          </div>
        </>
      )}
    </aside>
  );
}