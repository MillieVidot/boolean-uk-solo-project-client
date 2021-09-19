// import React from "react"
import AssetCard from "../Components/AssetCard"
import NavAssets from "../Components/NavAssets"
// import useStore from "../store"
// import useStore from "zustand"
// const useStore = require("../store")
export default function Packages() {
  // const assetData = useStore(store => store.assets)
  // console.log("assetData:", assetData)
  // const getAssets = useStore((store) => store.getAssets);

  const assetData = [
    {
      id: 1,
      name: "Heart",
      cost: 124,
      image:
        "https://www.kindpng.com/picc/m/207-2075563_png-file-icon-white-transparent-png-medical-heart.png",
      category: "Vitals",
    },
    {
      id: 2,
      name: "Lung (Left)",
      cost: 342,
      image:
        "https://www.pinclipart.com/picdir/middle/329-3295706_lungs-icon-lung-logo-clipart.png",
      category: "Vitals",
    },
    {
      id: 3,
      name: "Eye",
      cost: 530,
      image:
        "https://icon-library.com/images/eyeball-icon-png/eyeball-icon-png-25.jpg",
      category: "none",
    },
    {
      id: 4,
      name: "Eye Pair",
      cost: 1000,
      image:
        "https://icon-library.com/images/eyeball-icon-png/eyeball-icon-png-25.jpg",
      category: "none",
    },
  ]

  // useEffect(() => {
  //   getAssets();
  // }, []);

  return (
    <div className="assets-page wrapper">
      <NavAssets />
      <ul className="assets-list">
        {assetData.map(asset => (
          <AssetCard
            key={asset.id}
            name={asset.name}
            cost={asset.cost}
            image={asset.image}
          />
        ))}
      </ul>
    </div>
  )
}
