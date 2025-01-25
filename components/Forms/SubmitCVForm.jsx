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
import { X } from "lucide-react";
import { UploadCloud } from "lucide-react";

export const experienceOption = [
  { item: "Entry-Level", value: "Entry-Level" },
  { item: "Mid-Career", value: "Mid-Career" },
  { item: "Experienced", value: "Experienced" },
  { item: "Senior-Level", value: "Senior-Level" },
  { item: "3-5 years", value: "3-5" },
  { item: "5+ years", value: "5+" },
];

const SubmitCVForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    jobTitle: "",
    experienceLevel: "",
    cvFile: "",
  });

  const fileInputRef = React.useRef(null);

  // const handleButtonClick = () => {
  //   if (fileInputRef.current) {
  //     fileInputRef.current.click();
  //   }
  // };

  // const handleFileChange = (e) => {
  //   const file = e.target.files?.[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       if (typeof reader.result === "string") {
  //         form.setValue(
  //           name as Path<TFieldValues>,
  //           reader.result as PathValue<TFieldValues, Path<TFieldValues>>
  //         );
  //       }
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section className="py-10 bg-bgGray px-[3%]">
      <div className="max-w-3xl mx-auto">
        <form className="space-y-7" onSubmit={handleSubmit}>
          <div className="grid gap-1">
            <label>Fullname</label>
            <input
              className="input"
              type="text"
              name="name"
              required
              value={form.name}
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
          <div className="grid md:grid-cols-2 gap-7 md:gap-3">
            <div className="grid gap-1">
              <label>Job Title</label>
              <input
                className="input"
                type="text"
                name="jobTitle"
                required
                value={form.jobTitle}
                onChange={handleFormChange}
              />
            </div>
            <div className="grid gap-1">
              <label>Experience</label>
              <SelectDemo
                name="experienceLevel"
                handleChange={handleSelectChange}
                label="Select Experience Level"
                options={experienceOption}
              />
            </div>
          </div>
          <div className="grid gap-3">
            <label>Upload CV</label>
            <div className="bg-white h-[180px] ring-1 ring-gray-300 rounded-lg myFlex justify-center">
              {form.cvFile ? (
                <div className="relative">
                  <Image
                    src={form.cvFile}
                    width={150}
                    height={150}
                    alt="Preview"
                    className="rounded-lg w-[150px] h-[150px] object-cover"
                  />
                  <button
                    //onClick={handleDeleteImage}
                    className="absolute -right-2 -top-2 text-red-500 bg-white rounded-full p-1"
                  >
                    <X strokeWidth={1.2} size={14} />
                  </button>
                </div>
              ) : (
                <div
                  //onClick={handleButtonClick}
                  className="myFlex flex-col gap-1"
                >
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    //onChange={handleFileChange}
                    className="hidden"
                  />
                  <UploadCloud />
                  <p className="text-sm">Click to select file</p>
                </div>
              )}
            </div>
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

export default SubmitCVForm;
