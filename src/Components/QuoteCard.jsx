export default function QuoteCard() {
  return (
    <div className="quote-card">
      <h3>Quote No. 123455A</h3>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
      <h3>£1284 p/m</h3>
      <div onClick={() => console.log("Clicked Activate")}>Activate</div>
    </div>
  )
}
