import Canvas from "../components/Canvas";
import { TitleProps } from "../components/Canvas/Title";
type QuestionTypes = "Title" | "";

type QuestionPropTypes = TitleProps | {};

type Question = {
  id: string;
  questionType: QuestionTypes;
  questionProps: QuestionPropTypes;
} | null;

type QuestionComponentTypes = typeof Canvas.Title;

export type {
  QuestionTypes,
  QuestionPropTypes,
  Question,
  QuestionComponentTypes,
};
