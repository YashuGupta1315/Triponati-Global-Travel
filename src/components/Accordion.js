import React, { useState } from "react";
import "./AccordionStyle.css";

const Accordion = ({ title, content, Max, MaxAltitude, MaxAlt, Over, OverNight, hotel, meal, Meal, MealDetail, Time, TimeDetail, dura }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && (
        <div className="accordion-content">
          <p>{content}</p>
          <div className="main">
            <div className="container">
              <div className="box">
                <i className={Max}></i>
                <p>{MaxAltitude}</p>
                <p>{MaxAlt}</p>
              </div>
              <div className="box">
                <i className={Over}></i>
                <p>{OverNight}</p>
                <p>{hotel}</p>
              </div>
              <div className="box">
                <i className={meal}></i>
                <p>{Meal}</p>
                <p>{MealDetail}</p>
              </div>
              <div className="box">
                <i className={Time}></i>
                <p>{TimeDetail}</p>
                <p>{dura}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
