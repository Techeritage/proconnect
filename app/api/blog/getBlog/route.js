import { connectDb } from "@/utils/config/db";
import blog from "@/utils/models/blog";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectDb();

    const blogPost = await blog.find({});

    if (!blogPost || blogPost.length === 0) {
      return NextResponse.json({
        message: "no blog post yet",
        status: 404,
      });
    }

    return NextResponse.json({
      message: `articles available for you`,
      data: blogPost,
      status: 200,
    });
  } catch (error) {
    console.error("server error:", error.message);
    return NextResponse.json({
      error: error.message,
      message: "internal error",
      status: 500,
    });
  }
}
