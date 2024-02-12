import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const CheckoutPage = () => {
  const [donationAmount, setDonationAmount] = useState(25);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [error, setError] = useState(null);

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

  const handlePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51OhVMUSFdCe5uGCskx4WGm3Je7vyxYCULZXWXmhTyWZS54jV1co2AGj7h7e4Mw49p7gBMVGjTSfFfH77PbXrbi6200Siimq3Cy"
    );

    const body = {
      donationAmount,
      name,
      email,
      address,
      paymentMethod,
    };

    try {
      const response = await fetch(
        "http://localhost:7000/api/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      const session = await response.json();
      // Redirect to Stripe Checkout Page
      await stripe.redirectToCheckout({ sessionId: session.id });
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to process donation. Please try again later.");
    }
  };

  return (
    <>
      <img src="donate.jpg" alt="" style={{ width: "98.9vw", height: "25rem" }} />
      <div className="checkout-container">
        <h2>Donation Checkout</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
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
