import { connectDb } from "@/utils/config/db";
import hireTalent from "@/utils/models/hireTalent";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    await connectDb();

    const { id } = await params;
    const getOneRequirement = await hireTalent.findById(id);

    if (!getOneRequirement) {
      return NextResponse.json(
        {
          message: "unable to get requested post/Not Found",
        },
        { status: 404 }
      );
    }

    const deleted = await hireTalent.findByIdAndDelete(id);

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
