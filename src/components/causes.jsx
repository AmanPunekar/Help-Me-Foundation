import React, { useState } from "react";

function Causes() {
  return (
    <>
      <section className="section-cause">
        <img src="shapes/leftside.png" alt="" className="shapeLeft" />
        <div className="content-main" style={{ bottom: "72%" }}>
          <h1>
            Give <br />
            Egg & Milk
          </h1>
          <p>
            Providing eggs and milk to children is not just <br /> nourishing
            their bodies.It's feeding their dreams <br /> and giving them a
            brighter, healthier future
          </p>
          <button>Donate ₹ 30/-</button>
        </div>
      </section>

      <div style={componentStyle}>
        {data.map((item) => (
          <Item
            key={item.id}
            img={item.img}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
}

function Item({ title, img, price, description }) {
  const [isHovered, setIsHovered] = useState(false);

  const itemStyle = {
    border: "1px solid #ccc",
    borderRadius:".5rem",
    padding: "10px",
    width: "100%",
    justifyContent: "center",
    textAlign: "center",
    cursor: "pointer",
    backgroundColor: isHovered ? "#f0f0f0" : "transparent",
  };

  return (
    <div
      style={itemStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={img} alt="" style={circleImage} />
      <h3 style={{ fontSize: "1.5rem" }}>{title}</h3>
      <p>{price}</p>
      <p>{description}</p>
    </div>
  );
}

// styles of this cards
const componentStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: "20px",
  margin: "2rem auto",
  width: "90%",
};

const circleImage = {
  borderRadius: "50%",
  width: "50%",
  objectFit: "cover",
};

// data
const data = [
  {
    id: 1,
    img: "https://thaagam.org/static/main/assets/images/cause/d_homeless_food.jpg",
    title: "Feed a Homeless Person",
    price: "₹ 25 / Person",
    description:
      "Feed a hungry stomach and Protect the poor from malnutrition and starvation.",
  },
  {
    id: 2,
    img: "	https://thaagam.org/static/main/assets/images/cause/d_egg_milk.jpg",
    title: "Give a Egg & Milk",
    price: "₹ 30 / Person",
    description:
      "Providing eggs and milk to children is not just nourishing their bodies; it's feeding their dreams and giving them a brighter, healthier future.",
  },
  {
    id: 3,
    img: "	https://thaagam.org/static/main/assets/images/cause/d_wish_video.jpg",
    title: "Get a Wish Video",
    price: "₹ 2500 / 100 Persons",
    description:
      "Feed the homeless people and children and get wish video from them.",
  },
  {
    id: 4,
    img: "https://thaagam.org/static/main/assets/images/cause/d_christ.jpg",
    title: "Donate a Gift for Hospital Childreno",
    price: "Starting From ₹ 100",
    description:
      "Surprise the children in the hospital by giving them gifts that are affordable for you.",
  },
  {
    id: 5,
    img: "		https://thaagam.org/static/main/assets/images/cause/d_b_cake.jpg",
    title: "Virtual cake Cutting Celebration",
    price: "₹ 4000 / celebration",
    description:
      "Celebrate an Exquisitely tender Birthday party in the most vibrant way possible with the marvelous kids.",
  },
  {
    id: 6,
    img: "https://thaagam.org/static/main/assets/images/cause/d_orp.jpg",
    title: "Support an Orphanage",
    price: "Staring from ₹ 1500",
    description: "Help us support orphanages by joining hands with us.",
  },
  {
    id: 7,
    img: "https://thaagam.org/static/main/assets/images/cause/d_edu.jpg",
    title: "Sponsor a Child Education",
    price: "Staring ₹ 800",
    description:
      "Support our Education initiative to educate homeless children living on the streets.",
  },
  {
    id: 8,
    img: "	https://thaagam.org/static/main/assets/images/cause/d_childcare.jpg",
    title: "Give a Grocery Kit",
    price: "₹ 500 / Kit",
    description:
      "Empower a Transgender and protect them From selling their body and dignity for their daliy marvelousby giving them a grocery kit.",
  },
  {
    id: 9,
    img: "https://thaagam.org/static/main/assets/images/cause/d_dog.jpg",
    title: "Feed a StrayDog",
    price: "₹ 35 / Stray Dog",
    description:
      "Thousands of Dogs die due to Starvation everyday in India. Help us Protect them.",
  },
];

export default Causes;
