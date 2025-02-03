"use client";

import * as React from "react";
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
import useFormSubmission from "@/hooks/useFormSubmission";

export const experienceOption = [
  { item: "Entry-Level", value: "Entry-Level" },
  { item: "Mid-Career", value: "Mid-Career" },
  { item: "Experienced", value: "Experienced" },
  { item: "Senior-Level", value: "Senior-Level" },
  { item: "3-5 years", value: "3-5" },
  { item: "5+ years", value: "5+" },
];

const SubmitCVForm = () => {
  const {
    formData,
    handleChange,
    handleSelectChange,
    handleFileChange,
    handleDeleteFile,
    handleSubmit,
    isLoading,
    error,
  } = useFormSubmission({
    endpoint: "/api/hireTalent/cvUpload/upload",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      jobTitle: "",
      experience: "",
      cv: null,
    },
    validate: (data) => {
      console.log(data);
      if (
        !data.fullName ||
        !data.email ||
        !data.phone ||
        !data.jobTitle ||
        !data.experience ||
        !data.cv
      ) {
        return "All fields are required.";
      }
      if (!data.cv) {
        return "Please upload your CV.";
      }
      return null;
    },
  });

  const fileInputRef = React.useRef(null);

  return (
    <section className="py-10 md:py-16 bg-bgGray px-[3%]">
      <div className="max-w-3xl mx-auto">
        <form className="space-y-7" onSubmit={handleSubmit}>
          <div className="grid gap-1">
            <label>FullName</label>
            <input
              className="input"
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-1">
              <label>Phone</label>
              <input
                className="input"
                type="text"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
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
                value={formData.jobTitle}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-1">
              <label>Experience</label>
              <SelectDemo
                name="experience"
                handleChange={handleSelectChange}
                label="Select Experience Level"
                options={experienceOption}
              />
            </div>
          </div>

          <div className="grid gap-3">
            <label>Upload CV</label>
            <div className="bg-white h-[180px] ring-1 ring-gray-300 rounded-lg myFlex justify-center">
              {formData.cv ? (
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
                      {formData.cv.name}
                    </p>
                  </div>

                  <button
                    type="button"
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
                    Click to select file (PDF, DOCX, DOC)
                  </p>
                </div>
              )}
            </div>
          </div>

          <button
            className="w-full h-[56px] tracking-wider bg-primary rounded-lg text-white font-aeoBold"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>

          {error && <p className="text-red-500 text-sm">{error}</p>}
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
