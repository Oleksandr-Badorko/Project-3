import React, { useState } from "react";
import "./ContactSection.scss";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    // Reset the form after submission
    setFormData({
      fullName: "",
      username: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      message: "",
    });

    setIsSubmitted(true);
  };

  return (
    <section className="form" id="contact">
      <div className="form-container">
        <h1 className="form-title">Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="main-user-info">
            <div className="user-input-box">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter Full Name"
                required
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div className="user-input-box">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter Username"
                required
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="user-input-box">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="user-input-box">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter Phone Number"
                required
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className="user-input-box">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter Password"
                required
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="user-input-box">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <div className="user-input-box user-text-area">
              <label className="user-text-area-title" htmlFor="message">Write your message here:</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your comment/message here:"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div className="form-submit-btn">
            <input type="submit" value="Send" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;