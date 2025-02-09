import { connectDb } from "@/utils/config/db";
import contactUs from "@/utils/models/contactUs";
import { NextResponse } from "next/server";

export async function PATCH(req, { params }) {
  try {
    await connectDb();

    const { id } = await params;
    const getFeedBack = await contactUs.findById(id);

    if (!getFeedBack) {
      return NextResponse.json({
        message: "unable to update",
        status: 400,
      });
    }

    const body = await req.json();
    const { status } = body;

    // If status is not "Resolved" or "Cancel", it will always default to "Pending"
    const updatedStatus =
      status === "Resolved" || status === "Cancel" ? status : "Pending";

    const updateStatus = {
      status: updatedStatus,
      updatedAt: new Date().toLocaleString("en-NG", {
        timeZone: "Africa/Lagos",
      }),
    };

    const updated = await contactUs.findByIdAndUpdate(id, updateStatus, {
      new: true,
      runValidators: true,
    });

    console.log("Request Status:", status);
    console.log("Final Update Payload:", updateStatus);

    // if(updateStatus.status === "Cancel")

    // await hireTalent.findByIdAndDelete(id)

    return NextResponse.json({
      message: "you updated the status of this form",
      data: updated,
      status: 200,
    });
  } catch (error) {
    console.error("server error:", error.message);
    return NextResponse.json({
      error: error.message,
      message: "server error",
      status: 500,
    });
  }
}
