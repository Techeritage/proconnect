import { connectDb } from "@/utils/config/db";
import Admin from "@/utils/models/admin";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json({
        message: "details required for login",
        status: 400,
      });
    }

    await connectDb();

    const existingAdmin = await Admin.findOne({ email });
    if (!existingAdmin) {
      return NextResponse.json({
        message: "you don'\t have an account, pls sign in",
        status: 404,
      });
    }

    const checkPassword = await bcrypt.compare(
      password,
      existingAdmin.password
    );
    if (!checkPassword) {
      return NextResponse.json({
        message: "you entered wrong details",
        status: 400,
      });
    }
    return NextResponse.json({
      message: `${email}, login as ${existingAdmin.role} successful `,
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
