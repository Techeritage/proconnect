import { connectDb } from "@/utils/config/db";
import blog from "@/utils/models/blog";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    await connectDb();

    const { id } = await params;
    const blogPost = await blog.findById(id);

    if (!blogPost) {
      return NextResponse.json({
        message: "unable to display article/Not Found",
        status: 404,
      });
    }

    return NextResponse.json({
      message: `have a nice read`,
      data: blogPost,
      status: 200,
    });
  } catch (error) {
    console.error("server error:", error.message);
    return NextResponse.json({
      error: error.message,
      message: `internal error, ${error.message}`,
      status: 500,
    });
  }
}
