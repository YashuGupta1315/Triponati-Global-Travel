import React, { useState } from "react";
import "./AccordionStyle.css";
const AccordionAdv = ({ title, content, Max, MaxAltitude, MaxAlt, Over, OverNight, hotel, meal, Meal, MealDetail, Time, TimeDetail, dura }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
 
    <div className="accordion-item">
        <div className="accordion-title" onClick={toggleAccordion}>
          <h3>{title}</h3>
          <span>{isOpen ? "-" : "+"}</span>
        </div>
        {isOpen && (
          <div className="accordion-content">
            <p>{content}</p>
            </div>
          
        )}
      </div></>
  );
};
export default AccordionAdv;
