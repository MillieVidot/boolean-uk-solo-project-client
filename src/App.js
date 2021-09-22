import { Route, Switch } from "react-router-dom"
import useStore from "./Hooks/store"
import "./App.css"
import HomePage from "./Pages/HomePage"
import PackagesPage from "./Pages/PackagesPage"
import AssetsPage from "./Pages/AssetsPage"
import Dashboard from "./Pages/Dashboard"
import Basket from "./Pages/Basket"
import NavMain from "./Components/NavMain"
import Signup from "./Components/multisteps/signup/Signup"
import NavHeader from "./Components/NavHeader"
import Footer from "./Components/Footer"
import QuoteForm from "./Components/QuoteForm"

function App() {
  const currentUser = useStore(store => store.currentUser)
  return (
    <div className="App">
      <div className="container">
        <NavHeader />
        <NavMain />
        <div className="main wrapper">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/packages" exact>
              <PackagesPage />
            </Route>
            <Route path="/assets" exact>
              <AssetsPage />
            </Route>
            <Route path="/basket" exact>
              <Basket />
            </Route>
            <Route path="/quote" exact>
              <QuoteForm />
            </Route>
            <Route path="/dashboard">
              {currentUser === "" ? (
                <Signup />
              ) : (
                <Dashboard currentUser={currentUser} />
              )}
            </Route>
            {/* <Route path="/createaccount"></Route> */}

            {/* <Route path="/guest/profile" exact>
          {currentUser.role === "guest" ? (
            <GuestProfilePage />
          ) : (
            <LoadingPage />
          )}
        </Route>
        <Route path="*">
          <WrongTurn />
        </Route> */}
          </Switch>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
