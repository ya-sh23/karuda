import React from "react";
import "./Healthc.css";

const Healthc = () => {
  return (
    <div id="healthc">
      <div className="hupper">
        <h1 className="hheading">Ensuring the Health and Joy of Your Pets</h1>
        <p>
          Taking care of your pets is an act of love and responsibility. Beyond
          providing companionship and joy, proper pet care involves ensuring
          their physical and mental well-being. This entails offering a balanced
          diet, regular veterinary check-ups, exercise, grooming, safety
          precautions, socialization, and affection. By nurturing these aspects,
          you not only enhance your pet's quality of life but also strengthen
          the unique bond between you and your furry friend, resulting in a
          happier, healthier, and fulfilling partnership.
        </p>
        <h3 id="checkups-title">Regular Check-Ups and Vaccinations</h3>
        <p className="paragraph">
          Regular check-ups and vaccinations are{" "}
          <span className="highlight">
            crucial for keeping your pet healthy
          </span>
          . Just like humans, pets need preventive care to stay in top shape.
          Here's why these visits matter:
        </p>
        <h3 className="subheading">Regular Check-Ups:</h3>
        <p className="paragraph">
          Regular veterinary check-ups are essential for early detection of
          health issues. During these visits, your veterinarian will examine
          your pet from nose to tail, checking for any signs of illness or
          discomfort. They may also perform routine tests to monitor your pet's
          overall health. These visits help catch problems before they become
          serious and costly to treat.
        </p>
        <h3 className="subheading">Vaccinations:</h3>
        <p className="paragraph">
          Vaccinations are your pet's first line of defense against a range of
          diseases. Depending on your pet's species, age, and lifestyle, your
          veterinarian will recommend a vaccination schedule. Common vaccines
          include those for rabies, distemper, parvovirus, and feline leukemia,
          among others. These vaccines protect not only your pet but also the
          community by preventing the spread of contagious diseases.
        </p>
        <p className="paragraph">
          Remember to keep a record of your pet's vaccinations and schedule
          regular check-ups as advised by your veterinarian.
        </p>
      </div>
      <div className="hlower ">
        <div className="dr hd">
            <h1>Online Dr.</h1>
            <h2>Click On Me</h2>
        </div>
        <div className="symptoms hd">
            <h1>For Symptoms</h1>
            <h2>Click On Me</h2>
        </div>
        <div className="medication hd">
            <h1>For regular Medication</h1>
            <h2>Click On Me</h2>
        </div>
      </div>
    </div>
  );
};

export default Healthc;
