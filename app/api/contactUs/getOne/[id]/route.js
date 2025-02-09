import { connectDb } from "@/utils/config/db";
import contactUs from "@/utils/models/contactUs";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    await connectDb();

    const { id } = await params;
    const getOneFeedBack = await contactUs.findById(id);

    if (!getOneFeedBack) {
      return NextResponse.json({
        message: "unable to display form details",
        status: 404,
      });
    }

    return NextResponse.json({
      message: `the form you requested`,
      data: getOneFeedBack,
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
