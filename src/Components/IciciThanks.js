import React from 'react';
import '../StyleComponent/ICICIBankThankYou.css';

const ICICIBankThankYou = () => {
  return (
    <div className="icici-thank-you-container">
      <header className="icici-header">
        <img src={require("../Assets/logo.png")} alt="ICICI Bank" className="icici-logo" />
      </header>
      <main className="icici-main">
        <div className="thank-you-message">
          <div className="check-icon">✓</div>
          <h1>Thank You for showing your interest in ICICI Bank Payment collection solutions.</h1>
          <p>Our representative will reach out to you in a while.</p>
        </div>
      </main>
      <footer className="icici-footer1">
                    <p>*Terms and Conditions of ICICI Bank apply. For details Click Here.</p>
                    <p>Corporate Office Address: ICICI Bank Towers, Bandra-Kurla Complex, Mumbai 400 051</p>
                </footer>
    </div>
  );
};

export default ICICIBankThankYou;