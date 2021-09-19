export default function QuoteForm() {
  return (
    <div className="quote-form">
      <h1>Get a Bespoke Quote</h1>
      <div onClick={() => console.log("Clicked Close")}>X</div>
      <div className="q-form-area">
        <form onSubmit={() => console.log("Question 1 submitted")}>
          <label>
            <h3>Question 1</h3>
            <input type="text" />
            <input type="submit" />
          </label>
        </form>
        <form onSubmit={() => console.log("Question 2 submitted")}>
          <label>
            <h3>Question 2</h3>
            <input type="text" />
            <input type="submit" />
          </label>
        </form>
        <div className="q-form-final">
          <h1>Your Quote</h1>
          <ul>
            <li>Brain</li>
            <li>Skull</li>
          </ul>

          <div>Clear</div>
          <div>Checkout</div>
        </div>
        <div onClick={() => console.log("Clicked Back")}>Back</div>
        <div onClick={() => console.log("Clicked Next")}>Next</div>
      </div>
    </div>
  )
}
