import React, { useState } from "react";
import "./AccordionStyle.css";
const Accordion = ({ title, content,props }) => {
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
                    <i className={props.Max}></i>
                    <p>{props.MaxAltitude}</p>
                    <p>{props.MaxAlt}</p>
            </div>
            <div className="box">
                    <i className={props.Over}></i>
                    <p>{props.OverNight}</p>
                    <p>{props.hotel}</p>
            </div>
            <div className="box">
                    <i className={props.meal}></i>
                    <p>{props.Meal}</p>
                    <p>{props.MealDetail}</p>
            </div>
            <div className="box">
                    <i className={props.Time}></i>
                    <p>{props.TimeDetail}</p>
                    <p>{props.dura}</p>
            </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
