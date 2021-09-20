export default function Success({ values }) {
  return (
    <div className="success-step">
      <h1>Create Account</h1>

      <h3>Check your information is correct</h3>
      <p>{values.citizenId}</p>
      <p>
        {values.firstName} {values.lastName}
      </p>

      <button>Confirm Details</button>
    </div>
  )
}
