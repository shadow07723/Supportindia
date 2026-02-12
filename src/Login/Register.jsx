import React, { useState } from "react";
import axios from "axios"; // Axios इस्तेमाल करना बेहतर है

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // URL में 'register' को छोटा (lowercase) रखें
      const response = await axios.post(
        "https://supportin-backend.onrender.com/api/auth/register",
        formData,
      );

      alert(response.data.message || "Registration Successful!");
    } catch (error) {
      console.error("Error:", error);
      alert(
        error.response?.data?.message ||
          error.response?.data?.error ||
          "Registration failed!",
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 w-80 mx-auto mt-10"
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        required
        className="border p-2"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
        className="border p-2"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        required
        className="border p-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2">
        Register
      </button>
    </form>
  );
}

export default Register;
