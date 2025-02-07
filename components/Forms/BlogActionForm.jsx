"use client";

import { useEffect, useRef } from "react";
import Editor from "../Editor";
import Image from "next/image";
import { UploadCloud, X } from "lucide-react";
import useFormSubmission from "@/hooks/useFormSubmission";
import { useOneBlog } from "@/services/queries";

const BlogActionForm = ({ id }) => {
  const fileInputRef = useRef();

  const { data, isLoading: loading } = useOneBlog(id || null);

  const {
    formData,
    setFormData,
    handleChange,
    handleImageChange,
    handleDeleteImage,
    handleSubmit,
    isLoading,
    error,
  } = useFormSubmission({
    id: id,
    endpoint: id ? `/api/blog/updateBlog/${id}` : "/api/blog/createBlog",
    defaultValues: {
      blogTitle: "",
      excerpt: "",
      thumbNail: null,
      blogBody: "",
      blogReadTime: "",
    },
    validate: (formData) => {
      if (!formData.blogTitle || !formData.excerpt || !formData.blogReadTime) {
        return "Blog Title, Excerpt, and Reading Time are required.";
      }
      return null;
    },
  });

  useEffect(() => {
    if (data?.data) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        blogTitle: data.data.blogTitle || "",
        blogBody: data.data.blogBody || "",
        excerpt: data.data.excerpt || "",
        blogReadTime: data.data.blogReadTime || "",
        thumbNail: data.data.thumbNail || null,
      }));
    }
  }, [data, setFormData]);

  const handleEditorChange = (content) => {
    handleChange({ target: { name: "blogBody", value: content } });
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  if (id && loading) return <p>Loading...</p>;

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
              value={formData.blogTitle || ""}
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
              value={formData.excerpt || ""}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-1">
            <label>Reading Time</label>
            <input
              className="input"
              type="text"
              name="blogReadTime"
              required
              value={formData.blogReadTime || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="grid gap-1">
          <label>Blog Body</label>
          <Editor
            content={formData.blogBody || ""}
            onChange={handleEditorChange}
          />
        </div>
        <div>
          <div className="h-[180px] rounded-lg border border-gray-300 myFlex justify-center bg-white">
            {formData.thumbNail ? (
              <div className="relative">
                <Image
                  src={
                    typeof formData.thumbNail === "string"
                      ? formData.thumbNail
                      : URL.createObjectURL(formData.thumbNail)
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
                <p className="text-sm">Click to select thumbNail</p>
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
