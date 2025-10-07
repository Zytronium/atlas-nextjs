import { AnswerQuestion } from "@/components/AnswerQuestion";
import { Answer } from "@/components/Answer";
import { fetchQuestion, /*fetchAnswers,*/ fetchTopic } from "@/lib/data";
import { HashtagIcon } from "@heroicons/react/24/outline";
import { Question } from "@/components/Question";
import { AskQuestion } from "@/components/AskQuestion";

function fetchAnswers(id: string) {
  return [
    {
      id: "1",
      content: "This is a mock answer.",
      votes: 75701,
      correct: true
    },
    {
      id: "2",
      content: "This is another mock answer, but it's not as good as the one above.",
      votes: 26,
      correct: false
    },
    {
      id: "3",
      content: "This is yet another mock answer, but it's really bad advice. Wait how the hell do I have negative vo-.",
      votes: -13,
      correct: false
    }
    ];
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
      <AskQuestion topic={question.id} />
      {answers.map((answer) => (
        <Question
          key={answer.id}
          id={answer.id}
          text={answer.content}
          votes={answer.votes}
          // correct={answer.correct}
        />
      ))}
    </div>
  );
}
