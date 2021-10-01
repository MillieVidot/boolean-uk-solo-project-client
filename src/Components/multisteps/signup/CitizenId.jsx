import useStore from "../../../Hooks/store"

export default function CitizenId({ Move, handleChange }) {
  const citizenId = useStore(store => store.newUser.citizenId)

  return (
    <div className="citizenId-step">
      <label>
        <h3>Enter your Citizen ID</h3>
        <input
          type="text"
          placeholder="AO123345"
          value={citizenId}
          onChange={handleChange("citizenId")}
          required
        />
      </label>

      <button
        className="nextBtn"
        onClick={() => Move("/account/signup/usernames")}
      >
        Next
      </button>
    </div>
  )
}
