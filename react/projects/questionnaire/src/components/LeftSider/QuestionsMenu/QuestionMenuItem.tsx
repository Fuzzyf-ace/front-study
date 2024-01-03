import { List, Tooltip, Button } from "antd";
import classNames from "classnames";
import { FC } from "react";
import { toggleHideSelectedQuestion } from "../../../store/modules/questionnaireStore";
import { Question } from "../../../model/question";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { EyeInvisibleOutlined, DragOutlined } from "@ant-design/icons";
import { setSelectedQuestion } from "../../../store/modules/questionnaireStore";
import { TitleProps } from "../../Canvas/Title";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type Props = {
  question: Question;
};

const QuestionMenuItem: FC<Props> = ({ question }) => {
  const selectedQuestion = useSelector(
    (state: RootState) => state.questionnaire.selectedQuestion
  );
  const selectedQuestionId = selectedQuestion?.id;
  const dispatch = useDispatch();
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    setActivatorNodeRef,
  } = useSortable({ id: question.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  switch (question.questionType) {
    case "Title":
      const titleProps = question.questionProps as TitleProps;
      return (
        <List.Item
          key={question.id}
          className={classNames("question-menu-item", {
            selected: question.id === selectedQuestionId,
          })}
          onClick={() => dispatch(setSelectedQuestion(question.id))}
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
            <Tooltip title={"drag"}>
              <Button
                ref={setActivatorNodeRef}
                shape="circle"
                icon={<DragOutlined />}
                type="primary"
                {...listeners}
              ></Button>
            </Tooltip>,
          ]}
          ref={setNodeRef}
          style={{ ...style, padding: "10px" }}
          {...attributes}
        >
          <List.Item.Meta title={titleProps.title} />
        </List.Item>
      );
    default:
      return null;
  }
};

export default QuestionMenuItem;
