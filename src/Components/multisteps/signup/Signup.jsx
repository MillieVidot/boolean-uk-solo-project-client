import React from "react"
import CitizenId from "./CitizenId"
import Confirm from "./Confirm"
import Password from "./Password"
import Success from "./Success"
import UserNames from "./UserNames"
import useFormStore from "../../../Hooks/formStore"
import { Route, Switch } from "react-router-dom"
import { useHistory } from "react-router"

export default function Signup() {
  const handleNewUserChange = useFormStore(store => store.handleNewUserChange)
  // const addNewUser = useFormStore(store => store.addNewUser)

  const history = useHistory()
  const Move = path => {
    history.push(path)
  }

  // function submitForm(e) {
  //   e.preventDefault()
  //   addNewUser()
  //   Move("/dashboard/success")
  // }

  // Account/Dashboard button should take you to log in page if not logged in.
  // Option to sign up or log in
  // After confirming details user is logged in
  //            - thus the dashboard should apear as per first query.

  return (
    <form className="createAccount-form wrapper">
      <h1>Create Account</h1>
      <Switch>
        <Route path="/dashboard" exact>
          <CitizenId Move={Move} handleChange={handleNewUserChange} />
        </Route>
        <Route path="/dashboard/usernames" exact>
          <UserNames Move={Move} handleChange={handleNewUserChange} />
        </Route>
        <Route path="/dashboard/password" exact>
          <Password Move={Move} handleChange={handleNewUserChange} />
        </Route>
        <Route path="/dashboard/confirm" exact>
          <Confirm Move={Move} handleChange={handleNewUserChange} />
        </Route>
        {/* below route not needed? */}
        <Route path="/dashboard/success" exact>
          <Success Move={Move} />
        </Route>
      </Switch>
    </form>
  )
}

// // go back to previous step
// prevStep = () => {
//   const { step } = this.state
//   this.setState({ step: step - 1 })
// }

// // proceed to the next step
// nextStep = () => {
//   const { step } = this.state
//   this.setState({ step: step + 1 })
// }

// // Handle fields change
// handleChange = input => e => {
//   this.setState({ [input]: e.target.value })
// }
