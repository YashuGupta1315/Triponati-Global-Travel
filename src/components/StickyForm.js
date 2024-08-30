import React, { useState } from "react";
import "./StickyForm.css";

const StickyForm = ({
  title,
  originalPrice,
  discountedPrice,
  discountPercentage,
  saleType,
  onSubmit, // Optional, can be used to handle form submission in parent component
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    travelDate: "",
    travellerCount: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, countryCode, travelDate, travellerCount, message } = formData;
    
    try {
      const res = await fetch("https://triponatiglobaltravel-default-rtdb.firebaseio.com/userDataRecord.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
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
          name: "",
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
    <div className="sticky-form-container">
      <div className="sticky-form">
        <h3>{title}</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
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
              {/* Add more options as needed */}
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
          <input
            type="date"
            name="travelDate"
            value={formData.travelDate}
            onChange={handleChange}
            placeholder="Choose Date of Travel"
            required
          />
          <select
            name="travellerCount"
            value={formData.travellerCount}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select Traveller Count</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="4">5</option>
            <option value="4">6</option>
            <option value="4">7</option>
            <option value="4">8</option>
            <option value="4">9</option>
            <option value="4">10</option>
            <option value="4">11</option>
            <option value="4">12</option>
            <option value="4">13</option>
            <option value="4">14</option>
            <option value="4">15</option>
            <option value="4">16</option>
            <option value="4">17</option>
            <option value="4">18</option>
            <option value="4">19</option>
            <option value="4">20</option>
            <option value="More than 20">More than 20</option>
          </select>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="price-info">
        <p>
          Starting from <s>{originalPrice}</s>
        </p>
        <h2>
          {discountedPrice} <span>per Adult</span>
        </h2>
        <p className="discount">{discountPercentage}% Off</p>
        <p className="sale-type">{saleType}</p>
      </div>
    </div>
  );
};

export default StickyForm;
