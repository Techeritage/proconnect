"use client";
import * as React from "react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Trash2 } from "lucide-react";

export const experienceOption = [
  { item: "Entry-Level", value: "Entry-Level" },
  { item: "Mid-Career", value: "Mid-Career" },
  { item: "Experienced", value: "Experienced" },
  { item: "Senior-Level", value: "Senior-Level" },
  { item: "3-5 years", value: "3-5" },
  { item: "5+ years", value: "5+" },
];

export const locationOption = [
  { item: "Remote", value: "Remote" },
  { item: "On-site", value: "On-site" },
  { item: "Hybrid", value: "Hybrid" },
];

const HireTalentForm = () => {
  const [form, setForm] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    jobTitle: "",
    jobDescription: "",
    requiredSkills: [""],
    experienceLevel: "",
    location: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSkillChange = (index, value) => {
    const updatedSkills = [...form.requiredSkills];
    updatedSkills[index] = value;
    setForm((prev) => ({ ...prev, requiredSkills: updatedSkills }));
  };

  const addSkill = () => {
    setForm((prev) => ({
      ...prev,
      requiredSkills: [...prev.requiredSkills, ""],
    }));
  };

  const removeSkill = (index) => {
    const updatedSkills = form.requiredSkills.filter((_, i) => i !== index);
    setForm((prev) => ({ ...prev, requiredSkills: updatedSkills }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section className="max-w-3xl mx-auto py-16">
      <form className="space-y-7" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-7 md:gap-3">
          <div className="grid gap-1">
            <label>Company Name</label>
            <input
              type="text"
              name="companyName"
              required
              value={form.companyName}
              onChange={handleFormChange}
            />
          </div>
          <div className="grid gap-1">
            <label>Fullname</label>
            <input
              type="text"
              name="contactPerson"
              required
              value={form.contactPerson}
              onChange={handleFormChange}
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-7 md:gap-3">
          <div className="grid gap-1">
            <label>Email</label>
            <input
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
              type="text"
              name="phone"
              required
              value={form.phone}
              onChange={handleFormChange}
            />
          </div>
        </div>
        <div className="grid gap-1">
          <label>Job Title</label>
          <input
            type="text"
            name="jobTitle"
            required
            value={form.jobTitle}
            onChange={handleFormChange}
          />
        </div>
        <div className="grid gap-1">
          <label>Job Description</label>
          <textarea
            type="text"
            name="jobDescription"
            rows={5}
            required
            value={form.jobDescription}
            onChange={handleFormChange}
          />
        </div>
        <div className="grid gap-1">
          <div className="myFlex justify-between">
            <label>Required Skills</label>
            <p onClick={addSkill} className="text-primary mr-6 cursor-pointer">
              Add Skill
            </p>
          </div>

          {form.requiredSkills.map((skill, index) => (
            <div key={index} className="flex items-center gap-2 mb-3">
              <input
                type="text"
                value={skill}
                onChange={(e) => handleSkillChange(index, e.target.value)}
                className="flex-1"
              />
              <button
                type="button"
                onClick={() => removeSkill(index)}
                className="text-red-500"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="grid gap-1">
            <SelectDemo
              name="experienceLevel"
              handleChange={handleSelectChange}
              label="Select Experience Level"
              options={experienceOption}
            />
          </div>
          <div className="grid gap-1">
            <SelectDemo
              label="Select Location"
              options={locationOption}
              name="location"
              handleChange={handleSelectChange}
            />
          </div>
        </div>
        <button className="w-full h-[56px] tracking-wider bg-primary rounded-lg text-white font-aeoBold">
          Submit
        </button>
      </form>
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

export default HireTalentForm;
