import { Link } from "react-router-dom"

export default function NavHeader() {
  return (
    <div className="nav-header">
      <Link to="/">
        <h1>Mediclone</h1>
      </Link>

      <div className="nav-icon">
        <div>Log In</div>
        <Link to="/quote">
          <div>Basket</div>
        </Link>
        <Link to="/dashboard">
          <div>Account</div>
        </Link>
      </div>
    </div>
  )
}
