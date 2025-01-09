import React, { useState } from "react";
import "./LoginSignupForm.css"; 

const LoginSignupForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Login Data:", { email: formData.email, password: formData.password });
    } else {
      console.log("Signup Data:", formData);
    }
    
    setFormData({ email: "", password: "", name: "" });
  };

  
  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="form-container">
      <h2>{isLogin ? "Login" : "Signup"}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              required
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          {isLogin ? "Login" : "Signup"}
        </button>
      </form>
      <p onClick={toggleForm} className="toggle-link">
        {isLogin
          ? "Don't have an account? Signup here."
          : "Already have an account? Login here."}
      </p>
    </div>
  );
};

export default LoginSignupForm;
