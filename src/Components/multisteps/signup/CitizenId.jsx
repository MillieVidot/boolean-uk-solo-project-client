import useFormStore from "../../../Hooks/formStore"

export default function CitizenId({ Move, handleChange }) {
  const citizenId = useFormStore(store => store.newUser.citizenId)

  return (
    <div className="citizenId-step">
      <label>
        <h3>What is your Citizen ID?</h3>
        <input
          type="text"
          placeholder="AO123345"
          value={citizenId}
          onChange={handleChange("citizenId")}
        />
      </label>

      <button onClick={() => Move("/dashboard/usernames")}>Next</button>
    </div>
  )
}
