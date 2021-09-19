import AssetCard from "../Components/AssetCard"

export default function PackagesPage() {
  const packageData = [
    {
      id: 1,
      name: "Vitals",
      cost: 3499,
      image:
        "https://www.kindpng.com/picc/m/207-2075563_png-file-icon-white-transparent-png-medical-heart.png",
      category: "Vitals",
    },
    {
      id: 2,
      name: "Mobilty",
      cost: 4999,
      image:
        "https://www.pinclipart.com/picdir/middle/329-3295706_lungs-icon-lung-logo-clipart.png",
      category: "Mobilty",
    },
    {
      id: 3,
      name: "Structural",
      cost: 2249,
      image:
        "https://icon-library.com/images/eyeball-icon-png/eyeball-icon-png-25.jpg",
      category: "Structural",
    },
    {
      id: 4,
      name: "Full Clone",
      cost: 9999,
      image:
        "https://icon-library.com/images/eyeball-icon-png/eyeball-icon-png-25.jpg",
      category: "none",
    },
  ]
  return (
    <div className="packages-page">
      <ul className="assets-list">
        {/* {packageData.map(package => (
          <AssetCard
            key={package.id}
            name={package.name}
            cost={package.cost}
            image={package.image}
          />
        ))} */}
      </ul>
    </div>
  )
}
