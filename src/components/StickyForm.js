import React, { useState } from "react";
import "./StickyForm.css";

const StickyForm = ({
  title,
  originalPrice,
  discountedPrice,
  discountPercentage,
  saleType,
  onSubmit,
}) => {
  const [formData, setFormData] = useState({
    countryCode: "+91",
    phone: "",
    // Other form fields if needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="sticky-form-container">
      <div className="sticky-form">
        <h3>{title}</h3>
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
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
          <input type="date" placeholder="Choose Date of Travel" required />
          <select required>
            <option value="" disabled selected>
              Traveller Count
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <textarea placeholder="Message"></textarea>
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
