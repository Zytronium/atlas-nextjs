import { AnswerQuestion } from "@/components/AnswerQuestion";
import { Answer } from "@/components/Answer";
import { fetchQuestion, /*fetchAnswers,*/ fetchTopic } from "@/lib/data";
import { HashtagIcon } from "@heroicons/react/24/outline";

function fetchAnswers(id: string) {
  return [
    {
      id: "1",
      answer: "This is a mock answer.",
      question_id: "0b93d8dc-6e43-49e3-b59f-b67531247612"
    },
    {
      id: "2",
      answer: "This is another mock answer, but it's not as good as the one above.",
      question_id: "0b93d8dc-6e43-49e3-b59f-b67531247612"
    },
    {
      id: "3",
      answer: "This is yet another mock answer, but it's really bad advice. Wait how the hell do I have negative vo-.",
      question_id: "959e8a94-2135-4a38-891e-12d5aae5708d"
    },
    {
      id: "0b93d8dc-6e43-49e3-b59f-b67531247612",
      answer: "It's a new feature in TypeScript that makes it easier to write type-safe code.",
      question_id: "0b93d8dc-6e43-49e3-b59f-b67531247612"
    }
    ].filter(q => q.question_id == id);
}

export default async function Page({ params }: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  const question = await fetchQuestion(id);
  const answers = await fetchAnswers(id);

  if (!question) {
    return <div>Question not found</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-black flex items-center">
        <HashtagIcon className="h-6 w-6 mr-2" /> {question.title}
      </h1>
      <AnswerQuestion topic={question.id} />
      {answers.map((answer) => (
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
