import React from 'react'
import { connect } from 'react-redux'

class Payment extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      ccInputOne: '',
      ccInputTwo: '',
      ccInputThree: '',
      ccInputFour: '',
      ccName: '',
      ccMonth: '',
      ccYear: '',
      ccChoice: 'visa',
      ccPath: './images/visa-logo.png',
      disable: true
    }

    this.onNameChange = this.onNameChange.bind(this)
    this.onCCOneChange = this.onCCOneChange.bind(this)
    this.onCCTwoChange = this.onCCTwoChange.bind(this)
    this.onCCThreeChange = this.onCCThreeChange.bind(this)
    this.onCCFourChange = this.onCCFourChange.bind(this)
    this.onMonthChange = this.onMonthChange.bind(this)
    this.onYearChange = this.onYearChange.bind(this)
    this.onVisaChange = this.onVisaChange.bind(this)
    this.onMasterCardChange = this.onMasterCardChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onVisaChange() {
    this.setState(() => ({ ccPath: './images/visa-logo.png' }))
    this.refs.mockCard.classList.remove('black-bcg')
    this.refs.mockCard.classList.add('manatee-bcg')
  }
  onMasterCardChange() {
    this.setState(() => ({ ccPath: './images/mastercard-logo.png' }))
    this.refs.mockCard.classList.remove('manatee-bcg')
    this.refs.mockCard.classList.add('black-bcg')
  }
  onNameChange(e) {
    const name = e.target.value
    if (name.match(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/) || name === '') {
      this.setState(() => ({ ccName: name }))
    }
  }
  onCCOneChange(e) {
    const numbers = e.target.value
    if (numbers.match(/^[0-9]*$/)) {
      this.setState(() => ({ ccInputOne: numbers }))
    }
  }
  onCCTwoChange(e) {
    const numbers = e.target.value
    if (numbers.match(/^[0-9]*$/)) {
      this.setState(() => ({ ccInputTwo: numbers }))
    }
  }
  onCCThreeChange(e) {
    const numbers = e.target.value
    if (numbers.match(/^[0-9]*$/)) {
      this.setState(() => ({ ccInputThree: numbers }))
    }
  }
  onCCFourChange(e) {
    const numbers = e.target.value
    if (numbers.match(/^[0-9]*$/)) {
      this.setState(() => ({ ccInputFour: numbers }))
    }
  }
  onMonthChange(e) {
    const month = e.target.value
    if (month.match(/^[0-9]*$/)) {
      this.setState(() => ({ ccMonth: month }))
    }
  }
  onYearChange(e) {
    const year = e.target.value
    if (year.match(/^[0-9]*$/)) {
      this.setState(() => ({ ccYear: year }))
    }
  }
  onSubmit(e) {
    e.preventDefault()
    this.setState(() => ({ submitted: true }))
    this.refs.formButton.innerHTML = '<img className="payment-loader" src="./images/loader.svg" alt="loader"/>'
    // Just to show off the loader =)
    setTimeout(() => {
      this.props.history.push('/thankyou')
    }, 2000)
  }
  componentDidMount() {
    console.log(this.refs.formButton.attributes.disabled)
  }
  render() {
    return (
      <form className="payment" onSubmit={this.onSubmit}>
        <h3 className="payment__heading u-margin-bottom-s-m">
          Card Details
          </h3>
        <div className="payment__mock u-margin-bottom-m">
          <div className="payment__mock__card manatee-bcg" ref="mockCard">
            <img src={this.state.ccPath} alt="credit card logo" className="payment__mock__card__image u-margin-bottom-m" />
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
            <img 
              src="./images/visa-logo.png" 
              alt="visa logo" 
              className="payment__choices__choice" 
              onClick={this.onVisaChange}
            />
            <img 
              src="./images/mastercard-logo.png" 
              alt="mastercard logo" 
              className="payment__choices__choice" 
              onClick={this.onMasterCardChange}
            />
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
            required
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
              value={this.state.ccInputOne}
              onChange={this.onCCOneChange}
              autoComplete="off"
              maxLength="4"
              pattern=".{4,}"
              required title="4 numbers required"
            />
            <input 
              type="text" 
              className="payment-info payment-info__number" 
              placeholder="1234" 
              value={this.state.ccInputTwo}
              onChange={this.onCCTwoChange}
              autoComplete="off"
              maxLength="4"
              pattern=".{4,}"
              required title="4 numbers required"
            />
            <input 
              type="text" 
              className="payment-info payment-info__number" 
              placeholder="5678" 
              value={this.state.ccInputThree}
              onChange={this.onCCThreeChange}
              autoComplete="off"
              maxLength="4"
              pattern=".{4,}"
              required title="4 numbers required"
            />
            <input 
              type="text" 
              className="payment-info payment-info__number" 
              placeholder="9123" 
              value={this.state.ccInputFour}
              onChange={this.onCCFourChange}
              autoComplete="off"
              maxLength="4"
              pattern=".{4,}"
              required title="4 numbers required"
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
              value={this.state.ccMonth}
              onChange={this.onMonthChange}
              autoComplete="off"
              maxLength="2"
              pattern=".{2,}"
              required title="2 numbers required (eg. Janauary = 01)"
            />
            <input 
              type="text" 
              className="payment-info payment-info__exp-date" 
              placeholder="YY" 
              value={this.state.ccYear}
              onChange={this.onYearChange}
              autoComplete="off"
              maxLength="2"
              pattern=".{2,}"
              required title="2 numbers required (eg. 2019 = 19)"
            />
          </div>
          <div className="input-group__cvv">
            <label htmlFor="" className="payment-info__label">CVV</label>
            <input 
              type="text"
              className="payment-info payment-info__cvv" 
              placeholder="XXX"
              autoComplete="off"
              maxLength="3"
              pattern=".{3,}"
              required title="3 numbers required"
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
              required
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
              required
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
              required
            />
          </div> 
          :
          undefined
        }

        <button 
          // Disable button if no coins are selected and if payment form is not complete
          disabled={this.state.disable && (this.props.btcCart.btc === 0 && this.props.ethCart.eth === 0 && this.props.iotaCart.iota === 0)} 
          // Change class of button based on form state
          className={this.state.disable && (this.props.btcCart.btc === 0 && this.props.ethCart.eth === 0 && this.props.iotaCart.iota === 0) ? 'form-button--disabled' : 'form-button'}
          ref="formButton"
        >
          {this.props.btcCart.btc === 0 && this.props.ethCart.eth === 0 && this.props.iotaCart.iota === 0 ? 
            // Conditionally render button text
            'Select Coins' 
            :
            'Buy Coins'
          }
        </button>
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