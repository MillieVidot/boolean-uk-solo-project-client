import React from "react"

export default function CitizenId({ nextStep, handleChange, values }) {
  // for continue event listener
  const Continue = e => {
    e.preventDefault()
    nextStep()
  }

  return (
    <div className="citizenId-step">
      <h1>Create Account</h1>

      <label>
        <h3>What is your Citizen ID?</h3>
        <input
          type="text"
          placeholder="AO123345"
          value={values.citizenId}
          onChange={handleChange("citizenId")}
        />
      </label>
    </div>
  )
}
