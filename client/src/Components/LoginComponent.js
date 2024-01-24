import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { authUser } from "../api";
export const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const emailInput = (e) => {
    setEmail(e.target.value);
  };

  const passwordInput = (e) => {
    setPassword(e.target.value);
  };

  const getData = async (e) => {
    e.preventDefault();
    const response = await authUser({ email, password });

    if (response.user) {
      localStorage.setItem("token", response.token);
      navigate("/");
    } else {
      alert("Please check you email and password");
    }

    console.log(response);
  };

  return (
    <div className="loginComponentMain">
      <h2>
        Login / Don't have account? <NavLink to="/SignupPage">Signup</NavLink>
      </h2>
      <form>
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

        <button value="Sign In" className="btn" onClick={getData}>
          Signin
        </button>
      </form>

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
