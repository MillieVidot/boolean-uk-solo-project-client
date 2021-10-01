import useStore from "../../../Hooks/store"

export default function UserNames({ Move, handleChange }) {
  const newUser = useStore(store => store.newUser)

  const { firstName, lastName } = newUser

  return (
    <div className="firstName-step">
      <label>
        <h3>Enter First Name.</h3>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={handleChange("firstName")}
        />
      </label>
      <label>
        <h3>Enter Last Name.</h3>
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={handleChange("lastName")}
        />
      </label>
      <button className="backBtn" onClick={() => Move("/account/signup")}>
        Back
      </button>
      <button
        className="nextBtn"
        onClick={() => Move("/account/signup/password")}
      >
        Next
      </button>
    </div>
  )
}
