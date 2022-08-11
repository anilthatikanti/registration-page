// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameEmpty: false,
    lastNameEmpty: false,
    submitForm: false,
  }

  RegistrationForm = () => {
    this.setState({
      firstName: '',
      lastName: '',
      firstNameEmpty: false,
      lastNameEmpty: false,
      submitForm: false,
    })
  }

  submitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state

    if (firstName.length !== 0 && lastName.length !== 0) {
      console.log('anil')
      this.setState({submitForm: true})
    } else {
      this.setState({
        firstNameEmpty: !(firstName !== ''),
        lastNameEmpty: !(lastName !== ''),
        submitForm: false,
      })
    }
  }

  getFirstName = event => {
    const {value} = event.target
    this.setState({firstName: value})
  }

  getLastName = event => {
    const {value} = event.target
    this.setState({lastName: value})
  }

  onBlurFirstValue = () => {
    const {firstName} = this.state
    const isFirstNotEmpty = firstName !== ''
    this.setState({firstNameEmpty: !isFirstNotEmpty})
  }

  onBlurLastValue = () => {
    const {lastName} = this.state
    const isLastNotEmpty = lastName !== ''
    this.setState({lastNameEmpty: !isLastNotEmpty})
  }

  render() {
    const {
      firstName,
      lastName,
      firstNameEmpty,
      lastNameEmpty,
      submitForm,
    } = this.state
    console.log(firstNameEmpty, lastNameEmpty)

    return (
      <div className="container">
        <h1>Registration</h1>
        <div className="cardContainer">
          {submitForm ? (
            <div className="SuccessContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png "
                alt="success"
              />
              <p>Submitted Successfully</p>
              <div className="buttonContainer">
                <button
                  className="submitBtn"
                  type="submit"
                  onClick={this.RegistrationForm}
                >
                  Submit Another Response
                </button>
              </div>
            </div>
          ) : (
            <form className="inputFormContainer" onSubmit={this.submitForm}>
              <label htmlFor="firstName" className="labelStyle">
                FIRST NAME
              </label>
              <input
                id="firstName"
                className="inputStyle"
                value={firstName}
                placeholder="First name"
                onChange={this.getFirstName}
                onBlur={this.onBlurFirstValue}
              />
              {firstNameEmpty && <p className="errorMessage">Required</p>}
              <label htmlFor="lastName" className="labelStyle">
                LAST NAME
              </label>
              <input
                id="lastName"
                className="inputStyle"
                value={lastName}
                placeholder="Last name"
                onChange={this.getLastName}
                onBlur={this.onBlurLastValue}
              />
              {lastNameEmpty && <p className="errorMessage">Required</p>}
              <div className="buttonContainer">
                <button type="submit">submit</button>
              </div>
            </form>
          )}
        </div>
      </div>
    )
  }
}
export default RegistrationForm
