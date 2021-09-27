import { Route, Switch } from "react-router-dom"
import "./App.css"
import HomePage from "./Pages/HomePage"
import PackagesPage from "./Pages/PackagesPage"
import AssetsPage from "./Pages/AssetsPage"
import Basket from "./Pages/Basket"
import NavMain from "./Components/NavMain"
import NavHeader from "./Components/NavHeader"
import Footer from "./Components/Footer"
import QuoteForm from "./Components/QuoteForm"
import Account from "./Pages/Account"
import Signup from "./Components/multisteps/signup/Signup"
import FaqPage from "./Pages/FaqPage"
import CosmeticPage from "./Pages/CosmeticPage"

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
            <Route path="/basket" exact>
              <Basket />
            </Route>
            <Route path="/quote" exact>
              <QuoteForm />
            </Route>
            <Route path="/account" exact>
              <Account />
            </Route>
            <Route path="/account/signup">
              <Signup />
            </Route>
            <Route path="/cosmetic" exact>
              <CosmeticPage />
            </Route>
            <Route path="/faq" exact>
              <FaqPage />
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
