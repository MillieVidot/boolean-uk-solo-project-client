import { Link } from "react-router-dom"
export default function NavMain() {
  return (
    <div className="nav-main">
      <ul className="nav-list">
        <li>
          <Link to="/assets">Assets</Link>
        </li>
        <li>
          <Link to="/packages">Packages</Link>
        </li>
        {/* <li>
          <Link to="/cosmetic">Cosmetic</Link>
        </li> */}
      </ul>
    </div>
  )
}
