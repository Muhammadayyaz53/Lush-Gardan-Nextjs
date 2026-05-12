import { NextResponse } from "next/server";
import mongoose from "mongoose";
import connectDB from "@/lib/db";

const DesignCardSchema = new mongoose.Schema(
  {
    heading: String,
    cards: [
      {
        id: Number,
        title: String,
        oldPrice: String,
        newPrice: String,
        image: String,
      },
    ],
  },
  { timestamps: true }
);

// Prevent model overwrite in dev
const DesignCard =
  mongoose.models.DesignCard ||
  mongoose.model("DesignCard", DesignCardSchema);

export async function GET() {
  try {
    await connectDB();

    const data = await DesignCard.findOne().sort({ _id: -1 });

    return NextResponse.json({
      success: true,
      data: {
        heading: data?.heading || "",
        cards: data?.cards || [],
      },
    });
  } catch (error) {
    console.log("GET ERROR:", error);

    return NextResponse.json({
      success: false,
      data: {
        heading: "",
        cards: [],
      },
    });
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    console.log("RECEIVED:", body);

    await DesignCard.deleteMany({});
    const newData = await DesignCard.create(body);

    return NextResponse.json({
      success: true,
      data: newData,
    });
  } catch (error) {
    console.log("POST ERROR:", error);

    return NextResponse.json({
      success: false,
      error: "Something went wrong",
    });
  }
}