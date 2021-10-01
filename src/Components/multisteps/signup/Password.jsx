import useStore from "../../../Hooks/store"

export default function Password({ Move, handleChange }) {
  const password = useStore(store => store.newUser.password)

  return (
    <div className="password-step">
      <label>
        <h3>Choose a Password</h3>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleChange("password")}
          required
        />
      </label>
      <button
        className="backBtn"
        onClick={() => Move("/account/signup/usernames")}
      >
        Back
      </button>
      <button
        className="nextBtn"
        onClick={() => Move("/account/signup/confirm")}
      >
        Next
      </button>
    </div>
  )
}
