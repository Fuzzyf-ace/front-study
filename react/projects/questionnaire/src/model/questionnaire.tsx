import { Question } from "./question";

type Questionnaire = {
  title: string;
  description: string;
  questions: Array<Question>;
};

export type { Questionnaire };
