import PolicyCard from "../Components/PolicyCard"
import QuoteForm from "../Components/QuoteForm"
import useStore from "../Hooks/store"
import { useEffect } from "react"

export default function Dashboard({ currentUser }) {
  const policiesData = useStore(store => store.policies)
  const getPolicies = useStore(store => store.getPolicies)

  useEffect(() => {
    getPolicies()
    console.log("policiesData:", policiesData)
  }, [])

  return (
    <div className="dashboard">
      <h1>Hi {currentUser}</h1>
      <h2>Active Policies</h2>
      <ul className="policy-list">
        {policiesData.map(policy => (
          <PolicyCard
            key={policy.id}
            userId={policy.userId}
            quoteNumber={policy.quoteNumber}
            startDate={policy.startDate.slice(0, 10)}
            endDate={policy.endDate.slice(0, 10)}
            cost={policy.cost}
            image={policy.image}
          />
        ))}
      </ul>
      <h2>Past Policies</h2>
      <ul>
        <li>
          <PolicyCard />
        </li>
      </ul>
    </div>
  )
}
