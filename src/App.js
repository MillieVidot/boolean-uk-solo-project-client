import "./App.css"
import NavHeader from "./Components/NavHeader"
import HomePage from "./Pages/HomePage"
import { Route, Switch, Redirect } from "react-router-dom"
import Footer from "./Components/Footer"
import NavMain from "./Components/NavMain"
import PackagesPage from "./Pages/PackagesPage"
import AssetsPage from "./Pages/AssetsPage"
import Dashboard from "./Pages/Dashboard"

function App() {
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
            <Route path="/quote" exact>
              {/* < /> */}
            </Route>
            <Route path="/dashboard" exact>
              <Dashboard />
            </Route>

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
