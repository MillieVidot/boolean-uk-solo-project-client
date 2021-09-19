import { Link } from "react-router-dom"
export default function NavMain() {
  return (
    <div className="nav-main">
      <ul className="nav-list wrapper">
        <li>
          <button>
            <Link to="/assets">Assets</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to="/packages">Packages</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to="#">Cosmetic</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to="#">FAQ</Link>
          </button>
        </li>
      </ul>
    </div>
  )
}
