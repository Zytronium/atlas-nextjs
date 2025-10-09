import { NextRequest, NextResponse } from "next/server";
import { fetchQuestions } from "@/lib/data";

export async function GET(
  request: NextRequest,
  context: any
) {
  const id = context?.params?.id;
  const questions = await fetchQuestions(id);
  return NextResponse.json(questions);
}
