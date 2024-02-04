import React from "react";
import Banner from "./banner";

function About() {
  return (
    <>
      <Banner bannerSrc="education-banner.jpg" style={{ width: "100vw" }} />
      <div className="blog">
        <div className="blog1">
          <img
            src="	https://thaagam.org/static/main/assets/images/blog/img-7.jpg"
            alt=""
          />
          <h1>Feeding Homeless Person</h1>
          <p>
            Every day, we dedicate our efforts to reach out to homeless
            individuals in our community, offering them not just a meal, but a
            ray of hope. With your support, we can make a real difference in the
            lives of those facing the harsh realities of homelessness. Together,
            we can provide nourishment, comfort, and a renewed sense of dignity
            to those in need.
          </p>
        </div>

        <div className="blog2">
          <img
            src="	https://thaagam.org/static/main/assets/images/blog/img-5.jpg"
            alt=""
          />
          <h1>Help the helpless who need you.</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
