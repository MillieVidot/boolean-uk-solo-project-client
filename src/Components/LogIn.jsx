import React, { useState } from "react"
import useStore from "../Hooks/store"
// import { useHistory } from "react-router"
import { Link } from "react-router-dom"

export default function LogIn() {
  const initialUserInput = {
    citizenId: "",
    password: "",
  }
  const logIn = useStore(store => store.logIn)
  const [userInput, setUserInput] = useState(initialUserInput)

  const handleSubmit = e => {
    e.preventDefault()
    logIn(userInput)
    setUserInput(initialUserInput)
  }

  const handleChange = input => e => {
    setUserInput({ ...userInput, [input]: e.target.value })
  }

  // Account/Dashboard button should take you to log in page if not logged in.
  // Option to sign up or log in
  // After confirming details user is logged in
  //            - thus the dashboard should apear as per first query.

  return (
    <div className="createAccount-form wrapper">
      {/* <Switch> */}
      {/* <Route path="/dashboard/login" exact> */}
      <h1>Log In</h1>
      <form onSubmit={e => handleSubmit(e)}>
        <label>
          <h3>What is your Citizen ID?</h3>
          <input
            type="text"
            placeholder="AO123345"
            value={userInput.citizenId}
            onChange={handleChange("citizenId")}
          />
        </label>
        <label>
          <h3>Choose a password</h3>
          <input
            type="password"
            placeholder="Password"
            value={userInput.password}
            onChange={handleChange("password")}
          />
        </label>
        <button type="submit">Enter</button>
      </form>
      <Link to="/account/signup">or Create New Account</Link>
      {/* <button onClick={() => Move("/account/signup")}>
        or Create New Account
      </button> */}
      {/* </Route> */}
      {/* <Route path="/dashboard/signup" exact>
          <Signup />
        </Route> */}
      {/* </Switch> */}
    </div>
  )
}
