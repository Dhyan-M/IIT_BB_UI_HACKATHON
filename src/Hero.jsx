import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__heading">Frontend Battle Ready</h1>
        <p className="hero__subheading">Built with React and Vite</p>
        <button className="hero__button" type="button">
          Start Building
        </button>
      </div>
    </section>
  );
}

export default Hero;