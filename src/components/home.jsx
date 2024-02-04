import React from "react";

function Home() {
  return (
    <>
      <main>
        <section className="section-1">
          <img src="shapes/leftside.png" alt="" className="shapeLeft" />
          <div className="content-main">
            <h1>
              Feed a <br />
              homeless <br />
              Person
            </h1>
            <p>
              Feed a hungry stomach and Protect the poor <br /> from
              malnutrition and starvation.
            </p>
            <button>Donate ₹ 25/-</button>
          </div>
        </section>
        <section className="section-2">
          <div>
            <div className="about-us center-align">
              <div className="imgleft">
                <img src="about.jpg" alt="" />
              </div>
              <div className="para-right">
                <div className="thumb-txt">
                  <span>ABOUT US</span>
                </div>
                <div className="info1">
                  <h1>
                    <span className="highlight">Help Me</span> Foundation for
                    Help Children.
                  </h1>
                  <p>
                    We, Help Me Foundation, a non-government organization, are
                    working towards elevating the livelihoods of all living
                    beings. We believe humanity consists of people, animals, and
                    the environment. We uphold our commitment to all living
                    things by implementing innovative and effective programs for
                    the underprivileged, animal welfare, and the environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-3">
          <div className="divsec3">
            <div className="features">
              <div className="feature-graphics">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <img src="features/img-1.png" alt="" />
                  <h1
                    style={{
                      textAlign: "center",
                      marginTop: "2rem",
                      color: "white",
                      fontSize: "2.2rem",
                    }}
                  >
                    Cancer Treatment
                  </h1>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <img src="features/img-2.png" alt="" />
                  <h1
                    style={{
                      textAlign: "center",
                      marginTop: "2rem",
                      color: "white",
                      fontSize: "2.2rem",
                    }}
                  >
                    Hospital <br /> Build
                  </h1>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <img src="features/img-3.png" alt="" />
                  <h1
                    style={{
                      textAlign: "center",
                      marginTop: "2rem",
                      color: "white",
                      fontSize: "2.2rem",
                    }}
                  >
                    Environment Recycle
                  </h1>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <img src="features/img-4.png" alt="" />
                  <h1
                    style={{
                      textAlign: "center",
                      marginTop: "2rem",
                      color: "white",
                      fontSize: "2.2rem",
                    }}
                  >
                    Food & Build Home
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-4">
          <div className="howto">
            <h1>How To Help Us</h1>
            <p>
              You can join hands with Help Me Foundation by donating to us by
              helping all living beings. You can also contribute to the society
              by becoming a grassroot volunteer at Thaagam and help us cater to
              people. To create a powerful awareness on the impressionable minds
              of people by which we can create the importance of our
              organisation through social media in serving humanity.
            </p>
            <div style={{ margin: "1rem" }}>
              <button style={{ margin: "1rem" }}>Send Donation</button>
              <button style={{ margin: "1rem" }}>Become Volunteer</button>
              <button style={{ margin: "1rem" }}>Share Media</button>
            </div>
          </div>
        </section>
      </main>
      ;
    </>
  );
}

export default Home;
