import hero1 from "../assets/hero1.jpg"
import trustpilot from "../assets/trustpilot.png"
// const hero1 = require("../assets/hero1")

export default function HomePage() {
  return (
    <div className="homepage">
      <img className="hero" src={hero1} alt="hero" />
      {/* <h2>Save today with this package</h2> */}
      <img className="trust" src={trustpilot} alt="hero" />
    </div>
  )
}
