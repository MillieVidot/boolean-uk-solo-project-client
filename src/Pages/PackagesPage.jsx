import AssetCard from "../Components/AssetCard"
import useStore from "../Hooks/store"
import { useEffect } from "react"

export default function PackagesPage() {
  const packageData = useStore(store => store.packages)
  const getPackages = useStore(store => store.getPackages)

  useEffect(() => {
    getPackages()
    console.log("packageData2:", packageData)
  }, [])

  return (
    <div className="packages-page">
      <ul className="assets-list">
        {packageData.map(deal => (
          <AssetCard
            key={deal.id}
            id={deal.id}
            packageCat={deal.packageCat}
            name={deal.name}
            cost={deal.cost}
            image={deal.image}
          />
        ))}
      </ul>
    </div>
  )
}
