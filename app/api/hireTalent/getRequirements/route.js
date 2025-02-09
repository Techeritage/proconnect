import { connectDb } from "@/utils/config/db";
import hireTalent from "@/utils/models/hireTalent";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectDb();
    const getRequirements = await hireTalent.find();
    if (!getRequirements || getRequirements.length === 0) {
      return NextResponse.json({
        message: "No requriments available to view",
        status: 400,
      });
    }

    return NextResponse.json({
      message: "requirements available",
      data: getRequirements,
      status: 200,
    });
  } catch (error) {
    console.error("internal error:", error.message);
    return NextResponse.json({
      error: error.message,
      message: "server error",
      status: 500,
    });
  }
}
