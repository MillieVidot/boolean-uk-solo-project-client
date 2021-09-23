import useStore from "../../../Hooks/store"
// import { useHistory } from "react-router"

export default function Success({ Move }) {
  const firstName = useStore(store => store.newUser.firstName)

  // const history = useHistory()
  // const Next = path => {
  //   history.push(path)
  // }

  return (
    <div className="success-step">
      <h1>Success!</h1>

      <h3>Welcome to Mediclone {firstName} </h3>
      <p>Let's get you some cover!</p>

      <button onClick={() => Move("/dashboard")}>Close</button>
    </div>
  )
}
