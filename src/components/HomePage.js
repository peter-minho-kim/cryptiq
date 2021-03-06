import React from 'react'

const HomePage = () => (
  <div className="home-page-wrapper">
    <header className="home-page-header u-margin-bottom-l">
      <div className="heading">
        <div className="heading__text">
          <h1 className="heading__text-primary u-margin-bottom-m">
            <span className="heading__text-primary--main">
              Buy cryptocurrency with intelligence
            </span>
            <span className="heading__text-primary--sub">
              Crypt<span className="u-brand-iq">iQ</span> is the smartest place to buy cryptocurrency and grow your portfolio.
            </span>
          </h1>
          <a href="/cart" className="btn btn--white">Buy Coins</a>
        </div>
        <div className="heading__crypto-icons">
          <div className="heading__crypto-icons__icon heading__crypto-icons__icon--1">
            <img src="./images/bitcoin.png" alt="bitcoin icon" className="crypto-icon-img" />
          </div>
          <div className="heading__crypto-icons__icon heading__crypto-icons__icon--2">
            <img src="./images/ethereum.png" alt="ethereum icon" className="crypto-icon-img" />
          </div>
          <div className="heading__crypto-icons__icon heading__crypto-icons__icon--3">
            <img src="./images/iota.png" alt="iota icon" className="crypto-icon-img" />
          </div>     
        </div>
      </div>
    </header>

    <section className="section-benefits u-margin-bottom-xl u-center-text">
      <h2 className="section-benefits__heading-secondary">The most trusted digital currency platform</h2>
      <p className="section-benefits__heading-sub u-margin-bottom-l">Millions of people choose CryptiQ every day</p>
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
          <p className="benefit-card-title u-margin-bottom-s">Industry Best Practices</p>
          <p className="benefit-card-info u-margin-bottom-s">CryptiQ supports a variety of the most popular digital currencies.</p>
        </div>
      </div>
    </section>

    <section className="section-achievements u-margin-bottom-l">
      <div className="stats-container">
        <div className="stat">
          <p className="stat--primary">$42T+</p>
          <p className="stat--secondary">Digital currency exchanged</p>
        </div>
        <div className="stat">
          <p className="stat--primary">100+</p>
          <p className="stat--secondary">Countries supported</p>
        </div>
        <div className="stat">
          <p className="stat--primary">80M+</p>
          <p className="stat--secondary">Customers served</p>
        </div>
      </div>
    </section>

    <section className="section-get-started u-center-text u-margin-bottom-xl">
      <h2 className="heading--secondary">
        Getting started is easy
      </h2>
      <p className="heading--sub u-margin-bottom-l">
        CryptiQ supports a variety of the most popular digital currencies
      </p>
      <div className="get-started-cards u-margin-bottom-l">
        <div className="get-started-cards__card">
          <img src="./images/select-crypto.png" alt="select crypto" className="get-started-cards__img u-margin-bottom-s" />
          <p className="get-started-cards__text">Select your cryptocurrency</p>  
        </div>
        <div className="get-started-cards__card">
          <img src="./images/pay.png" alt="pay with credit card" className="get-started-cards__img u-margin-bottom-s" />
          <p className="get-started-cards__text">Pay with your credit card</p>  
        </div>
        <div className="get-started-cards__card">
          <img src="./images/receive-crypto.png" alt="receive crypto" className="get-started-cards__img u-margin-bottom-s" />
          <p className="get-started-cards__text">Receive your coins!</p>  
        </div>
      </div>
      <a href="/cart" className="btn btn--aquamarine">Get Started</a>
    </section>

    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer__center u-margin-bottom-s">
          <h2 className="footer__center__brand">
            Crypt<span className="u-brand-iq">iQ</span>
          </h2>
        </div>
        <div className="footer__bottom">
          <div className="footer__left">
            Created by <a href="http://www.peterkim.io/" target="_blank">Peter Kim</a>      
            <a href="https://www.linkedin.com/in/peter-kim-developer/" className="social-media" target="_blank"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/peter-minho-kim" className="social-media" target="_blank"><i className="fab fa-github"></i></a>
            <br/>
            Copyright © 2018 All Rights Reserved
          </div>
          <div className="footer__right">
            <i className="fas fa-bolt"></i> by <a href="https://bravenewcoin.com/" target="_blank"><img src="./images/brave-new-coin.svg" className="brave-new-coin" alt="brave new coin logo" /></a>
          </div>
        </div>
      </div>
    </footer>
  </div>
)

export default HomePage