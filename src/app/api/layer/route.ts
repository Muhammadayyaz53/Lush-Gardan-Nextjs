import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import mongoose from "mongoose";

const LayerSchema = new mongoose.Schema(
  {
    heading: String,
    blogs: [
      {
        title: String,
        desc: String,
        date: String,
        image: String,
      },
    ],
  },
  { timestamps: true }
);

const LayerModel =
  mongoose.models.Layer ||
  mongoose.model("Layer", LayerSchema);

// GET
export async function GET() {
  try {
    await connectDB();

    const data = await LayerModel.findOne().sort({ _id: -1 });

    return NextResponse.json({
      success: true,
      data: {
        heading: data?.heading || "",
        blogs: data?.blogs || [],
      },
    });
  } catch (err) {
    return NextResponse.json({
      success: false,
      data: { heading: "", blogs: [] },
    });
  }
}

// POST
export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const safeBlogs =
      body.blogs?.map((b: any) => ({
        title: b.title || "",
        desc: b.desc || "",
        date: b.date || "",
        image: b.image?.trim() ? b.image : "/image 6.png",
      })) || [];

    await LayerModel.deleteMany({});

    const created = await LayerModel.create({
      heading: body.heading || "",
      blogs: safeBlogs,
    });

    return NextResponse.json({
      success: true,
      data: created,
    });
  } catch (err) {
    return NextResponse.json({
      success: false,
      error: "Something went wrong",
    });
  }
}