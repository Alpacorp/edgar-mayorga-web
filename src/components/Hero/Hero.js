import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container animate__animated animate__bounceInUp animate__delay-1">
        <h1>
          <span className="alternate">Edgar</span> Mayorga
        </h1>
        <h2>
          <span id="redText">¡</span>La fuerza mayorguista independiente
          <span id="redText">!</span>
        </h2>
      </div>
    </div>
  );
};

export default Hero;
