import { useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Categories from "./components/Categories/Categories";
import StoryDetail from "./components/StoryDetail/StoryDetail";
import Products from "./components/Products/Products";
import Testimonials from "./components/Testimonials/Testimonials";
import FAQ from "./components/FAQ/FAQ";
import { products } from "./data/products";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const removeFromCart = (product) => {
    setCartItems((prev) => {
      const index = prev.findIndex((item) => item.id === product.id);

      if (index === -1) return prev;

      return prev.filter((_, itemIndex) => itemIndex !== index);
    });
  };

  const addToWishlist = (product) => {
    setWishlistItems((prev) => {
      const exists = prev.some((item) => item.id === product.id);

      if (exists) return prev;

      return [...prev, product];
    });
  };

  const removeFromWishlist = (product) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== product.id));
  };

  return (
    <>
      <Header
        products={products}
        cartItems={cartItems}
        wishlistItems={wishlistItems}
        onAddToCart={addToCart}
        onRemoveFromCart={removeFromCart}
        onAddToWishlist={addToWishlist}
        onRemoveFromWishlist={removeFromWishlist}
      />

      <Hero />
      <Categories />
      <StoryDetail />

      <Products
        cartItems={cartItems}
        wishlistItems={wishlistItems}
        onAddToCart={addToCart}
        onAddToWishlist={addToWishlist}
        onRemoveFromWishlist={removeFromWishlist}
      />
      <Testimonials />
      <FAQ />
    </>
  );
}

export default App;