export default function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Your Quote</h1>
      <p>Save your quote for later by loggin in.</p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
      <h3>£1284 p/m</h3>
      <div onClick={console.log("Clicked Checkout")}>Checkout</div>
      <div onClick={console.log("Clicked Save")}>Save</div>
    </div>
  )
}
