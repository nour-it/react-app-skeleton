import React from 'react';

const Payment = () => {
  return (
    <div className="payment-container">
      <h1>Paiement</h1>
      <form className="payment-form">
        <div className="form-group">
          <label htmlFor="cardNumber">Numéro de carte</label>
          <input type="text" id="cardNumber" placeholder="XXXX XXXX XXXX XXXX" />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="expiry">Date d'expiration</label>
            <input type="text" id="expiry" placeholder="MM/YY" />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input type="text" id="cvv" placeholder="XXX" />
          </div>
        </div>
        <button type="submit">Payer</button>
      </form>
    </div>
  );
};

export default Payment;
