import React from "react"
import useStore from "../Hooks/store"
export default function AssetCard({ id, name, cost, image, packageCat }) {
  const addToCart = useStore(store => store.addToCart)

  return (
    <li className="asset-card" onClick={() => addToCart(id, packageCat)}>
      <img className="asset-img" src={image} alt={name} />
      <h2>{name}</h2>
      <span>£{cost}</span>
    </li>
  )
}
