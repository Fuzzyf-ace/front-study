import { FC, useEffect } from "react";
import "./Layout.css";
import Canvas from "../Canvas";
import { useDispatch, useSelector } from "react-redux";
import { Questionnaire } from "../../model/questionnaire";
import { RootState } from "../../store";
import { fetchQuestionnaire } from "../../store/modules/questionnaireStore";
import { Question } from "../../model/question";
import { Typography } from "antd";
import LeftSider from "../LeftSider/LeftSider";
import RightSider from "../RightSider/RightSider";
import { TitleProps } from "../Canvas/Title";
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
  }, [dispatch]);

  const questions: Question[] = questionnaire.questions;

  const questionMap: FC<Question> = (question: Question) => {
    if (question?.questionType === "Title") {
      const titleProps = question.questionProps as TitleProps;
      return (
        <Canvas.Title
          key={question.id}
          id={question.id}
          title={titleProps.title}
          level={titleProps.level}
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
