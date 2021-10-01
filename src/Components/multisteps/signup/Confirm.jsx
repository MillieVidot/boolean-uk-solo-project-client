import useStore from "../../../Hooks/store"

export default function Confirm({ Move }) {
  const newUser = useStore(store => store.newUser)
  const addNewUser = useStore(store => store.addNewUser)
  // const setCurrentUser = useStore(store => store.setCurrentUser)

  const { citizenId, firstName, lastName } = newUser

  function submitForm(e) {
    e.preventDefault()
    if (
      newUser.citizenId === "" ||
      newUser.firstName === "" ||
      newUser.lastName === "" ||
      newUser.password === ""
    ) {
      alert("Please check you have filled all fields")
      return
    }

    addNewUser()
    Move("/account")
  }

  return (
    <div className="success-step">
      <h3>Confirm Correct Details</h3>
      <div>
        <h3>CitizenId</h3>
        <p>{citizenId}</p>
      </div>
      <div>
        <h3>Full Name</h3>
        <p>
          {firstName} {lastName}
        </p>
      </div>

      <button
        className="backBtn"
        onClick={() => Move("/account/signup/password")}
      >
        Back
      </button>
      <button className="nextBtn" onClick={e => submitForm(e)}>
        Confirm
      </button>
    </div>
  )
}

{
  /* <button onClick={() => Move("/account/signup/signup")}>
<h4>CitizenId</h4>
<p>{citizenId}</p>
</button>
<button onClick={() => Move("/account/signup/usernames")}>
<h4>Full Name</h4>
<p>
  {firstName} {lastName}
</p>
</button> */
}
