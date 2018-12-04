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
      <h2 className="section-benefits__heading-secondary u-center-text">The most trusted digital currency platform</h2>
      <p className="section-benefits__heading-sub u-center-text u-margin-bottom-l">Millions of people choose Cryptiq every day</p>
      <div className="section-benefits__cards">
        <div className="section-benefits__cards__card">
          <img src="./images/secure-storage.png" alt="secure storage" className="benefit-card-img u-margin-bottom-m" />
          <p className="benefit-card-title u-margin-bottom-s">Secure Storage</p>
          <p className="benefit-card-info u-margin-bottom-s">We store the vast majority of the digital assets in secure offline storage.</p>
        </div>
        <div className="section-benefits__cards__card">
          <img src="./images/insurance-protected.png" alt="protected by insurance" className="benefit-card-img u-margin-bottom-m" />
          <p className="benefit-card-title u-margin-bottom-s">Protected by Insurance</p>
          <p className="benefit-card-info u-margin-bottom-s">Digital currency stored on our servers is covered by our insurance policy.</p>
        </div>
        <div className="section-benefits__cards__card">
          <img src="./images/best-practices.png" alt="industry best practices" className="benefit-card-img u-margin-bottom-m" />
          <p className="benefit-card-title u-margin-bottom-s">Industry best practices</p>
          <p className="benefit-card-info u-margin-bottom-s">Cryptiq supports a variety of the most popular digital currencies.</p>
        </div>
      </div>
    </section>
  </div>
)

export default HomePage