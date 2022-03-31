import React, { useState } from "react";
import "./styles.css";

export default function Cards() {
  const [radioState, setRadioState] = useState("Monthly");

  const [basicPlan, setBasicPlan] = useState(19.99);
  const [advancedPlan, setAdvancedPlan] = useState(24.99);
  const [businessPlan, setBusinessPlan] = useState(39.99);

  function handleRadioState() {
    setRadioState(radioState === "Monthly" ? "Annually" : "Monthly");

    if (radioState === "Monthly") {
      setBasicPlan(Math.floor(basicPlan / 12) + ".99");
      setAdvancedPlan(Math.floor(advancedPlan / 12) + ".99");
      setBusinessPlan(Math.floor(businessPlan / 12) + ".99");
    } else {
      setBasicPlan(29.99);
      setAdvancedPlan(59.99);
      setBusinessPlan(79.99);
    }
  }

  return (
    <div>
      <div className="prices-title__div">
        <h1 className="prices-title">Our Pricing</h1>
      </div>
      <div className="radio-div">
        <label>Annually</label>
        <input
          type="checkbox"
          id="plan_type"
          value={radioState}
          onClick={() => handleRadioState()}
        />
        <label>Monthly</label>
      </div>
      <div className="pricing-div">
        <div className="align-items-div">
          <div className="basic-pricing" id="basic-pricing">
            <p className="plan-type">Basic</p>
            <p className="plan-price">$ {basicPlan}</p>
            <p className="plan-storage">500 GB Storage</p>
            <p className="plan-users">2 users allowed</p>
            <p className="plan-upload">Send up to 3 GB</p>
            <button className="button" id="standard-button">
              Lean more
            </button>
          </div>

          <div className="professional-pricing">
            <p className="plan-type" id="special-title">
              Professional
            </p>
            <p className="plan-price" id="special-price">
              $ {advancedPlan}
            </p>
            <hr className="solid" />
            <p className="plan-storage">1 TB Storage</p>
            <hr className="solid" />
            <p className="plan-users">5 users allowed</p>
            <hr className="solid" />
            <p className="plan-upload">Send up to 10 GB</p>
            <hr className="solid" />
            <button className="special-button" id="special-button">
              Lean more
            </button>
          </div>

          <div className="master-pricing" id="master-pricing">
            <p className="plan-type">Master</p>
            <p className="plan-price">$ {businessPlan}</p>
            <p className="plan-storage">2 TB Storage</p>
            <p className="plan-users">10 users allowed</p>
            <p className="plan-upload">Send up to 20 GB</p>
            <button className="button" id="standard-button">
              Lean more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
