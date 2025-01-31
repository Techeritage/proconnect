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
import { X, UploadCloud } from "lucide-react";
import Image from "next/image";

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
    cvFile: null,
  });

  const fileInputRef = React.useRef(null);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    console.log(e);
    const file = e.target.files?.[0];
    console.log(file);
    if (file) {
      const allowedFormats = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedFormats.includes(file.type)) {
        alert("Invalid file format. Please upload a PDF or Word document.");
        return;
      }
      setForm((prev) => ({ ...prev, cvFile: file }));
    }
  };

  const handleDeleteFile = () => {
    setForm((prev) => ({ ...prev, cvFile: null }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // Add submission logic here (e.g., API call)
  };

  return (
    <section className="py-10 md:py-16 bg-bgGray px-[3%]">
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
                  <div className="max-w-[200px] mx-auto">
                    <Image
                      src="/file.jpg"
                      width={180}
                      height={130}
                      alt="file image"
                      className="h-[130px] mx-auto object-contain"
                    />
                    <p className="text-sm truncate font-aeoReg text-center">
                      {form.cvFile.name}
                    </p>
                  </div>

                  <button
                    onClick={handleDeleteFile}
                    className="absolute -right-2 -top-2 text-red-500 bg-bgGray border rounded-full p-1"
                  >
                    <X strokeWidth={1.2} size={16} />
                  </button>
                </div>
              ) : (
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="myFlex flex-col gap-1 cursor-pointer"
                >
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <UploadCloud />
                  <p className="text-sm font-aeoReg">
                    Click to select file(PDF, DOCX, DOC)
                  </p>
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
