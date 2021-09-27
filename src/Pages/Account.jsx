import React from "react"
import useStore from "../Hooks/store"
import Dashboard from "./Dashboard"
import LogIn from "../Components/LogIn"

export default function Account() {
  const currentUser = useStore(store => store.currentUser)

  return <div>{currentUser.firstName === "" ? <LogIn /> : <Dashboard />}</div>
}
