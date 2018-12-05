import React from 'react'

class Payment extends React.Component {
  constructor() {
    super()

    this.state = {
      ccInputOne: '0000',
      ccInputTwo: '1234',
      ccInputThree: '5678',
      ccInputFour: '9123',
      ccName: '',
      ccDate: '01/19'
    }
    this.onNameChange = this.onNameChange.bind(this)
  }
  onNameChange(e) {
    const name = e.target.value
    this.setState(() => ({ ccName: name }))
  }
  render() {
    return (
      <form className="payment">
        <h3 className="payment__heading u-margin-bottom-m">
          Card Details
          </h3>
        <p className="payment__type u-margin-bottom-m">Card Type</p>
        <div className="payment__mock u-margin-bottom-m">
          <div className="payment__mock__card">
            <p className="payment__mock__card__type u-margin-bottom-s-m">
              visa
              </p>
            <div className="mock-cc-numbers u-margin-bottom-s-m">
              <span className="mock-cc-no mock-cc-no--1">{this.state.ccInputOne}</span>
              <span className="mock-cc-no mock-cc-no--2">{this.state.ccInputTwo}</span>
              <span className="mock-cc-no mock-cc-no--3">{this.state.ccInputThree}</span>
              <span className="mock-cc-no mock-cc-no--4">{this.state.ccInputFour}</span>
            </div>
            <div className="mock-name-exp">
              <p className="mock-name-exp__name" ref="mockName">{this.state.ccName ? this.state.ccName : 'Your Name'}</p>
              <p className="mock-name-exp__date">{this.state.ccDate}</p>
            </div>
          </div>
        </div>
        <div className="input-group">
          <label className="payment-info__label" htmlFor="cc-name">Name on Card</label>
          <input 
            type="text" 
            className="payment-info payment-info__name u-margin-bottom-m" 
            id="cc-name" 
            value={this.state.ccName}
            onChange={this.onNameChange}
            placeholder="Your Name" 
            autoComplete="off"
          />
        </div>
        <div className="input-group">
          <label className="payment-info__label" htmlFor="cc-number-1">Card Number</label>
          <div className="payment__cc-no-box">
            <input type="text" className="payment-info payment-info__number u-margin-bottom-m" id="cc-number-1" placeholder="0000" />
            <input type="text" className="payment-info payment-info__number u-margin-bottom-m" id="cc-number-2" placeholder="1234" />
            <input type="text" className="payment-info payment-info__number u-margin-bottom-m" id="cc-number-3" placeholder="5678" />
            <input type="text" className="payment-info payment-info__number u-margin-bottom-m" id="cc-number-4" placeholder="9123" />
          </div>
        </div>

        <input type="text" className="payment-info payment-info__exp-month" />

      </form>
    )
  }
}

export default Payment