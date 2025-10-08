import AnswerButton from "@/components/AnswerButton";

type AnswerProps = {
  id: string;
  answer: string;
  correct: boolean;
  question_id: string;
};

export function Answer({ id, answer, question_id, correct }: AnswerProps) {
  return (
    <div className="flex items-center border-l border-r border-t border-atlas-white-300 p-6 first:rounded-t-md last:rounded-b-md last:border-b">
      <p className="text w-full text-left">{answer}</p>
      <AnswerButton id={id} question_id={question_id} correct={correct} />
    </div>
  );
}
