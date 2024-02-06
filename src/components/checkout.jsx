import React, { useState } from "react";

const CheckoutPage = () => {
  const [donationAmount, setDonationAmount] = useState(25);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("creditCard");

  const handleDonationChange = (e) => {
    setDonationAmount(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handlePayment = () => {
    console.log(
      `Processing payment for ${donationAmount} USD from ${name} (${email})`
    );
   
  };

  return (
    <>
    <img src="donate.jpg" alt="" style={{width:"100vw",height:"25rem"}} />
      <div className="checkout-container">
        <h2>Donation Checkout</h2>
        <div className="checkout-form">
          <label>
            Donation Amount:
            <input
              type="number"
              value={donationAmount}
              onChange={handleDonationChange}
            />
          </label>
          <label>
            Name:
            <input type="text" value={name} onChange={handleNameChange} />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <label>
            Address:
            <input type="text" value={address} onChange={handleAddressChange} />
          </label>
          <label>
            Payment Method:
            <select value={paymentMethod} onChange={handlePaymentMethodChange}>
              <option value="creditCard">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bankTransfer">Bank Transfer</option>
            </select>
          </label>
          <button onClick={handlePayment}>Donate Now</button>
        </div>
        <div className="checkout-summary">
          <h3>Donation Summary</h3>
          <p>
            Thank you, {name}, for your generous donation of ₹{donationAmount}!
            We appreciate your support.
          </p>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
