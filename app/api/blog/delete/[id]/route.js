import { connectDb } from "@/utils/config/db";
import blog from "@/utils/models/blog";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    await connectDb();

    const { id } = await params;
    const getOneBlog = await blog.findById(id);

    if (!getOneBlog) {
      return NextResponse.json(
        {
          message: "unable to get requested post/Not Found",
        },
        { status: 404 }
      );
    }

    const deletedBlog = await blog.findByIdAndDelete(id);

    return NextResponse.json(
      {
        message: `deleted`,
        data: deletedBlog,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("server error:", error.message);
    return NextResponse.json(
      {
        error: error.message,
        message: `internal error, ${error.message}`,
      },
      { status: 500 }
    );
  }
}
