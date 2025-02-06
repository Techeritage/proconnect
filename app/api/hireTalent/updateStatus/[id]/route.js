import connectDb from "@/utils/config/db";
import hireTalent from "@/utils/models/hireTalent";
import { NextResponse } from "next/server";

export async function PATCH(req, { params }) {
  try {
    await connectDb();

    const { id } = await params;
    const getRequirements = await hireTalent.findById(id);

    if (!getRequirements) {
      return NextResponse.json({
        message: "resource not available",
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

    const updated = await hireTalent.findByIdAndUpdate(id, updateStatus, {
      new: true,
      runValidators: true,
    });

    return NextResponse.json({
      message: "you updated the status of this requirement",
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
