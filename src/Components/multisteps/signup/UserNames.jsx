export default function UserNames({ nextStep, handleChange, values }) {
  return (
    <div className="firstName-step">
      <h1>Create Account</h1>

      <label>
        <h3>Tell us your first name.</h3>
        {/* <input
           type="text"
           placeholder="First Name"
           value={values.firstName}
           onChange={handleChange("firstName")}
         /> */}
      </label>
      <label>
        <h3>Tell us your last name.</h3>
        {/* <input
           type="text"
           placeholder="Last Name"
           value={values.lastName}
           onChange={handleChange("lastName")}
         /> */}
      </label>
    </div>
  )
}
