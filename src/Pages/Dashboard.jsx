import PolicyCard from "../Components/PolicyCard"
import QuoteCard from "../Components/QuoteCard"

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Hi Caroline</h1>
      <h2>Active Policies</h2>
      <ul>
        <li>
          <PolicyCard />
        </li>
      </ul>
      <h2>Past Policies</h2>
      <ul>
        <li>
          <PolicyCard />
        </li>
      </ul>
      <h2>Quotes</h2>
      <ul>
        <li>
          <QuoteCard />
        </li>
      </ul>
    </div>
  )
}
