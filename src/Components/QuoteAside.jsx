export default function QuoteAside() {
  return (
    <div className="quote-aside">
      <h1>Your Quote</h1>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
      <h3>£1284 p/m</h3>
      <div onClick={console.log("Clicked checkout")}>Checkout</div>
    </div>
  )
}
