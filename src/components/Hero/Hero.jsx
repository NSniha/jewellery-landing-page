import "./Hero.css";
import heroMain from "../../assets/images/hero-main.jpg";
import heroCardOne from "../../assets/images/hero-card-1.jpg";
import heroCardTwo from "../../assets/images/hero-card-2.jpg";

export default function Hero() {
  return (
    <section className="vel-hero">
      <div className="vel-hero-container">
        <div className="vel-hero-main">
          <img src={heroMain} alt="Handcrafted jewelry" />
          <div className="vel-main-overlay"></div>

          <p className="vel-hero-note">
            The brilliance of artisan-crafted <br />
            fine jewelry, where each piece tells <br />
            a story of legacy, luxury, and love.
            <span></span>
          </p>

          <h1>
            <em>Experience</em> The Elegance Of <br />
            Handcrafted <em>Jewelry</em>
          </h1>

          <span className="vel-spark vel-spark-left">✦</span>
          <span className="vel-spark vel-spark-right">✦</span>

          <a href="#collections" className="vel-learn">
            Learn More <ArrowIcon />
          </a>
        </div>

        <div className="vel-hero-grid">
          <div className="vel-hero-card">
            <img src={heroCardOne} alt="Pearl jewelry collection" />
            <div className="vel-card-overlay light-overlay"></div>

            <div className="vel-card-content">
              <p>
                Every piece tells a story of beauty, <br />
                strength, and timeless elegance.
              </p>
              <a href="#shop">Learn More <ArrowIcon /></a>
            </div>
          </div>

          <div className="vel-hero-card">
            <img src={heroCardTwo} alt="Luxury jewelry detail" />
            <div className="vel-card-overlay dark-overlay"></div>

            <div className="vel-card-content">
              <p>
                discover jewelry that reflects your <br />
                style and celebrates your moment.
              </p>
              <a href="#shop">Learn More <ArrowIcon /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 34 18" width="34" height="18" fill="none">
      <path d="M1 9H30" stroke="currentColor" strokeWidth="1.25" />
      <path d="M23 2L30 9L23 16" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}