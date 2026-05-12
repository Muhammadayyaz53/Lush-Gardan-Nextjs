import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import mongoose from "mongoose";

const TestimonialSchema = new mongoose.Schema(
  {
    heading: String,
    cards: [
      {
        name: String,
        text: String,
      },
    ],
  },
  { timestamps: true }
);

const TestimonialModel =
  mongoose.models.Testimonial ||
  mongoose.model("Testimonial", TestimonialSchema);

// GET
export async function GET() {
  try {
    await connectDB();

    const latest = await TestimonialModel.findOne().sort({ _id: -1 });

    return NextResponse.json({
      success: true,
      data: {
        heading: latest?.heading || "",
        cards: latest?.cards || [],
      },
    });
  } catch (err) {
    console.log(err);

    return NextResponse.json({
      success: false,
      data: { heading: "", cards: [] },
    });
  }
}

// POST
export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const created = await TestimonialModel.create({
      heading: body.heading,
      cards: body.cards,
    });

    return NextResponse.json({
      success: true,
      data: created,
    });
  } catch (err) {
    console.log(err);

    return NextResponse.json({
      success: false,
      error: "Something went wrong",
    });
  }
}