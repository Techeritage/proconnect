"use client";

import { Trash2 } from "lucide-react";
import SelectBtn from "../SelectBtn";
import Editor from "../Editor";
import useFormSubmission from "@/hooks/useFormSubmission";
import { useOneJob } from "@/services/queries";
import { useEffect } from "react";

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
  { item: "Abia", value: "Abia" },
  { item: "Adamawa", value: "Adamawa" },
  { item: "Akwa Ibom", value: "Akwa Ibom" },
  { item: "Anambra", value: "Anambra" },
  { item: "Bauchi", value: "Bauchi" },
  { item: "Bayelsa", value: "Bayelsa" },
  { item: "Benue", value: "Benue" },
  { item: "Borno", value: "Borno" },
  { item: "Cross River", value: "Cross River" },
  { item: "Delta", value: "Delta" },
  { item: "Ebonyi", value: "Ebonyi" },
  { item: "Edo", value: "Edo" },
  { item: "Ekiti", value: "Ekiti" },
  { item: "Enugu", value: "Enugu" },
  { item: "Gombe", value: "Gombe" },
  { item: "Imo", value: "Imo" },
  { item: "Jigawa", value: "Jigawa" },
  { item: "Kaduna", value: "Kaduna" },
  { item: "Kano", value: "Kano" },
  { item: "Katsina", value: "Katsina" },
  { item: "Kebbi", value: "Kebbi" },
  { item: "Kogi", value: "Kogi" },
  { item: "Kwara", value: "Kwara" },
  { item: "Lagos", value: "Lagos" },
  { item: "Nasarawa", value: "Nasarawa" },
  { item: "Niger", value: "Niger" },
  { item: "Ogun", value: "Ogun" },
  { item: "Ondo", value: "Ondo" },
  { item: "Osun", value: "Osun" },
  { item: "Oyo", value: "Oyo" },
  { item: "Plateau", value: "Plateau" },
  { item: "Rivers", value: "Rivers" },
  { item: "Sokoto", value: "Sokoto" },
  { item: "Taraba", value: "Taraba" },
  { item: "Yobe", value: "Yobe" },
  { item: "Zamfara", value: "Zamfara" },
  { item: "FCT - Abuja", value: "FCT - Abuja" },
];

const JobCreationForm = ({ id }) => {
  const { data, isLoading: loading } = useOneJob(id || null);
  const {
    formData,
    setFormData,
    handleChange,
    handleSelectChange,
    handleSubmit,
    isLoading,
    error,
    handleSkillChange,
    addSkill,
    removeSkill,
  } = useFormSubmission({
    id: id,
    endpoint: id ? `/api/jobs/updateJobs/${id}` : "/api/jobs/postJobs",
    defaultValues: {
      companyName: "",
      jobTitle: "",
      jobDescription: "",
      requiredSkills: [""],
      experience: "",
      location: "",
    },
    validate: (formData) => {
      if (!formData.companyName || !formData.jobTitle) {
        return "Company Name and Job Title are required.";
      }
      return null;
    },
  });

  useEffect(() => {
    if (data?.data) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        companyName: data.data.companyName || "",
        jobTitle: data.data.jobTitle || "",
        jobDescription: data.data.jobDescription || "",
        requiredSkills: data.data.requiredSkills || [""],
        experience: data.data.experience || "",
        location: data.data.location || "",
      }));
    }
  }, [data, setFormData]);

  const handleEditorChange = (content) => {
    handleChange({ target: { name: "jobDescription", value: content } });
  };

  if (id && loading) return <p>Loading...</p>;

  return (
    <section>
      <form className="space-y-7 mt-10" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-7 md:gap-3">
          <div className="grid gap-1">
            <label>Company Name</label>
            <input
              className="input"
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>
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
        </div>

        <div className="grid gap-1">
          <label>Job Description</label>
          <Editor
            content={formData.jobDescription}
            onChange={handleEditorChange}
          />
        </div>
        <div className="grid gap-1">
          <div className="myFlex justify-between">
            <label>Required Skills</label>
            <p onClick={addSkill} className="text-primary mr-6 cursor-pointer">
              Add Skill
            </p>
          </div>

          {formData.requiredSkills.map((skill, index) => (
            <div key={index} className="flex items-center gap-2 mb-3">
              <input
                type="text"
                value={skill}
                onChange={(e) => handleSkillChange(index, e.target.value)}
                className="flex-1 input"
              />
              <button
                type="button"
                onClick={() => removeSkill(index)}
                className="text-red-500 w-[10%] myFlex justify-center"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="grid gap-1">
            <SelectBtn
              name="experience"
              handleChange={handleSelectChange}
              value={formData.experience}
              label="Select Experience Level"
              options={experienceOption}
            />
          </div>
          <div className="grid gap-1">
            <SelectBtn
              label="Select Location"
              options={locationOption}
              name="location"
              value={formData.location}
              handleChange={handleSelectChange}
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full h-[56px] tracking-wider bg-primary rounded-lg text-white font-aeoBold"
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </section>
  );
};

export default JobCreationForm;
