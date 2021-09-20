import React, { Component } from "react"
import CitizenId from "./CitizenId"
import Password from "./Password"
import Success from "./Success"
import UserNames from "./UserNames"

export default class Signup extends Component {
  state = {
    step: 1,
    citizenId: "",
    firstName: "",
    lastName: "",
    password: "",
  }

  // go back to previous step
  prevStep = () => {
    const { step } = this.state
    this.setState({ step: step - 1 })
  }

  // proceed to the next step
  nextStep = () => {
    const { step } = this.state
    this.setState({ step: step + 1 })
  }

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value })
  }

  render() {
    const { step } = this.state
    const { citizenId, firstName, lastName, password } = this.state

    const values = {
      citizenId,
      firstName,
      lastName,
      password,
    }

    switch (step) {
      case 1:
        return (
          <CitizenId
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 2:
        return (
          <UserNames
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 3:
        return (
          <Password
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            values={values}
          />
        )
      case 4:
        return <Success />
      default:
      // do nothing
    }
  }
}

// export default function SignUp() {
//   // export default class Signup extends Component {
//   const state = {
//     step: 1,
//     citizenId: "",
//     firstName: "",
//     lastName: "",
//     password: "",
//     nextOfKin: "",
//   }

//   // go back to previous step
//   const prevStep = () => {
//     const { step } = this.state
//     this.setState({ step: step - 1 })
//   }

//   // proceed to the next step
//   const nextStep = () => {
//     const { step } = this.state
//     this.setState({ step: step + 1 })
//   }

//   // handle field change
//   const handleChange = input => e => {
//     this.setState({ [input]: e.target.value })
//   }

//   //   render() {
//   return (
//     <div className="signup-form">
//       <h1>Create Account</h1>

//     </div>
//   )
//   //   }
// }
