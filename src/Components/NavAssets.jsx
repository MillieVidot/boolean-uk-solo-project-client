// import useStore from "../store"

export default function NavAssets() {
  // const setSelectedCategory = useStore(store => store.setSelectedCategory)

  function setSelectedCategory(categoryName) {
    console.log("clicked:", categoryName)
  }

  return (
    <div className="nav-assets">
      <ul>
        <li>
          <button className="tab" onClick={() => setSelectedCategory("None")}>
            All
          </button>
        </li>
        <li>
          <button
            className="tab"
            onClick={() => setSelectedCategory("Structural")}
          >
            Structural
          </button>
        </li>
        <li>
          <button
            className="tab"
            onClick={() => setSelectedCategory("Mobilty")}
          >
            Mobilty
          </button>
        </li>
        <li>
          <button className="tab" onClick={() => setSelectedCategory("Vitals")}>
            Vitals
          </button>
        </li>
      </ul>
    </div>
  )
}
