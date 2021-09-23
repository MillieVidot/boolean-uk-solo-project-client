import useStore from "../../../Hooks/store"

export default function Password({ Move, handleChange }) {
  const password = useStore(store => store.newUser.password)

  return (
    <div className="password-step">
      <h1>Create Account</h1>

      <label>
        <h3>Choose a password</h3>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleChange("password")}
        />
      </label>
      <button onClick={() => Move("/dashboard/signup/usernames")}>Back</button>
      <button onClick={() => Move("/dashboard/signup/confirm")}>Next</button>
    </div>
  )
}
