import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import mongoose from "mongoose";

// -------------------- SCHEMA (inside API file) --------------------
const HeroSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    buttons: [
      {
        text: String,
        href: String,
        variant: String,
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "HeroSection" }
);

// model (avoid re-compile error in Next.js)
const HeroModel =
  mongoose.models.HeroSection ||
  mongoose.model("HeroSection", HeroSchema);

// -------------------- GET --------------------
export async function GET() {
  try {
    await connectDB();

    const hero = await HeroModel.findOne().sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      data: hero || {
        title: "Nature's Beauty Delivered to You",
        description:
          "Nature's beauty is just a click away with our online flower and plant shop.",
        buttons: [
          {
            text: "Book Now",
            href: "#booknow",
            variant: "primary",
          },
          {
            text: "Watch Video",
            href: "#watchvideo",
            variant: "secondary",
          },
        ],
      },
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      success: false,
      message: "GET failed ❌",
    });
  }
}

// -------------------- POST --------------------
export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const created = await HeroModel.create({
      title: body.title,
      description: body.description,
      buttons: body.buttons,
    });

    return NextResponse.json({
      success: true,
      message: "Hero Section created ✅",
      data: created,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      success: false,
      message: "POST failed ❌",
    });
  }
}