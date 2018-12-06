import React from 'react'
import { connect } from 'react-redux'

class Payment extends React.Component {
  constructor() {
    super()

    this.state = {
      ccInputOne: '',
      ccInputTwo: '',
      ccInputThree: '',
      ccInputFour: '',
      ccName: '',
      ccMonth: '',
      ccYear: ''
    }
    this.onNameChange = this.onNameChange.bind(this)
    this.onCCOneChange = this.onCCOneChange.bind(this)
    this.onCCTwoChange = this.onCCTwoChange.bind(this)
    this.onCCThreeChange = this.onCCThreeChange.bind(this)
    this.onCCFourChange = this.onCCFourChange.bind(this)
    this.onMonthChange = this.onMonthChange.bind(this)
    this.onYearChange = this.onYearChange.bind(this)
  }
  onNameChange(e) {
    const name = e.target.value
    this.setState(() => ({ ccName: name }))
  }
  onCCOneChange(e) {
    const numbers = e.target.value
    this.setState(() => ({ ccInputOne: numbers }))
  }
  onCCTwoChange(e) {
    const numbers = e.target.value
    this.setState(() => ({ ccInputTwo: numbers }))
  }
  onCCThreeChange(e) {
    const numbers = e.target.value
    this.setState(() => ({ ccInputThree: numbers }))
  }
  onCCFourChange(e) {
    const numbers = e.target.value
    this.setState(() => ({ ccInputFour: numbers }))
  }
  onMonthChange(e) {
    const month = e.target.value
    this.setState(() => ({ ccMonth: month }))
  }
  onYearChange(e) {
    const year = e.target.value
    this.setState(() => ({ ccYear: year }))
  }
  componentDidMount() {
    console.log(this.props.btcCart.btc)
  }
  render() {
    return (
      <form className="payment">
        <h3 className="payment__heading u-margin-bottom-s-m">
          Card Details
          </h3>
        <div className="payment__mock u-margin-bottom-m">
          <div className="payment__mock__card">
            <p className="payment__mock__card__type u-margin-bottom-s-m">
              visa
              </p>
            <div className="mock-cc-numbers u-margin-bottom-s-m">
              <span className="mock-cc-no mock-cc-no--1">{this.state.ccInputOne ? this.state.ccInputOne : '0000'}</span>
              <span className="mock-cc-no mock-cc-no--2">{this.state.ccInputTwo ? this.state.ccInputTwo : '1234'}</span>
              <span className="mock-cc-no mock-cc-no--3">{this.state.ccInputThree ? this.state.ccInputThree : '5678'}</span>
              <span className="mock-cc-no mock-cc-no--4">{this.state.ccInputFour ? this.state.ccInputFour : '9123'}</span>
            </div>
            <div className="mock-name-exp">
              <p className="mock-name-exp__name" ref="mockName">{this.state.ccName ? this.state.ccName : 'Your Name'}</p>
              <p className="mock-name-exp__date">
                {this.state.ccMonth ? this.state.ccMonth : 'MM'} / {this.state.ccYear ? this.state.ccYear : 'YY'}
              </p>
            </div>
          </div>
          <div className="payment__choices">
            <h1>visa</h1>
            <h1>mastercard</h1>
          </div>
        </div>
        <div className="input-group u-margin-top-xxx">
          <label className="payment-info__label" htmlFor="cc-name">Name on Card</label>
          <input 
            type="text" 
            className="payment-info payment-info__name" 
            id="cc-name" 
            value={this.state.ccName}
            onChange={this.onNameChange}
            placeholder="Your Name" 
            autoComplete="off"
          />
        </div>
        <div className="input-group">
          <label className="payment-info__label" htmlFor="cc-number-1">Card Number</label>
          <div className="payment__cc-no-box u-margin-bottom-m">
            <input 
              type="text" 
              className="payment-info payment-info__number" 
              id="cc-number-1" 
              placeholder="0000" 
              onChange={this.onCCOneChange}
              autoComplete="off"
            />
            <input 
              type="text" 
              className="payment-info payment-info__number" 
              placeholder="1234" 
              onChange={this.onCCTwoChange}
              autoComplete="off"
            />
            <input 
              type="text" 
              className="payment-info payment-info__number" 
              placeholder="5678" 
              onChange={this.onCCThreeChange}
              autoComplete="off"
            />
            <input 
              type="text" 
              className="payment-info payment-info__number" 
              placeholder="9123" 
              onChange={this.onCCFourChange}
              autoComplete="off"
            />
          </div>
        </div>

        <div className="input-group input-group--exp-cvv">
          <div className="input-group__exp-date">
            <label className="payment-info__label" htmlFor="exp-month">Expiration Date</label>
            <input 
              type="text" 
              className="payment-info payment-info__exp-date" 
              id="exp-month" 
              placeholder="MM" 
              onChange={this.onMonthChange}
              autoComplete="off"
            />
            <input 
              type="text" 
              className="payment-info payment-info__exp-date" 
              placeholder="YY" 
              onChange={this.onYearChange}
              autoComplete="off"
            />
          </div>
          <div className="input-group__cvv">
            <label htmlFor="" className="payment-info__label">CVV</label>
            <input 
              type="text"
              className="payment-info payment-info__cvv" 
              placeholder="XXX"
              autoComplete="off"
            />
          </div>
        </div>

        {this.props.btcCart.btc > 0 ? 
          <div className="input-group">
            <label htmlFor="btc-address" className="payment-info__label">Bitcoin Wallet</label>
            <input 
              type="text" 
              className="payment-info payment-info__wallet" 
              id="btc-address" 
              placeholder="3FkenCiXpSLqD8L79intRNXUgjRoH9sjXa"
              autoComplete="off"
            />
          </div> 
          :
          undefined
        }

        {this.props.ethCart.eth > 0 ? 
          <div className="input-group">
            <label htmlFor="eth-address" className="payment-info__label">Ethereum Wallet</label>
            <input 
              type="text" 
              className="payment-info payment-info__wallet" 
              id="eth-address" 
              placeholder="AeZ7rXGtQSPIOrKOseD2tWSjfJpD4RNgH"
              autoComplete="off"
            />
          </div> 
          :
          undefined
        }
        
        {this.props.iotaCart.iota > 0 ? 
          <div className="input-group">
            <label htmlFor="iota-address" className="payment-info__label">Iota Wallet</label>
            <input 
              type="text" 
              className="payment-info payment-info__wallet" 
              id="iota-address" 
              placeholder="M4hqJu99UPwcydNH9w4NvVyu3XpSXU"
              autoComplete="off"
            />
          </div> 
          :
          undefined
        }

        <button className="form-button">Buy Coins</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  btcCart: state.btc,
  ethCart: state.eth,
  iotaCart: state.iota
})

export default connect(mapStateToProps)(Payment)