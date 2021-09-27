import { Link } from "react-router-dom"
import account from "../assets/account.png"
import quote from "../assets/quote.png"

export default function NavHeader() {
  return (
    <div>
      <div className="nav-header wrapper">
        <Link to="/">
          <h1>Mediclone</h1>
        </Link>
        <Link to="/quote">
          <h3>Get a Quote</h3>
        </Link>

        {/* <div className="nav-icon"> */}
        <Link to="/basket">
          <img className="icon" src={quote} alt="Quote" />
        </Link>
        <Link to="/account">
          <img className="icon" src={account} alt="Account" />
        </Link>
        {/* </div> */}
      </div>
    </div>
  )
}
