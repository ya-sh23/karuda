import React from "react";
import "./donate.css";
import Food from "../../assets/food.png";
import Money from "../../assets/money.png";

const donate = () => {
  return (
    <div className="d">
      <div className="donate_first">
        <h1>Join Us in Changing Lives?</h1>
        <h3>
          Donating to करुणा (Karuda) is a powerful way to protect and improve
          the lives of animals, conserve endangered species, advocate for animal
          rights, and address environmental challenges. By supporting the
          organizations, you contribute to the rescue and care of animals in
          need, promote responsible animal treatment, and indirectly aid
          environmental conservation efforts. Your donation not only fosters
          positive change for animals but also brings personal fulfillment and
          inspires broader societal shifts towards compassion and ethical
          choices, making it a worthwhile and impactful investment in a more
          humane and sustainable world.
        </h3>
      </div>
      <div className="donate_second">
        <a href="https://forms.gle/dmfGk3J4FkrXjrgx8" target="blank">
        <div className="food">
          <img src={Food} alt="picture" />
          <h2>Donate Food</h2>
          <h4>Click on Me</h4>
        </div>
        </a>
        <a href="https://forms.gle/PkkAbshLZfPXhNjV9" target="blank">
        <div className="money">
          <img src={Money} alt="picture" />
          <h2>Donate Fund</h2>
          <h4>Click on Me</h4>
        </div>
        </a>
      </div>
    </div>
  );
};

export default donate;
