import React from "react"
export default function AssetCard({ name, cost, image }) {
  return (
    <li className="asset-card">
      <img className="asset-img" src={image} alt={name} />
      <h2>{name}</h2>
      <span>£{cost}</span>
      <div onClick={() => console.log("Add to quote")}>Add</div>
    </li>
  )
}
