import { AnswerQuestion } from "@/components/AnswerQuestion";
import { Answer } from "@/components/Answer";
import { fetchQuestion, fetchAnswers } from "@/lib/data";
import { HashtagIcon } from "@heroicons/react/24/outline";

export default async function Page({ params }: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  const question = await fetchQuestion(id);
  const answers = await fetchAnswers(id);

  if (!question) {
    return <div>Question not found</div>;
  }

  const sortedAnswers = question.answer_id
    ? [
      ...answers.filter(a => a.id === question.answer_id),
      ...answers.filter(a => a.id !== question.answer_id)
    ]
    : answers;

  return (
    <div>
      <h1 className="text-3xl font-black flex items-center">
        <HashtagIcon className="h-6 w-6 mr-2" /> {question.title}
      </h1>
      <AnswerQuestion topic={question.id} />
      {sortedAnswers.map((answer) => (
        <Answer
          key={answer.id}
          id={answer.id}
          answer={answer.answer}
          correct={question.answer_id === answer.id}
        />
      ))}
    </div>
  );
}
