import { NextRequest, NextResponse } from "next/server";

// Mock stress detection API
export async function GET(req: NextRequest) {
  // In production, you'd fetch typing rhythm, app usage, Apple Health data
  const stressScore = Math.floor(Math.random() * 100); // mock score
  return NextResponse.json({ stressScore });
}
