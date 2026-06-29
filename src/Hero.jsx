import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Single-origin coffee deep v sus small batch. Austin twitter handle
            freegan cred raw denim brunch farm-to-table, readymade pitchfork
            sustainable farm-to-table. Freegan cred raw denim brunch
            farm-to-table, readymade pitchfork sustainable farm-to-table.
            Single-origin coffee deep v sus small batch. Austin twitter handle
            freegan cred raw denim brunch farm-to-table, readymade pitchfork
            sustainable farm-to-table.
          </p>
        </div>
        <div className="img-cont">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
