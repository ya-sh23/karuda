import React from "react";
import "./abuse.css";

const abuse = () => {
    const handleComplaintSubmission = () => {
        alert(
            "Thank you for reporting animal abuse. Your complaint has been submitted."
        );
    };
    return (
        <div className="report_page">
            <div className="aleft">
                <h2>Report Animal Abuse</h2>
                <p>
                    Animal abuse is a grave concern that affects the welfare of innocent
                    animals. It is our responsibility to protect and advocate for those
                    who cannot speak for themselves.
                </p>
                <h3>Why Report Animal Abuse?</h3>
                <p>Reporting animal abuse is crucial for several reasons:</p>
                <ul>
                    <li>
                        <strong>Protecting Animals:</strong> Reporting abuse can save
                        animals from suffering and harm.
                    </li>
                    <li>
                        <strong>Enforcing Laws:</strong> Authorities can take legal action
                        against abusers, preventing future abuse.
                    </li>
                    <li>
                        <strong>Raising Awareness:</strong> By reporting, you contribute to
                        raising awareness about animal welfare issues.
                    </li>
                    <li>
                        <strong>Supporting Organizations:</strong> Many organizations work
                        tirelessly to rescue and care for abused animals.
                    </li>
                </ul>
                <h3>How to Report Animal Abuse</h3>
                <p>To report animal abuse, follow these steps:</p>
                <ol>
                    <li>
                        <strong>Document the Situation:</strong> Take photos or videos, note
                        the date, time, and location.
                    </li>
                    <li>
                        <strong>Contact Authorities:</strong> Reach out to your local animal
                        control, police, or animal welfare agency.
                    </li>
                    <li>
                        <strong>Provide Details:</strong> Describe the situation, share your
                        evidence, and provide any known information about the abuser.
                    </li>
                    <li>
                        <strong>Stay Safe:</strong> Do not put yourself in harm's way while
                        reporting abuse. Safety is paramount.
                    </li>
                </ol>
                <p>
                    To file a complaint about animal abuse, please click the button below:
                </p>
            </div>
            <div className="aright">
                <p className="ap">
                    Thank you for taking a stand against animal abuse. Together, we can
                    make a difference and protect the voiceless.
                </p>
                <button onClick={handleComplaintSubmission}>File a Complaint</button>
            </div>
        </div>
    );
};

export default abuse;
