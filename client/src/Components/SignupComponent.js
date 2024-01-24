import React from "react";
import { createUser } from "../api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignupComponent = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const userNameInput = (e) => {
    setUsername(e.target.value);
  };

  const emailInput = (e) => {
    setEmail(e.target.value);
  };

  const passwordInput = (e) => {
    setPassword(e.target.value);
  };

  const submitData = async (e) => {
    e.preventDefault();
    const response = await createUser({ username, email, password });
    navigate("/LoginPage");
    console.log(response);
  };
  return (
    <div className="SignupComponentMain">
      <h2>Signup</h2>
      <label htmlFor="username">Username:</label>
      <input
        onChange={userNameInput}
        type="text"
        id="username"
        name="username"
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        onChange={emailInput}
        type="email"
        id="email"
        name="email"
        required
      />

      <label htmlFor="password">Password:</label>
      <input
        onChange={passwordInput}
        type="password"
        id="password"
        name="password"
        required
      />

      <button onClick={submitData} className="btn">
        Signup
      </button>

      <div className="forgot-password">
        <a href="#">Forgot Password?</a>
      </div>

      <div className="social-login">
        <p>Continue with:</p>
        <a href="#" className="social-login-btn facebook">
          Facebook
        </a>
        <a href="#" className="social-login-btn google">
          Google
        </a>
      </div>
    </div>
  );
};
