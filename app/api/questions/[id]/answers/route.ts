import { NextRequest, NextResponse } from "next/server";
import { fetchAnswers } from "@/lib/data";

export async function GET(
  request: NextRequest,
  context: any
) {
  const id = context?.params?.id;
  const answers = await fetchAnswers(id);
  return NextResponse.json(answers);
}
