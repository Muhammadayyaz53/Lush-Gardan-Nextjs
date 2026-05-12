import { NextResponse } from "next/server";
import mongoose from "mongoose";
import connectDB from "@/lib/db";

// SCHEMA
const BenifitSchema = new mongoose.Schema(
  {
    heading: String,
    cards: [
      {
        id: Number,
        title: String,
        description: String,
        highlight: Boolean,
      },
    ],
  },
  { timestamps: true }
);

// MODEL (safe in dev)
const Benifit =
  mongoose.models.Benifit ||
  mongoose.model("Benifit", BenifitSchema);

// GET API
export async function GET() {
  try {
    await connectDB();

    const data = await Benifit.findOne().sort({ _id: -1 });

    return NextResponse.json({
      success: true,
      data: {
        heading: data?.heading || "",
        cards: data?.cards || [],
      },
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      data: { heading: "", cards: [] },
    });
  }
}

// POST API
export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    await Benifit.deleteMany({});
    const newData = await Benifit.create(body);

    return NextResponse.json({
      success: true,
      data: newData,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: "Something went wrong",
    });
  }
}