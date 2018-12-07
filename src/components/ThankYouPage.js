import React from 'react'
import moment from 'moment'

class ThankYouPage extends React.Component {
  constructor() {
    super()

    this.state = {
      date: ''
    }
  }
  componentWillMount() {
    const now = moment.now()
    const twoDaysLater = moment(now).add(2, 'days').format('MMMM Do, YYYY')
    this.setState(() => ({ date: twoDaysLater }))
  }
  render() {
    return (
      <div className="thank-you-page-wrapper">
        <div className="thank-you-header">
          <i className="far fa-check-circle u-margin-bottom-s-m"></i>
          <p className="thank-you-header__text--success u-margin-bottom-s">
            Your purchase was successful!
          </p>
          <p className="thank-you-header__text--info u-margin-bottom-s-m">
            Your cryptocurrency will be available in your wallet by {this.state.date}.
          </p>
          <a href="/cart">
            <p className="thank-you-header__text--cart">
              Start another purchase
            </p>
          </a>
        </div>
      </div>
    )
  }
}

export default ThankYouPage