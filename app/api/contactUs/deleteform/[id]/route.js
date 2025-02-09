import { connectDb } from "@/utils/config/db";
import contactUs from "@/utils/models/contactUs";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    await connectDb();

    const { id } = await params;
    const getOneFeedBack = await contactUs.findById(id);

    if (!getOneFeedBack) {
      return NextResponse.json({
        message: "unable to get requested form details/Not Found",
        status: 404,
      });
    }

    const deletedForm = await contactUs.findByIdAndDelete(getOneFeedBack);

    return NextResponse.json({
      message: `deleted`,
      data: deletedForm,
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
