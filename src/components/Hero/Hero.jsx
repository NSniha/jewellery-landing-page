import "./Hero.css";
import heroImg from "../../assets/images/hero-jewellery.jpg";

export default function Hero() {
  return (
    <section className="jewel-hero">
      <div className="jewel-container">
        <div className="hero-main-card">
          <img src={heroImg} alt="Elegant handcrafted jewelry" />

          <div className="hero-overlay"></div>

          <p className="hero-top-text">
            The brilliance of artisan-crafted <br />
            fine jewelry, where each piece tells <br />
            a story of legacy, luxury, and love.
            <span></span>
          </p>

          <h1 className="font-serif4">
            <em>Experience</em> The Elegance Of <br />
            Handcrafted <em>Jewelry</em>
          </h1>

          <span className="spark spark-one">✦</span>
          <span className="spark spark-two">✦</span>

          <a href="#" className="hero-link">
            Learn More <span>→</span>
          </a>
        </div>

        <div className="hero-bottom-grid">
          <div className="hero-small-card image-card">
            <img src={heroImg} alt="Jewelry collection" />
            <div className="hero-overlay"></div>
            <div>
              <p>
                Every piece tells a story of beauty, <br />
                strength, and timeless elegance.
              </p>
              <a href="#">Learn More <span>→</span></a>
            </div>
          </div>

          <div className="hero-small-card black-card">
            <div>
              <p>
                discover jewelry that reflects your <br />
                style and celebrates your moment.
              </p>
              <a href="#">Learn More <span>→</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}