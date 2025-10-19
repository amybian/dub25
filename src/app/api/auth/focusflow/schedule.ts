import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const schedule = [
    { time: "9:00 - 10:00", task: "Read Lecture Notes" },
    { time: "10:15 - 11:00", task: "Assignment Work" },
    { time: "11:00 - 11:15", task: "Stretch / Break" },
  ];

  return NextResponse.json({ schedule });
}
