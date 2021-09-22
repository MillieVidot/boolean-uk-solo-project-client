import useFormStore from "../../../Hooks/formStore"

export default function Password({ Move, handleChange }) {
  const password = useFormStore(store => store.newUser.password)

  return (
    <div className="password-step">
      <h1>Create Account</h1>

      <label>
        <h3>Choose a password</h3>
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={handleChange("password")}
        />
      </label>
      <button onClick={() => Move("/dashboard/usernames")}>Back</button>
      <button onClick={() => Move("/dashboard/confirm")}>Next</button>
    </div>
  )
}
