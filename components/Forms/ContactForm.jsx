"use client";
import * as React from "react";
import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    contactPerson: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section className="py-16 max-md:mt-10 px-[3%] bg-bgGray">
      <div className="max-w-3xl mx-auto">
        <p className="text-primary font-aeoReg">LET'S TALK</p>
        <h3 className="font-aeoBold">Free Consultation</h3>
        <form className="space-y-7 mt-10" onSubmit={handleSubmit}>
          <div className="grid gap-1">
            <label>Fullname</label>
            <input
              className="input"
              type="text"
              name="contactPerson"
              required
              value={form.contactPerson}
              onChange={handleFormChange}
            />
          </div>
          <div className="grid md:grid-cols-2 gap-7 md:gap-3">
            <div className="grid gap-1">
              <label>Email</label>
              <input
                className="input"
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleFormChange}
              />
            </div>
            <div className="grid gap-1">
              <label>Phone</label>
              <input
                className="input"
                type="text"
                name="phone"
                required
                value={form.phone}
                onChange={handleFormChange}
              />
            </div>
          </div>
          <div className="grid gap-1">
            <label>Message</label>
            <textarea
              type="text"
              name="message"
              rows={5}
              required
              value={form.message}
              onChange={handleFormChange}
            />
          </div>

          <button className="w-full h-[56px] tracking-wider bg-primary rounded-lg text-white font-aeoBold">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export function SelectDemo({ label, options, name, handleChange }) {
  return (
    <Select name={name} onValueChange={(value) => handleChange(name, value)}>
      <SelectTrigger className="w-full select">
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((opt, i) => (
            <SelectItem key={i} value={opt.value}>
              {opt.item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default ContactForm;
