import React, { useState } from "react";
import firebase from "firebase/app"; // Ensure firebase is properly initialized
import "firebase/auth"; // Import Firebase authentication
import { database } from './firebaseConfig'; // Import your Firebase configuration
import "./StickyForm.css"; // Import the CSS file

const HoneymoonForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    travelDate: "",
    destination: "",
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
    const { name, email, phone, countryCode, travelDate, destination } = formData;
    
    try {
      // Check if the user is authenticated
      const currentUser = firebase.auth().currentUser;

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
            destination
          }),
        });

        if (res.ok) {
          setFormData({
            name: "",
            email: "",
            phone: "",
            countryCode: "+91",
            travelDate: "",
            destination: "",
          });
          alert("Form Submitted!!");
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
        <h3>Honeymoon Packages | Kashmir | Singapore | Greece | Kerala | Maldives & Many More</h3>
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
          <input 
            type="text" 
            name="destination" 
            value={formData.destination} 
            onChange={handleChange} 
            placeholder="Type the Destination you want to travel with your better half!"
          />
          <button type="submit">Connect With An Expert!</button>
        </form>
      </div>
    </div>
  );
};

export default HoneymoonForm;
