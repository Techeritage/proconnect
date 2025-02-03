import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/firebaseConfig";

const useFormSubmission = (config) => {
  const { endpoint, defaultValues, validate } = config;

  // State for form data, loading, error, and success
  const [formData, setFormData] = useState(defaultValues || {});
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Handle input changes
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

  // Handle file changes
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        cv: file,
      }));
    }
  };

  // Handle file deletion
  const handleDeleteFile = () => {
    setFormData((prev) => ({
      ...prev,
      cv: null,
    }));
  };

  // Upload file to Firebase Storage
  const uploadFileToFirebase = async (file) => {
    if (!file) return null;

    try {
      const storageRef = ref(storage, `uploads/${Date.now()}_${file.name}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      return downloadURL;
    } catch (err) {
      console.error("File upload error:", err);
      throw err;
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
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
      // Upload CV file to Firebase Storage
      let cvUrl = null;
      if (formData.cv) {
        cvUrl = await uploadFileToFirebase(formData.cv);
      }

      // Prepare submission data
      const submissionData = {
        ...formData,
        cv: cvUrl,
      };

      if (endpoint) {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submissionData),
        });

        if (!response.ok) {
          throw new Error("Failed to submit form");
        }
      }

      setSuccess(true);
      console.log("Form submitted successfully");
    } catch (err) {
      setError(err.message);
      console.error("Form submission error:", err);
    } finally {
      setLoading(false);
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
    handleFileChange,
    handleDeleteFile,
    handleSubmit,
    isLoading,
    error,
    success,
    resetForm,
  };
};

export default useFormSubmission;
