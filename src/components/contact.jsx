import React from "react";
import Banner from "./banner";

function Contact() {
  return (
    <>
      <Banner bannerSrc="banner.jpg" />
      <section style={contactSectionStyle}>
        <h1 style={contactHeadingStyle}>Contact Us</h1>
        <p style={contactTextStyle}>
          Have a question or want to get in touch? Reach out to us using the
          contact form below, and we'll get back to you as soon as possible.
        </p>
      </section>

      <section style={contactFormSectionStyle}>
        <form style={contactFormStyle}>
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" style={inputStyle} required />

          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" style={inputStyle} required />

          <label htmlFor="phone">Your Phone Number:</label>
          <input type="tel" id="phone" name="phone" style={inputStyle} />

          <label htmlFor="message">Your Message:</label>
          <textarea id="message" name="message" style={inputStyle} rows="4" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </>
  );
}

const contactSectionStyle = {
  backgroundColor: "#f8f8f8",
  padding: "40px",
  textAlign: "center",
};

const contactHeadingStyle = {
  fontSize: "2.5rem",
  color: "#333",
  marginBottom: "20px",
};

const contactTextStyle = {
  fontSize: "1.2rem",
  color: "#555",
};

const contactFormSectionStyle = {
  padding: "40px",
};

const contactFormStyle = {
  display: "grid",
  gap: "15px",
  maxWidth: "400px",
  margin: "0 auto",
  padding: "20px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  backgroundColor: "#fff",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const inputStyle = {
  padding: "10px",
  width: "100%",
  boxSizing: "border-box",
  border: "1px solid #ddd",
  borderRadius: "4px",
};

export default Contact;
