import React, { useState } from "react";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login & Sign-up
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Simple validation
    if (!formData.email.includes("@")) {
      setError("Invalid email address");
      return;
    }
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (isLogin) {
      console.log("Logging in with:", formData);
    } else {
      console.log("Creating account with:", formData);
    }
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? "Login" : "Create Account"}</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
      </form>
      <p onClick={() => setIsLogin(!isLogin)} className="toggle">
        {isLogin ? "Need an account? Sign up" : "Already have an account? Login"}
      </p>
    </div>
  );
}

export default AuthForm;
