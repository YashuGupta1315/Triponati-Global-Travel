import React, { useState } from "react";
import "./TravelPlanStyle.css"; // Import the CSS file

const TravelPlan = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    countryCode: "+91",
    travelDate: "",
    travellerCount: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    
    const { fullName, email, phone, countryCode, travelDate, travellerCount, message } = formData;
    
    try {
      const res = await fetch("https://triponatglobaltravel-default-rtdb.firebaseio.com/userDataRecord.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          countryCode,
          travelDate,
          travellerCount,
          message,
        }),
      });
  
      if (res.ok) {
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          countryCode: "+91",
          travelDate: "",
          travellerCount: "",
          message: "",
        });
        alert("Form Submitted!!");
      } else {
        alert("Failed to submit form!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the form.");
    }
  };
  

  return (
    <div className="form-overlay">
      <div className="form-container">
        <div className="form-header">
          <h2>
            Save up to <span className="highlight">50% OFF</span>
          </h2>
          <p>
            We’ll be needing some of your basic details to help you better with
            your trip
          </p>
        </div>
        <form onSubmit={handleSubmit} method="POST">
          <div className="form-group">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name*"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email*"
              className="form-input"
              required
            />
          </div>
          <div className="form-group phone-group">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="phone-code"
            >
              <option value="+91">+91</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+61">+61</option>
              <option value="+81">+81</option>
              <option value="+971">+971</option>
              <option value="+247">+247</option>
              <option value="+376">+376</option>
              <option value="+93">+93</option>
              <option value="+355">+355</option>

            </select>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone*"
              className="form-input phone-input"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              name="travelDate"
              value={formData.travelDate}
              onChange={handleChange}
              placeholder="Travel Date*"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              name="travellerCount"
              value={formData.travellerCount}
              onChange={handleChange}
              placeholder="Traveller Count*"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message..."
              className="form-input"
              rows="3"
            ></textarea>
          </div>
          <button type="submit" className="form-button" >
            Connect with an Expert
          </button>
        </form>
      </div>
    </div>
  );
};

export default TravelPlan;
