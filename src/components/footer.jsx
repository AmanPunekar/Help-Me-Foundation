import React from "react";

function Footer() {
  return (
    <>
      <div style={stylefooter}>
        <p style={{ marginBottom:".1rem" }}>
          Terms & Condition <span style={{ color: "#009dff" }}>||</span> Privacy
          Policy
        </p>
        <p style={{ marginBottom:".5rem" }}>&copy; 2024 Help Me Foundation. All rights reserved</p>
      </div>
    </>
  );
}

const stylefooter = {
  backgroundColor: "#011235",
  height: "5.5rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  color: "#fff",
};
export default Footer;
