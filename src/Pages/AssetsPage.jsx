import AssetCard from "../Components/AssetCard"
import NavAssets from "../Components/NavAssets"
import useStore from "../Hooks/store"
import { useEffect } from "react"

export default function Packages() {
  const assetData = useStore(store => store.assets)
  const getAssets = useStore(store => store.getAssets)

  useEffect(() => {
    getAssets()
  }, [])

  return (
    <div className="assets-page wrapper">
      <NavAssets />
      <ul className="assets-list">
        {assetData.map(asset => (
          <AssetCard
            key={asset.id}
            id={asset.id}
            name={asset.name}
            cost={asset.cost}
            image={asset.image}
          />
        ))}
      </ul>
    </div>
  )
}
