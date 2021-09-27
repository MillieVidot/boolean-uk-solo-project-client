import useStore from "../../../Hooks/store"

export default function Password({ Move, handleChange }) {
  const password = useStore(store => store.newUser.password)

  return (
    <div className="password-step">
      <label>
        <h3>Choose a password</h3>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleChange("password")}
        />
      </label>
      <button onClick={() => Move("/account/signup/usernames")}>Back</button>
      <button onClick={() => Move("/account/signup/confirm")}>Next</button>
    </div>
  )
}
