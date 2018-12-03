import React from 'react'

const HomePage = () => (
  <div className="page-wrapper">
    <header className="home-page-header u-margin-bottom-l">
      <div className="heading">
        <div className="heading__text">
          <h1 className="heading__text-primary u-margin-bottom-m">
            <span className="heading__text-primary--main">
              Buy cryptocurrency with confidence
            </span>
            <span className="heading__text-primary--sub">
              Cryptiq is the easiest place to buy cryptocurrency and grow your portfolio.
            </span>
          </h1>
          <a href="#" className="btn btn--white">Buy Coins</a>
        </div>
        <div className="heading__crypto-icons">
          <div className="heading__crypto-icons__icon heading__crypto-icons__icon--1">
            <img src="./images/bitcoin-header.png" alt="bitcoin icon" className="crypto-icon-img" />
          </div>
          <div className="heading__crypto-icons__icon heading__crypto-icons__icon--2">
            <img src="./images/ethereum-header.png" alt="ethereum icon" className="crypto-icon-img" />
          </div>
          <div className="heading__crypto-icons__icon heading__crypto-icons__icon--3">
            <img src="./images/iota-header.png" alt="iota icon" className="crypto-icon-img" />
          </div>     
        </div>
      </div>
    </header>

    <section className="section-benefits">
      <h2 className="section-benefits__heading-secondary u-center-text">Why Cryptiq</h2>
      <div className="section-benefits__cards">

      </div>
    </section>
  </div>
)

export default HomePage