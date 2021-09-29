import useStore from "../Hooks/store"

export default function NavAssets() {
  const getAssetsByCategory = useStore(store => store.getAssetsByCategory)

  return (
    <div className="nav-assets">
      <ul>
        <li>
          <button className="tab" onClick={() => getAssetsByCategory("None")}>
            All
          </button>
        </li>
        <li>
          <button
            className="tab"
            onClick={() => getAssetsByCategory("Structural")}
          >
            Structural
          </button>
        </li>
        <li>
          <button
            className="tab"
            onClick={() => getAssetsByCategory("Mobilty")}
          >
            Mobilty
          </button>
        </li>
        <li>
          <button className="tab" onClick={() => getAssetsByCategory("Vitals")}>
            Vitals
          </button>
        </li>
      </ul>
    </div>
  )
}
