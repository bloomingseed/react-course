import "./Hero.css";
import imagesGrid from "./../images/images_grid.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="center-container">
        <img src={imagesGrid} alt="Images grid" />
      </div>
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts-all
        without leaving home.
      </p>
    </section>
  );
}
