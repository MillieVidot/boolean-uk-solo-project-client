import useFormStore from "../../../Hooks/formStore"
import useStore from "../../../Hooks/store"

export default function Confirm({ Move }) {
  const newUser = useFormStore(store => store.newUser)
  const addNewUser = useFormStore(store => store.addNewUser)
  const setCurrentUser = useStore(store => store.setCurrentUser)

  const { citizenId, firstName, lastName } = newUser

  function submitForm(e) {
    e.preventDefault()
    setCurrentUser(firstName, lastName)
    addNewUser()
    Move("/dashboard")
  }

  return (
    <div className="success-step">
      <h1>Create Account</h1>

      <h2>Check your information is correct</h2>
      <button>
        <h3>CitizenId</h3>
        <p>{citizenId}</p>
      </button>
      <button>
        <h3>Full Name</h3>
        <p>
          {firstName} {lastName}
        </p>
      </button>

      <button onClick={() => Move("/dashboard/password")}>Back</button>
      <button onClick={e => submitForm(e)}>Confirm Details</button>
    </div>
  )
}
