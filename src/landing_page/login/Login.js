import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import config from "../../config";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!email || !password) {
        handleError("All fields are required");
        return;
      }

      const { data } = await axios.post(
        `${config.apiUrl}/login`,
        {
          ...inputValue,
        },
        { 
          withCredentials: true,
          timeout: 10000
        }
      );
      
      const { success, message, user } = data;
      if (success) {
        handleSuccess(message);
        localStorage.setItem('user', JSON.stringify(user));
        setTimeout(() => {
          const from = location.state?.from?.pathname || "/dashboard";
          navigate(from, { replace: true });
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.error('Login error:', error);
      if (error.response) {
        handleError(error.response.data?.message || "Invalid credentials");
      } else if (error.request) {
        handleError("Cannot connect to the server. Please try again later.");
      } else {
        handleError("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="form_container">
      <h2>Login Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
        </div>
        <button type="submit">Submit</button>
        <span>
          Don't have an account? <Link to="/signup">Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;