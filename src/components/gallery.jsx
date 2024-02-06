import React from "react";
import Banner from "./banner";

function Gallerys() {
  return (
    <>
      <Banner bannerSrc="poor-boy.webp" style={{ width: "100vw" }} />

      <div className="container">
        <div className="gallery">
          <div className="img">
            <img
              src="https://thaagam.org/static/main/assets/images/gallery/01.webp"
              alt=""
            />
          </div>
          <div className="img">
            <img
              src="https://thaagam.org/static/main/assets/images/gallery/03.webp"
              alt=""
            />
          </div>
          <div className="img">
            <img
              src="https://thaagam.org/static/main/assets/images/cause/v_cake_cut_d.jpg"
              alt=""
            />
          </div>
          <div className="img">
            <img
              src="https://thaagam.org/static/main/assets/images/cause/d_briyani.jpg"
              alt=""
            />
          </div>
          <div className="img">
            <img
              src="https://thaagam.org/static/main/assets/images/cause/d_b_cake.jpg"
              alt=""
            />
          </div>
          <div className="img">
            <img
              src="https://thaagam.org/static/main/assets/images/cause/d_srilanka.jpg"
              alt=""
            />
          </div>
          <div className="img">
            <img
              src="https://thaagam.org/static/main/assets/images/cause/d_childcare.jpg"
              alt=""
            />
          </div>
          <div className="img">
            <img
              src="https://thaagam.org/static/main/assets/images/cause/d_christ.jpg"
              alt=""
            />
          </div>
          <div className="img">
            <img
              src="https://thaagam.org/static/main/assets/images/gallery/06.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallerys;
