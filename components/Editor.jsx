"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";
import { FontFamily } from "@tiptap/extension-font-family";
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Heading as HeadingIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Image as ImageIcon,
  Link as LinkIcon,
  List,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FontSize } from "@/hooks/useFontSize";
import { LineHeight } from "@/hooks/useLineHeight";
import { useEffect } from "react";

const Toolbar = ({ editor }) => {
  if (!editor) return null;

  const addImage = () => {
    const url = window.prompt("Enter image URL");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const addLink = () => {
    const url = window.prompt("Enter URL");
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  const fontSizes = [12, 14, 16, 18, 20, 24, 28, 32];
  const lineHeights = [1, 1.15, 1.5, 2, 2.5];

  return (
    <div className="flex flex-wrap gap-2 p-2 border-b bg-gray-100 rounded-t-md">
      <div className="flex gap-1">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "bg-gray-200" : ""}
        >
          <Bold size={16} />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "bg-gray-200" : ""}
        >
          <Italic size={16} />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={editor.isActive("underline") ? "bg-gray-200" : ""}
        >
          <UnderlineIcon size={16} />
        </Button>
      </div>

      <div className="flex gap-1">
        {[1, 2, 3].map((level) => (
          <Button
            type="button"
            key={level}
            variant="ghost"
            size="sm"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level }).run()
            }
            className={
              editor.isActive("heading", { level }) ? "bg-gray-200" : ""
            }
          >
            H{level}
          </Button>
        ))}
      </div>

      <div className="flex gap-1">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          className={
            editor.isActive({ textAlign: "left" }) ? "bg-gray-200" : ""
          }
        >
          <AlignLeft size={16} />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className={
            editor.isActive({ textAlign: "center" }) ? "bg-gray-200" : ""
          }
        >
          <AlignCenter size={16} />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          className={
            editor.isActive({ textAlign: "right" }) ? "bg-gray-200" : ""
          }
        >
          <AlignRight size={16} />
        </Button>
      </div>

      <div className="flex gap-1">
        <Button type="button" variant="ghost" size="sm" onClick={addImage}>
          <ImageIcon size={16} />
        </Button>
        <Button type="button" variant="ghost" size="sm" onClick={addLink}>
          <LinkIcon size={16} />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "bg-gray-200" : ""}
        >
          <List size={16} />
        </Button>
      </div>

      <Select
        onValueChange={(value) => {
          editor.chain().focus().setFontSize(value).run();
        }}
      >
        <SelectTrigger className="w-[100px] bg-white shadow-none">
          <SelectValue placeholder="Font size" />
        </SelectTrigger>
        <SelectContent>
          {fontSizes.map((size) => (
            <SelectItem key={size} value={`${size}px`}>
              {size}px
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        onChange={(e) => {
          const lineHeight = e.target.value;
          editor.chain().focus().setLineHeight(lineHeight).run();
        }}
      >
        <SelectTrigger className="w-[100px] bg-white shadow-none">
          <SelectValue placeholder="Line height" />
        </SelectTrigger>
        <SelectContent>
          {lineHeights.map((height) => (
            <SelectItem key={height} value={height}>
              {height}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

const Editor = ({ content, onChange }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Image,
      Link.configure({
        openOnClick: false,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Color,
      FontFamily,
      FontSize,
      LineHeight,
      // Custom extension for handling font size
      TextStyle.configure({
        HTMLAttributes: {
          class: "custom-text-style",
        },
      }),
    ],
    immediatelyRender: false,
    content: content || "",
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onChange?.(html);
    },
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none",
      },
    },
  });

  // Use useEffect to handle content changes
  useEffect(() => {
    if (editor && content !== undefined) {
      editor.commands.setContent(content || "");
    }
  }, [content, editor]);

  return (
    <div className="border border-gray-300 rounded-md">
      <Toolbar editor={editor} />
      <EditorContent
        editor={editor}
        className="p-4 min-h-[400px] bg-white rounded-br-md rounded-bl-md focus:outline-none focus:ring-0 tiptap prose max-w-none"
      />
    </div>
  );
};

export default Editor;
