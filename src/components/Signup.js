import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./SignupStyle.css";

const Signup = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    country: "",
    email: "",
    password: ""
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = () => {
    const errors = {};
    if (!formValues.name) errors.name = "Name is required";
    if (!formValues.country) errors.country = "Country is required";
    if (!formValues.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "Email is invalid";
    }
    if (!formValues.password) {
      errors.password = "Password is required";
    } else if (formValues.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="form-section">
          <div className="back-button"> <Link to="/">← Back</Link></div>
          <div className="new-traveler">Triponati Global Travel</div>
          <h1>Explore travel destinations</h1>
          <p>The best places for your wild adventures.</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formValues.name}
              onChange={handleInputChange}
            />
            {formErrors.name && <span className="error-message">{formErrors.name}</span>}

            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formValues.country}
              onChange={handleInputChange}
            />
            {formErrors.country && <span className="error-message">{formErrors.country}</span>}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleInputChange}
            />
            {formErrors.email && <span className="error-message">{formErrors.email}</span>}

            <input
              type="password"
              name="password"
              placeholder="Create password"
              value={formValues.password}
              onChange={handleInputChange}
            />
            {formErrors.password && <span className="error-message">{formErrors.password}</span>}

            <button className="signup-button" type="submit">Sign up</button>
          </form>

          {isSubmitted && <p className="success-message">Sign up successful!</p>}

          <p className="signin-link">
            Already a traveler? <a href="#">Sign in</a>
          </p>
        </div>
        <div className="quote-section">
          <blockquote>
            "Great things never came from comfort zones."
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Signup;
