import hero1 from "../assets/hero1.jpg"
// const hero1 = require("../assets/hero1")

export default function HomePage() {
  return (
    <div className="homepage">
      <img className="hero" src={hero1} alt="hero-image" />
      <p>Save today with this package</p>
    </div>
  )
}
