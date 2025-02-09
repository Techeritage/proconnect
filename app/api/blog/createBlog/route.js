import { connectDb } from "@/utils/config/db";
import blog from "@/utils/models/blog";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { blogTitle, blogBody, thumbNail, excerpt, blogReadTime } =
      await req.json();

    if (!blogTitle || !blogBody) {
      return NextResponse.json({
        message: "provide all fields",
        status: 400,
      });
    }

    await connectDb();

    const newBlog = new blog({
      blogTitle,
      blogBody,
      thumbNail,
      blogReadTime,
      excerpt,
      createdAt: new Date().toLocaleString("en-NG", {
        timeZone: "Africa/Lagos",
      }),
    });

    await newBlog.save();
    return NextResponse.json({
      message: "hooray, you've posted a blog",
      data: newBlog,
      status: 201,
    });
  } catch (error) {
    console.error("internal error:", error.message);
    return NextResponse.json({
      error: error.message,
      message: `server error ${error.message}`,
      status: 500,
    });
  }
}
