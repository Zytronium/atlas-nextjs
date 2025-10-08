"use server";

import { revalidatePath } from "next/cache";
import {
  incrementVotes, insertAnswer, insertQuestion, insertTopic, setCorrectAnswer
} from "./data";
import { redirect } from "next/navigation";

export async function addTopic(data: FormData) {
  let topic;
  try {
    topic = await insertTopic({
      title: data.get("title") as string,
    });
  } catch (error) {
    console.error("Database Error", error);
    throw new Error("Failed to add topic.");
  } finally {
    revalidatePath("/ui/topics/[id]", "page");
    topic && redirect(`/ui/topics/${topic.id}`);
  }
}

export async function addQuestion(question: FormData) {
  try {
    if ((question.get("title") as string).trim().length === 0) {
      return; // Prevent empty questions
    }
    await insertQuestion({
      title: question.get("title") as string,
      topic_id: question.get("topic_id") as string,
      votes: 0,
    });
    revalidatePath("/ui/topics/[id]", "page");
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to add question.");
  }
}

export async function addAnswer(answer: FormData) {
  try {
    if ((answer.get("answer") as string).trim().length === 0) {
      return; // Prevent empty answers
    }
    await insertAnswer({
      answer: answer.get("answer") as string,
      question_id: answer.get("question_id") as string,
    });
    revalidatePath("/ui/questions/[id]", "page");
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to add answer.");
  }
}

export async function markCorrect(data: FormData) {
  try {
    await setCorrectAnswer(data.get("id") as string, data.get("question_id") as string);
    revalidatePath("/ui/questions/[id]", "page");
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to mark correct.");
  }
}

export async function addVote(data: FormData) {
  try {
    await incrementVotes(data.get("id") as string);
    revalidatePath("/ui/topics/[id]", "page");
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to add vote.");
  }
}
