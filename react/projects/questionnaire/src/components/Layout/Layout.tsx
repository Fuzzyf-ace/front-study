import { FC, useEffect } from "react";
import "./Layout.css";
import Canvas from "../Canvas";
import { useDispatch, useSelector } from "react-redux";
import { Questionnaire } from "../../model/questionnaire";
import { RootState } from "../../store";
import {
  fetchQuestionnaire,
  setSelectedQuestion,
} from "../../store/modules/questionnaireStore";
import { Question } from "../../model/question";
import { Typography } from "antd";
import LeftSider from "../LeftSider/LeftSider";
import RightSider from "../RightSider/RightSider";
/**
 *
 * @param question
 * @returns different components based on questionType
 */

const Layout: FC = () => {
  const questionnaire: Questionnaire = useSelector(
    (state: RootState) => state.questionnaire.questionnaire
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchQuestionnaire());
  }, []);

  const questions: Question[] = questionnaire.questions;
  const selectedQuestion: Question = useSelector(
    (state: RootState) => state.questionnaire.selectedQuestion
  );

  const questionMap: FC<Question> = (question: Question) => {
    if (question?.questionType === "Title") {
      return (
        <Canvas.Title
          key={question.id}
          id={question.id}
          title={question.questionProps.title}
        />
      );
    }
    return <div key={question?.id}>Unknown question type</div>;
  };

  return (
    <div className="layout">
      <div className="header">
        <Typography.Title level={3}>{questionnaire.title}</Typography.Title>
      </div>
      <div className="main">
        <LeftSider />
        <div className="center">
          <Canvas>
            {questions.map((question: Question) => questionMap(question))}
          </Canvas>
        </div>
        <RightSider />
      </div>
      <div className="footer">Footer</div>
    </div>
  );
};

export default Layout;
