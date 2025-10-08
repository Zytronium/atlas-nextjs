import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { addVote } from "@/lib/actions";
import clsx from "clsx";

export default function AnswerButton({ id, correct }: { id: string, correct: boolean }) {
  return (
    <form action={addVote}>
      <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        className={clsx(
          "h-8 w-8 min-w-[2rem] rounded-full ring-gray-200 hover:text-atlas-teal",
          correct
            ? "bg-primary text-white outline-none ring-2 ring-primary"
            : "active:bg-primary active:text-white active:outline-none active:ring-2 active:ring-primary"
        )}
      >
        <CheckCircleIcon />
      </button>
    </form>
  );
}
