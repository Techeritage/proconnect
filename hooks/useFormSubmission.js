import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/firebaseConfig";
import toast from "react-hot-toast";

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
    if (!file) return { url: null, error: "No file provided" }; // Or just return null

    try {
      const timestamp = Date.now(); // Milliseconds since epoch (more unique)
      const storageRef = ref(storage, `cv/${file.name}_${timestamp}`); // Append timestamp to filename
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      return { url: downloadURL, error: null }; // Return object
    } catch (err) {
      console.error("File upload error:", err);
      return { url: null, error: err.message }; // Return object with error message
    }
  };

  // Reset form
  const resetForm = () => {
    setFormData(defaultValues || {});
    setError(null);
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
        const uploadResult = await uploadFileToFirebase(formData.cv);
        if (uploadResult.error) {
          // Check for the error
          throw new Error(`File upload failed: ${uploadResult.error}`); // Or handle differently
        }
        cvUrl = uploadResult.url; // Access the URL if no error
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
      toast.success("Form submitted successfully");
      resetForm();
    } catch (err) {
      setError(err.message);
      console.error("Form submission error:", err);
    } finally {
      setLoading(false);
    }
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
