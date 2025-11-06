"use client"
import React, { useState } from "react";
import Button from "../ui/button";

const FaqForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Name</label>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            className="w-full"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            className="w-full"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Your Question</label>
          <textarea
            name="question"
            rows="4"
            placeholder="Your Question"
            className="w-full"
            required
            value={formData.question}
            onChange={handleChange}
          ></textarea>
        </div>

        <Button
          value="Send Your Message"
          isButton
          onClick={handleSubmit}
          className="mt-4 w-full"
        />
      </form>
    </div>
  );
};

export default FaqForm;
