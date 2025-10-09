import { fetchQuestions } from "@/lib/data";

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  const questions = await fetchQuestions(params.id);
  return Response.json(questions);
}
