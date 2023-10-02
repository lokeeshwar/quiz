
import React, { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegistration = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const isUsernameTaken = users.some(
      (user) => user.username === formData.username
    );

    if (isUsernameTaken) {
      alert("Username is already taken. Please choose a different one.");
      return;
    }


    users.push(formData);

    localStorage.setItem("users", JSON.stringify(users));


    alert("Registration successful. You can now log in.");

    setFormData({ username: "", password: "" });
  };

  return (
    <div>
      <h2>Register</h2>
      <form>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleRegistration}>
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
