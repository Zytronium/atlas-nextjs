import { fetchAnswers } from "@/lib/data";

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  const answers = await fetchAnswers(params.id);
  return Response.json(answers);
}
