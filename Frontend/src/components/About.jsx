import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            The Eat & Treats welcomes you to an outstanding menu, delicately planned by our Executive Chef from India, giving you the authentic taste of North Indian cuisine added with Goan and South Indian dishes.By visiting “The EAT & TREATS”, you will be able to sample the authentic characteristic flavour of North Indian cuisine. It is not about eating out-but the experience itself.To compliment your fine meal and enhance your dining experience with us, The Eat & Treats offers an outstanding wine selection thoughtfully compiled and recommended by our team of wine consultants and provides a broad selection of what the diverse winelands of the fairest Western Cape has to offer.
            </p>
            <Link to={"/"}>
              Explore Menu{""}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;