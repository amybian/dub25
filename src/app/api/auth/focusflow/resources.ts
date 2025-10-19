import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const documents = [
    { title: "Lecture 1 Slides", url: "/resources/lecture1.pdf" },
    { title: "Assignment Guide", url: "/resources/assignment1.pdf" },
  ];

  return NextResponse.json({ documents });
}
