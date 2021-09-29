import useStore from "../Hooks/store"
import { useEffect, useState } from "react"
import { useHistory } from "react-router"

export default function Packages() {
  const BASE_URL = process.env.REACT_APP_API_URL
  const currentUser = useStore(store => store.currentUser)
  const cartItemsIds = useStore(store => store.cartItemsIds)
  const cartItems = useStore(store => store.cartItems)
  const refreshCartItems = useStore(store => store.refreshCartItems)
  const clearCartItemsIds = useStore(store => store.clearCartItemsIds)
  const setCartItems = useStore(store => store.setCartItems)
  const purchasePolicy = useStore(store => store.purchasePolicy)
  const cartTotal = useStore(store => store.cartTotal)

  const history = useHistory()

  function getCartItems() {
    cartItemsIds.forEach(item => {
      if (item.packageCat) {
        fetch(`${BASE_URL}/packages/${item.id}`)
          .then(res => res.json())
          .then(res => {
            if (res.error) {
              throw res.error
            }
            return res
          })
          .then(res => setCartItems(res))
      } else {
        fetch(`${BASE_URL}/assets/${item.id}`)
          .then(res => res.json())
          .then(res => {
            if (res.error) {
              throw res.error
            }
            return res
          })
          .then(res => setCartItems(res))
      }
    })
  }

  useEffect(() => {
    refreshCartItems()
    getCartItems()
  }, [])

  function buyQuote() {
    if (currentUser.firstName === "") {
      alert("Please log in first")
      history.push("/account")
    } else {
      purchasePolicy()
      history.push("/account")
    }
  }

  if (cartItems.length < 1) {
    return (
      <div className="assets-page wrapper">
        <h1>BASKET</h1>
        <h3>No assets selected...</h3>
      </div>
    )
  }

  return (
    <div className="assets-page wrapper">
      <h1>BASKET</h1>
      <div className="basket-quote">
        <h3>Review quote</h3>
        <ul>
          {cartItems.map(item => (
            <li key={cartItems.indexOf(item)} className="review-asset">
              <span>{item.name}</span>
              <span>{item.cost}</span>
            </li>
          ))}
        </ul>
        <span>Total £{cartTotal} p/a</span>
        <div className="btn-nav">
          <div className="cancel-btn" onClick={() => clearCartItemsIds()}>
            Clear quote
          </div>
          <div className="submit-btn" onClick={() => buyQuote()}>
            Buy
          </div>
        </div>
      </div>
    </div>
  )
}
