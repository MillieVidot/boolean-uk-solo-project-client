/* eslint-disable react-hooks/exhaustive-deps */
import PolicyCard from "../Components/PolicyCard"
import useStore from "../Hooks/store"
import { useEffect } from "react"

export default function Dashboard() {
  const currentUser = useStore(store => store.currentUser)
  const policiesData = useStore(store => store.policies)
  const getPoliciesForUser = useStore(store => store.getPoliciesForUser)
  const setCurrentUser = useStore(store => store.setCurrentUser)

  useEffect(() => {
    getPoliciesForUser()
    console.log("policiesData:", policiesData)
    console.log("currentUser:", currentUser)
  }, [])

  function logOut() {
    setCurrentUser({
      firstName: "",
      lastName: "",
      citizenId: "",
    })
  }

  return (
    <div className="dashboard">
      {/* <span>{currentUser.citizenId}</span> */}
      <h1>Hi {currentUser.firstName}</h1>
      <button onClick={() => logOut}>Log Out</button>
      <h2>Active Policies</h2>
      <ul className="policy-list">
        {policiesData.map(policy => (
          <PolicyCard
            key={policy.id}
            quoteNumber={policy.quoteNumber}
            startDate={policy.startDate.slice(0, 10)}
            endDate={policy.endDate.slice(0, 10)}
            cost={policy.cost}
            image={policy.image}
            // status={policy.status.stage}
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
