import React, { useState } from "react";
import { auth, database } from '../firebaseConfig'; // Adjust the path according to your project structure
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
      // Check if the user is authenticated
      const currentUser = auth.currentUser;

      if (currentUser) {
        // Get the ID token of the authenticated user
        const idToken = await currentUser.getIdToken();

        // Perform the POST request with the ID token in headers
        const res = await fetch("https://triponatiglobaltravel-default-rtdb.firebaseio.com/userDataRecord.json", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${idToken}`, // Adding the ID token here
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
          alert("Form Submitted Successfully!");
        } else {
          alert("Failed to submit form!");
        }
      } else {
        alert("User is not authenticated. Please sign in.");
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
            <option value="" disabled>
              Select Traveller Count
            </option>
            {[...Array(20).keys()].map((num) => (
              <option key={num} value={num + 1}>
                {num + 1}
              </option>
            ))}
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
