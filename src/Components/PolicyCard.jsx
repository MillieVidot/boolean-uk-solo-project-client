export default function PolicyCard() {
  return (
    <div className="policy-card">
      <h3>Policy No. 567433BH</h3>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
      <div>
        <div>
          <h3>Start Date</h3>
          <span>24/11/2056</span>
        </div>
        <div>
          <h3>End Date</h3>
          <span>24/11/2057</span>
        </div>
        <div>
          <h3>Contract</h3>
          <span>Monlthy Rolling</span>
        </div>
      </div>
      <h3>£2038 p/m</h3>
      <div onClick={console.log("Clicked Cancel")}>Cancel</div>
      <div onClick={console.log("Clicked Amend")}>Amend</div>
    </div>
  )
}
