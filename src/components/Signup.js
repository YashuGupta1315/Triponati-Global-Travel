// src/components/Signup.js
import React, { useState } from "react";
import "./SignupStyle.css";

const Signup = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="auth-container">
      <h1>{isSignUp ? "Sign Up" : "Sign In"}</h1>
      <form>
        <label>
          Username:
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            placeholder="Set your password"
          />
        </label>
        {isSignUp && (
          <label>
            Confirm Password:
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
            />
          </label>
        )}
        <button type="submit">{isSignUp ? "Sign Up" : "Sign In"}</button>
      </form>
      <button className="toggle-button" onClick={toggleForm}>
        {isSignUp
          ? "Already have an account? Sign In"
          : "Don't have an account? Sign Up"}
      </button>
    </div>
  );
};

export default Signup;
