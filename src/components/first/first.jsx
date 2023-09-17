import React from "react";
import "./first.css";
import Img from "../../assets/1.png";
import Well from "../../assets/wellbeing.png";
import Donate from "../../assets/donate.png";
import Health from "../../assets/healthacre.png";
import Abuse from "../../assets/abuse.png";

const first = () => {
  return (
    <div className="first">
      <div className="upper">
        <div className="content_part">
          <div className="heading">
            <h1 className="text_head">We take care of your pets</h1>
          </div>
          <div className="para">
            <p>
              Welcome to our karuda, where we’re dedicated to protecting and
              caring for all our furry friends! Join us in our mission to create
              a world where all domestic animals are safe from violence and
              receive the love they deserve. Discover valuable resources on
              responsible pet ownership, learn how to provide a nurturing
              environment and together let’s make a paw-sitive impact on animal
              welfare . Let's wag our tails and purr with purpose!! Because
              every life deserves Love.
            </p>
          </div>
          <a href="https://forms.gle/XTaPceuh54RyKPjT8" target="blank"><button className="button">Join Us</button></a>
        </div>
        <div className="img_part">
          <img src={Img} className="a_img" alt="Image" />
        </div>
      </div>
      <div className="lower">
       <a href="/well">
       <div className="dibba wellbeing">
          <div className="tag">Well Being</div>
          <img className="category" src={Well} alt="" />
        </div>
       </a>
        <a href="/healthc">
        <div className="dibba healthcare">
          <div className="tag">Healthcare</div>
          <img className="category" src={Health} alt="" />
        </div>
        </a>
        <a href="/abuse">
        <div className="dibba abuse">
          <div className="tag">Report Abuse</div>
          <img className="category" src={Abuse} alt="" />
        </div>
        </a>
        <a href="/donate">
          <div className="dibba donate">
          <div className="tag">Donate </div>
          <img className="category" src={Donate} alt="" />
        </div></a>
      </div>
    </div>
  );
};

export default first;
