import Canvas from "../components/Canvas";
import { RadioProps } from "../components/Canvas/Radio";
import { TitleProps } from "../components/Canvas/Title";
type QuestionTypes = "Title" | "Radio";

type QuestionPropTypes = TitleProps | RadioProps;

type Question = {
  id: string;
  questionType: QuestionTypes;
  questionProps: QuestionPropTypes;
  locked?: boolean;
  hidden?: boolean;
};

type QuestionComponentTypes = typeof Canvas.Title;

export type {
  QuestionTypes,
  QuestionPropTypes,
  Question,
  QuestionComponentTypes,
};
