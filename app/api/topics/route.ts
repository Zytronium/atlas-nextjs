import { NextRequest, NextResponse } from "next/server";
import { fetchTopics } from "@/lib/data";

export async function GET(request: NextRequest) {
  const topics = await fetchTopics();
  return NextResponse.json(topics);
}
