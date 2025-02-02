import { useState } from "react";

const useFormSubmission = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch("/api/newsLetter/suscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const data = await response.json();
      setEmail("");
      setSuccess(true); // Set success state
      console.log("Form submitted successfully:", data);
    } catch (err) {
      setError(err.message); // Set error state
      console.error("Form submission error:", err);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return {
    email,
    setEmail,
    isLoading,
    error,
    success,
    handleSubmit,
  };
};

export default useFormSubmission;
