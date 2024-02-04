import React from "react";

function Banner(props) {
  const { bannerSrc } = props;

  return (
    <>
      <img src={bannerSrc} alt="banner img" style={bannerStyle} />
    </>
  );
}

const bannerStyle = {
  width: "100vw",
};

export default Banner;
