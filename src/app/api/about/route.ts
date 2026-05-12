import connectDB from "@/lib/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();

    const db = mongoose.connection.db;
    if (!db) throw new Error("DB not connected");

    const collection = db.collection("AboutSection");

    const data = await collection
      .find({})
      .sort({ createdAt: -1 })
      .limit(1)
      .toArray();

    return NextResponse.json({
      success: true,
      data: data[0] || {
        heading: "Default Heading",
        description: "Default Description",
        cards: [],
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: "GET FAILED",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    // validation
    if (!body.heading || !body.description) {
      return NextResponse.json(
        {
          success: false,
          message: "heading & description required",
        },
        { status: 400 }
      );
    }

    const db = mongoose.connection.db;
    if (!db) throw new Error("DB not connected");

    const collection = db.collection("AboutSection");

    const result = await collection.insertOne({
      heading: body.heading,
      description: body.description,
      cards: body.cards || [],
      createdAt: new Date(),
    });

    return NextResponse.json({
      success: true,
      message: "DATA SAVED ✔️",
      id: result.insertedId,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: "POST FAILED",
        error: error.message,
      },
      { status: 500 }
    );
  }
}