"use client";

import { useRef, useState } from "react";
import Editor from "../Editor";
import Image from "next/image";
import { UploadCloud } from "lucide-react";
import { X } from "lucide-react";

const BlogActionForm = () => {
  const [form, setForm] = useState({
    blogTitle: "",
    excerpt: "",
    thumbnail: "",
    blogBody: "",
    readingTime: "",
  });

  const fileInputRef = useRef();

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setForm((prev) => ({ ...prev, thumbnail: reader.result }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = () => {
    setForm((prev) => ({ ...prev, thumbnail: "" }));
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditorChange = (e) => {
    setForm((prev) => ({ ...prev, blogBody: e }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
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
              value={form.blogTitle}
              onChange={handleFormChange}
            />
          </div>
          <div className="grid gap-1">
            <label>Excerpt</label>
            <input
              className="input"
              type="text"
              name="excerpt"
              required
              value={form.excerpt}
              onChange={handleFormChange}
            />
          </div>
          <div className="grid gap-1">
            <label>Reading Time</label>
            <input
              className="input"
              type="text"
              name="readingTime"
              required
              value={form.readingTime}
              onChange={handleFormChange}
            />
          </div>
        </div>
        <div className="grid gap-1">
          <label>Blog Body</label>
          <Editor content={form.blogBody} onChange={handleEditorChange} />
        </div>
        <div>
          <div className="h-[180px] rounded-lg border border-gray-300 myFlex justify-center bg-white">
            {form.thumbnail ? (
              <div className="relative">
                <Image
                  src={form.thumbnail}
                  width={7000}
                  height={150}
                  alt="Preview"
                  className="rounded-lg w-[700px] h-[150px] object-contain"
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
                  onChange={handleFileChange}
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
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default BlogActionForm;
