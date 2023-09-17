import React from 'react'
import Wfood from "../../assets/food.png";
import Cleaning from "../../assets/cleaning.png";
import Exercise from "../../assets/exercise.png";
import Med from "../../assets/medication.png";
import Toys from "../../assets/toys.png";
import './well.css'

const well = () => {
  return (
    <div className="well">
      <div className="upper_well">
        <h1>Why wellbeing?</h1>
        <h3>Pet wellbeing is not just a choice; it's a moral imperative. These creatures offer unwavering companionship, 
          emotional solace, and tangible health advantages. Owning a pet instills discipline, responsibility, 
          and fosters social bonds, nurturing empathy and purpose. Pets serve as therapy aids, 
          working partners, and educators, and overlooking their wellbeing is a grave ethical lapse. 
          It's a commitment we owe to these loyal companions and an investment in our own happiness and fulfillment.</h3>
      </div>
      <div className="well_lower">
        <div className="three">
          <a target='blank' href="https://www.embibe.com/exams/what-do-animals-eat/" className="wfood">
            <div className='wl'>
            <img src={Wfood} className='fi' alt="" />
            <h1>Food</h1>
            <h4>Click To Know More</h4>
          </div>
          </a>
          <a target='blank' href="https://www.pashudhanpraharee.com/hygiene-in-animal-housing/" className="cleaning">
          <div className='wl'>
            <img src={Cleaning} className='fi' alt="" />
            <h1>Cleaning</h1>
            <h4>Click To Know More</h4>
          </div>
          </a>
         <a target='blank' href="https://www.hopkinsmedicine.org/health/wellness-and-prevention/the-friend-who-keeps-you-young" className="Exercise">
         <div className='wl'>
            <img src={Exercise} className='fi' alt="" />
            <h1>Exercise</h1>
            <h4>Click To Know More</h4>
          </div>
         </a>
        </div>
        <div className="two">
          <a target='blank' href="https://www.avma.org/resources/pet-owners/petcare/your-pets-medications#:~:text=Commonly%20used%20medication%20types&text=Examples%20in%20dogs%20and%20cats,%2C%20inflammation%2C%20pain%20and%20lameness" className="Medication">
          <div className='wl'>
            <img src={Med} className='fi' alt="" />
            <h1>Medication</h1>
            <h4>Click To Know More</h4>
          </div>
          </a>
          <a target='blank' href="https://rspcavic.org/learn/7-reasons-why-dog-toys-are-so-important/#:~:text=It%20helps%20their%20learning%20%E2%80%93%20Enrichment,as%20foraging%2C%20exploring%20and%20playing" className="toys">
          <div className='wl'>
            <img src={Toys} className='fi' alt="" />
            <h1>Toys</h1>
            <h4>Click To Know More</h4>
          </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default well