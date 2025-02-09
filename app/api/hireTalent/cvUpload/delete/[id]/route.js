import { connectDb } from "@/utils/config/db";
import cvUpload from "@/utils/models/cvUpload";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    await connectDb();

    const { id } = await params;
    const getCv = await cvUpload.findById(id);

    if (!getCv) {
      return NextResponse.json(
        {
          message: "unable to get requested details/Not Found",
        },
        { status: 404 }
      );
    }

    const deleted = await cvUpload.findByIdAndDelete(id);

    return NextResponse.json(
      {
        message: `deleted`,
        data: deleted,
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
