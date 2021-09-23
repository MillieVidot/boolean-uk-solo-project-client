import React from "react"
import useStore from "../Hooks/store"
import { Route, Switch } from "react-router-dom"
import Dashboard from "./Dashboard"
import LogIn from "../Components/LogIn"
import Signup from "../Components/multisteps/signup/Signup"

export default function Account() {
  const currentUser = useStore(store => store.currentUser)

  return (
    <div>
      <Switch>
        <Route path="/dashboard" exact>
          {currentUser.firstName === "" ? <LogIn /> : <Dashboard />}
        </Route>
        <Route path="/account/login" exact>
          <LogIn />
        </Route>
        <Route path="/account/signup" exact>
          <Signup />
        </Route>
      </Switch>
    </div>
  )
}

// {currentUser.firstName === "" ? <LogIn /> : <Dashboard />}
