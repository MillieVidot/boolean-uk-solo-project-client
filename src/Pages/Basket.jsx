import useStore from "../Hooks/store"
import { useEffect, useState } from "react"

export default function Packages() {
  const cartItemsIds = useStore(store => store.cartItemsIds)
  const cartItems = useStore(store => store.cartItems)
  const clearCartItems = useStore(store => store.clearCartItems)
  const [total, setTotal] = useState(0)

  function getCartItems() {
    // clearCartItems()
    cartItemsIds.map(item => {
      if (item.packageCat) {
        fetch(`http://localhost:3030/packages/${item.id}`)
          .then(res => res.json())
          .then(res => {
            if (res.error) {
              throw res.error
            }
            return res
          })
          .then(res => cartItems.push(res))
          .then(console.log("cartItems1", cartItems))
          .then(getTotal())
      } else {
        fetch(`http://localhost:3030/assets/${item.id}`)
          .then(res => res.json())
          .then(res => {
            if (res.error) {
              throw res.error
            }
            return res
          })
          .then(res => cartItems.push(res))
          .then(console.log("cartItems2", cartItems))
          .then(getTotal())
      }
    })
  }

  useEffect(() => {
    getCartItems()
    getTotal()
  }, [])

  function getTotal() {
    cartItems.map(asset => {
      setTotal(total + asset.cost)
    })
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
        <span>Total £{total} p/m</span>
        <div onClick={() => console.log("Clicked Activate current quote")}>
          Activate current quote
        </div>
      </div>
    </div>
  )
}
