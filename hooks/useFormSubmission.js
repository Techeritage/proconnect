import { useState } from "react";

const useFormSubmission = (config) => {
  const { endpoint, defaultValues, validate } = config;

  // State for form data, loading, error, and success
  const [formData, setFormData] = useState(defaultValues || {});
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Handle input changes (for both regular inputs and select inputs)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle select changes
  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data (if validation function is provided)
    if (validate) {
      const validationError = validate(formData);
      if (validationError) {
        setError(validationError);
        return;
      }
    }

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const data = await response.json();
      setSuccess(true); // Set success state
      console.log("Form submitted successfully:", data);
    } catch (err) {
      setError(err.message); // Set error state
      console.error("Form submission error:", err);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  // Reset form
  const resetForm = () => {
    setFormData(defaultValues || {});
    setSuccess(false);
    setError(null);
  };

  return {
    formData,
    handleChange,
    handleSelectChange,
    handleSubmit,
    isLoading,
    error,
    success,
    resetForm,
  };
};

export default useFormSubmission;