"use client";

import useFormSubmission from "@/hooks/useFormSubmission";

const ContactForm = () => {
  const {
    formData,
    handleChange,
    handleSubmit,
    isLoading,
    error,
  } = useFormSubmission({
    endpoint: "/api/contactUs/reachOut", // Replace with your API endpoint
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      messageUs: "",
    },
    validate: (data) => {
      if (!data.fullName || !data.email || !data.phone || !data.messageUs) {
        return "All fields are required.";
      }
      if (!data.email.includes("@")) {
        return "Please enter a valid email address.";
      }
      return null;
    },
  });

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
          <div className="grid gap-1">
            <label>message</label>
            <textarea
              className="input"
              type="text"
              name="messageUs"
              rows={5}
              required
              value={formData.messageUs}
              onChange={handleChange}
            />
          </div>
          <button
            className="w-full h-[56px] tracking-wider bg-primary rounded-lg text-white font-aeoBold"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>

          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
