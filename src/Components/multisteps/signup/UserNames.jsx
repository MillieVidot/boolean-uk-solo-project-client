import useFormStore from "../../../Hooks/formStore"

export default function UserNames({ Move, handleChange }) {
  const newUser = useFormStore(store => store.newUser)

  const { firstName, lastName } = newUser

  return (
    <div className="firstName-step">
      <label>
        <h3>Tell us your first name.</h3>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={handleChange("firstName")}
        />
      </label>
      <label>
        <h3>Tell us your last name.</h3>
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={handleChange("lastName")}
        />
      </label>
      <button onClick={() => Move("/dashboard")}>Back</button>
      <button onClick={() => Move("/dashboard/password")}>Next</button>
    </div>
  )
}
