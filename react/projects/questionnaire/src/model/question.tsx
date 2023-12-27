import Canvas from "../components/Canvas";

type QuestionTypes = "Title" | "";
type Question = {
  id: string;
  questionType: QuestionTypes;
  questionProps: any;
} | null;
// how to type this?
type QuestionComponentTypes = typeof Canvas.Title;

export type { QuestionTypes, Question, QuestionComponentTypes };
