export default function Password({ nextStep, handleChange, values }) {
  return (
    <div className="password-step">
      <h1>Create Account</h1>

      <label>
        <h3>Choose a password</h3>
        {/* <input
             type="text"
             placeholder="Password"
             value={values.password}
             onChange={handleChange("password")}
           /> */}
        {/* <input
             type="text"
             placeholder="Password"
             value={values.password}
             onChange={handleChange("password")}
           /> */}
      </label>
    </div>
  )
}
