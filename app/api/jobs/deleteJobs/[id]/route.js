import { connectDb } from "@/utils/config/db";
import postJobs from "@/utils/models/jobs";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    await connectDb();

    const { id } = await params;
    const getJob = await postJobs.findById(id);

    if (!getJob) {
      return NextResponse.json({
        message: "unable to get requested form details",
        status: 404,
      });
    }

    const deletedJob = await postJobs.findByIdAndDelete(getJob);

    return NextResponse.json({
      message: `deleted`,
      data: deletedJob,
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
