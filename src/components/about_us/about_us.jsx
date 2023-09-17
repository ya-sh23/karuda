import React from "react";
import "./about_us.css";
import Abhay from "../../assets/abhay.png";
import Yash from "../../assets/yash .png";

const about_us = () => {
  return (
    <div className="about">
      <div className="upper_about">
        <h1 className="h1">What is करुणा?</h1>
        <h3 className="h3">
          करुणा (Karuṇā) The word comes from the Sanskrit kara, meaning “to do”
          or “to make,” translated as compassion or mercy and sometimes as
          self-compassion or spiritual longing. At Karuda we are passionate
          about protection of domestic animals from violence and promoting their
          well - being . Our mission is to create a world where domestic animals
          are safe and get the care they deserve. Also to educate and empower
          others to take action , advocate for animal rights, and promote
          responsible pet ownership. We are committed to animal welfare and we
          emphasize to improve the overall well-being of domestic animals by
          addressing their physical , emotional , and social needs.
        </h3>
        <h1 className="us">Who are we? </h1>
      </div>
      <div className="lower_about">
        <div className="left">
          <div className="photo">
            <img src={Abhay} className="abhay" alt="" />
          </div>
          <h3>Abhay Singh</h3>
          <h3>Frontend Developer</h3>
          <div className="socials">
            <a href="https://mail.google.com" target="blank"><span class="material-symbols-outlined sc">mail</span></a>
            <a href="https://www.linkedin.com/in/abhay-singh-b5873822b/" target="blank"><span class="material-symbols-outlined sc">person</span></a>
            <a href="https://github.com/imAbhaySingh" target="blank"><span class="material-symbols-outlined sc"><span class="material-symbols-outlined sc">rocket_launch</span></span></a>
          </div>
          <div className="name">
            <h3>Mail</h3>
            <h3>Linkedin</h3>
            <h3>Github</h3>
          </div>
        </div>
        <div className="right">
          <div className="photo">
            <img className="yash" src={Yash} alt="" />
          </div>
          <h3>Yash Patel</h3>
          <h3>Backend Developer</h3>
          <div className="socials">
            <a href="https://mail.google.com" target="blank"><span class="material-symbols-outlined sc">mail</span></a>
            <a href="https://www.linkedin.com/in/yash-patel-3568b5276/" target="blank"><span class="material-symbols-outlined sc">person</span></a>
            <a href="https://github.com/ya-sh23" target="blank"><span class="material-symbols-outlined sc"><span class="material-symbols-outlined sc">rocket_launch</span></span></a>
          </div>
          <div className="name">
            <h3>Mail</h3>
            <h3>Linkedin</h3>
            <h3>Github</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about_us;
