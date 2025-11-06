"use client";

import React, { useState } from "react";
import Button from "../ui/button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    number: "",
    message: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "number") {
      const filtered = value.replace(/[^0-9+]/g, "");
      setFormData((prev) => ({ ...prev, [name]: filtered }));
      return;
    }

    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.agree) {
      alert("Please agree to the terms and conditions before submitting.");
      return;
    }

    console.log("Form Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
      <div>
        <label className="font-(family-name:--font-roboto-mono)">
          First Name
        </label>
        <input
          name="fname"
          type="text"
          placeholder="Enter your first name"
          className="w-full"
          required
          value={formData.fname}
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="font-(family-name:--font-roboto-mono)">
          Last Name
        </label>
        <input
          name="lname"
          type="text"
          placeholder="Enter your last name"
          className="w-full"
          required
          value={formData.lname}
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="font-(family-name:--font-roboto-mono)">
          Email Address
        </label>
        <input
          name="email"
          type="email"
          placeholder="Enter your email address"
          className="w-full"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="font-(family-name:--font-roboto-mono)">
          Phone number
        </label>
        <input
          name="number"
          type="text"
          placeholder="Enter your phone number"
          className="w-full"
          required
          value={formData.number}
          onChange={handleChange}
        />
      </div>

      <div className="md:col-span-2">
        <label className="font-(family-name:--font-roboto-mono)">Message</label>
        <textarea
          name="message"
          placeholder="Enter your message"
          className="w-full lg:aspect-6/1! h-auto!"
          required
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <div className="md:col-span-2 flex items-center justify-between flex-wrap gap-3">
        <label className="flex items-center gap-5 mb-3">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            required
          />
          <span className="pt-3">I agree to the terms and conditions.</span>
        </label>

        <Button
          value="Send Message"
          isButton
          type="submit"
          className="w-full"
        />
      </div>
    </form>
  );
};

export default ContactForm;
