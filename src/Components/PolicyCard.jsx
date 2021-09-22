export default function PolicyCard({
  quoteNumber,
  startDate,
  endDate,
  cost,
  image,
}) {
  return (
    <div className="policy-card">
      <h3>Policy No. {quoteNumber}</h3>
      <div className="policy-main">
        <ul className="policy-items">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Package 1</li>
        </ul>
        <div className="policy-details">
          <div>
            <h3>Start Date</h3>
            <span>{startDate}</span>
          </div>
          <div>
            <h3>End Date</h3>
            <span>{endDate}</span>
          </div>
          <div>
            <h3>Contract</h3>
            <span>£{cost} p/m</span>
          </div>
        </div>
      </div>
      <div className="policy-card-nav">
        <div onClick={() => console.log("Clicked Cancel")}>Cancel</div>
        <div onClick={() => console.log("Clicked Amend")}>Amend</div>
      </div>
    </div>
  )
}
