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
                  <span className="highlight">Help Me</span> Foundation for Help
                  Children.
                </h1>
                <p>
                  We, Help Me Foundation, a non-government organization, are
                  working towards elevating the livelihoods of all living
                  beings. We believe humanity consists of people, animals, and
                  the environment. We uphold our commitment to all living things
                  by implementing innovative and effective programs for the
                  underprivileged, animal welfare, and the environment.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      ;
    </>
  );
}

export default Home;
