import { connectDb } from "@/utils/config/db";
import Admin from "@/utils/models/admin";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const { email, password, role, name } = await req.json(); // get data from body
    if (!email || !password || !role || !name) {
      // check for missing fields
      return NextResponse.json({
        message: "provide required details",
        status: 400,
      });
    }

    await connectDb(); // database connection

    const existingAdmin = await Admin.findOne({ email }); // check for existing email
    if (existingAdmin) {
      return NextResponse.json({
        message: `${email} is an Admin, try logging in or sigUp with another email`,
        status: 409,
      });
    }

    const superAdminExists = await Admin.findOne({ role: "SUPERADMIN" }); // check if theres already a superAdmin
    if (role === "SUPERADMIN" && superAdminExists) {
      return NextResponse.json({
        message: "Only one super admin is allowed",
        status: 409,
      });
    }

    const hashPassword = await bcrypt.hash(password, 10); // hash password

    const newAdmin = new Admin({
      email,
      password: hashPassword,
      role,
      name,
      createdAt: new Date().toLocaleString("en-NG", {
        timeZone: "Africa/Lagos",
      }),
    });

    await newAdmin.save();
    return NextResponse.json({
      data: newAdmin,
      message: `${email}, successfully created your admin account`,
      status: 201,
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
