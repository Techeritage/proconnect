"use client";

import { useRef } from "react";
import Editor from "../Editor";
import Image from "next/image";
import { UploadCloud, X } from "lucide-react";
import useFormSubmission from "@/hooks/useFormSubmission"; // Adjust the import path as needed

const BlogActionForm = () => {
  const fileInputRef = useRef();

  const {
    formData,
    handleChange,
    handleImageChange,
    handleDeleteImage,
    handleSubmit,
    isLoading,
    error,
  } = useFormSubmission({
    endpoint: "/api/blog/createBlog", // Replace with your API endpoint
    defaultValues: {
      blogTitle: "",
      excerpt: "",
      thumbnail: null, // Use null instead of an empty string for files
      blogBody: "",
      readingTime: "",
    },
    validate: (formData) => {
      if (!formData.blogTitle || !formData.excerpt || !formData.readingTime) {
        return "Blog Title, Excerpt, and Reading Time are required.";
      }
      return null;
    },
  });

  const handleEditorChange = (content) => {
    handleChange({ target: { name: "blogBody", value: content } });
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <section>
      <form className="space-y-7 mt-10" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-[40%_40%_20%] gap-7 md:gap-3">
          <div className="grid gap-1">
            <label>Blog Title</label>
            <input
              className="input"
              type="text"
              name="blogTitle"
              required
              value={formData.blogTitle}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-1">
            <label>Excerpt</label>
            <input
              className="input"
              type="text"
              name="excerpt"
              required
              value={formData.excerpt}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-1">
            <label>Reading Time</label>
            <input
              className="input"
              type="text"
              name="readingTime"
              required
              value={formData.readingTime}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="grid gap-1">
          <label>Blog Body</label>
          <Editor content={formData.blogBody} onChange={handleEditorChange} />
        </div>
        <div>
          <div className="h-[180px] rounded-lg border border-gray-300 myFlex justify-center bg-white">
            {formData.thumbnail ? (
              <div className="relative">
                <Image
                  src={
                    typeof formData.thumbnail === "string"
                      ? formData.thumbnail // If it's a URL (after upload)
                      : URL.createObjectURL(formData.thumbnail) // If it's a File object (before upload)
                  }
                  width={1000}
                  height={150}
                  alt="Preview"
                  className="rounded-lg w-fit h-[150px] object-contain"
                />
                <button
                  onClick={handleDeleteImage}
                  type="button"
                  className="absolute -right-2 -top-2 border text-red-500 bg-white rounded-full p-1"
                >
                  <X strokeWidth={1.2} size={14} />
                </button>
              </div>
            ) : (
              <div
                onClick={handleButtonClick}
                className="myFlex flex-col cursor-pointer gap-1"
              >
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  className="hidden"
                />
                <UploadCloud />
                <p className="text-sm">Click to select thumbnail</p>
              </div>
            )}
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

export default BlogActionForm;
