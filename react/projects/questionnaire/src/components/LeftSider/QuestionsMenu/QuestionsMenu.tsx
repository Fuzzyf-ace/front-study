import { List } from "antd";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Question } from "../../../model/question";
import { TitleProps } from "../../Canvas/Title";
import classNames from "classnames";
import "../styles/index.css";
import { setSelectedQuestion } from "../../../store/modules/questionnaireStore";
const QuestionsMenu: FC = () => {
  const questions = useSelector(
    (state: any) => state.questionnaire.questionnaire.questions
  );
  const selectedQuestionId = useSelector(
    (state: any) => state.questionnaire.selectedQuestion.id
  );
  const dispatch = useDispatch();
  const onclickHandler = (id: string) => {
    dispatch(setSelectedQuestion(id));
  };
  return (
    <div>
      <List
        dataSource={questions}
        renderItem={(question: Question) => {
          if (!question) {
            return null;
          }
          switch (question.questionType) {
            case "Title":
              const titleProps = question.questionProps as TitleProps;
              return (
                <List.Item
                  key={question.id}
                  className={classNames("question-menu-item", {
                    selected: question.id === selectedQuestionId,
                  })}
                  onClick={() => onclickHandler(question.id)}
                >
                  {titleProps.title}
                </List.Item>
              );
            default:
              return null;
          }
        }}
      />
    </div>
  );
};

export default QuestionsMenu;
