import { Button, List, Tooltip } from "antd";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Question } from "../../../model/question";
import { TitleProps } from "../../Canvas/Title";
import classNames from "classnames";
import "../styles/index.css";
import {
  setSelectedQuestion,
  toggleHideSelectedQuestion,
} from "../../../store/modules/questionnaireStore";
import { RootState } from "../../../store";
import {
  DeleteOutlined,
  CopyOutlined,
  BlockOutlined,
  LockOutlined,
  UnlockOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
  DragOutlined,
} from "@ant-design/icons";
const QuestionsMenu: FC = () => {
  const questions = useSelector(
    (state: RootState) => state.questionnaire.questionnaire.questions
  );
  const selectedQuestionId = useSelector(
    (state: RootState) => state.questionnaire.selectedQuestion?.id
  );
  const dispatch = useDispatch();
  const onMouseEnterHandler = (id: string) => {
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
                  onMouseEnter={() => onMouseEnterHandler(question.id)}
                  actions={[
                    question.hidden && (
                      <Tooltip title={question.hidden ? "show" : "hide"}>
                        <Button
                          shape="circle"
                          icon={<EyeInvisibleOutlined />}
                          type={question.hidden ? "primary" : "default"}
                          onClick={() => {
                            dispatch(toggleHideSelectedQuestion());
                          }}
                        />
                      </Tooltip>
                    ),
                  ]}
                >
                  <List.Item.Meta title={titleProps.title} />
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
