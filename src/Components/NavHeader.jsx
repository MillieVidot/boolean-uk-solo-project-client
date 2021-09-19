import { Link } from "react-router-dom"
import account from "../assets/account.png"
import quote from "../assets/quote.png"

export default function NavHeader() {
  return (
    <div className="wrapper">
      <div className="nav-header">
        <Link to="/">
          <h1>Mediclone</h1>
        </Link>

        <div className="nav-icon">
          <Link to="/quote">
            <img className="icon" src={quote} alt="Quote" />
          </Link>
          <Link to="/dashboard">
            <img className="icon" src={account} alt="Account" />
          </Link>
        </div>
      </div>
    </div>
  )
}
