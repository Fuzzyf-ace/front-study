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
import Header from "../Header/Header";
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
      if (question.hidden) {
        return null;
      }
      return (
        <Canvas.Title
          key={question.id}
          id={question.id}
          title={titleProps.title}
          level={titleProps.level}
          disabled={question.locked}
        />
      );
    }
    return <div key={question?.id}>Unknown question type</div>;
  };

  return (
    <div className="layout">
      <Header />
      <div className="main">
        <LeftSider />
        <div className="center">
          <Canvas>
            {questions.map((question: Question) => questionMap(question))}
          </Canvas>
        </div>
        <RightSider />
      </div>
      <div className="footer">
        <Typography.Text type="secondary">Questionnaire Demo</Typography.Text>
      </div>
    </div>
  );
};

export default Layout;
