import { Typography } from "antd";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setSelectedQuestion } from "../../../store/modules/questionnaireStore";
import { RootState } from "../../../store";
import classnames from "classnames";
import "../style/index.css";
type Props = {
  id: string;
  title: string;
  level?: 1 | 2 | 3 | 4 | 5;
};
const Title: FC<Props> = ({ title, level = 1, id }: Props) => {
  const dispatch = useDispatch();

  const onclickHandler = () => {
    dispatch(setSelectedQuestion(id));
  };

  const selectedQuestion = useSelector(
    (state: RootState) => state.questionnaire.selectedQuestion
  );
  const selectedId = selectedQuestion?.id;

  return (
    <div className={classnames("question", { selected: selectedId === id })}>
      <Typography.Title level={level} onClick={onclickHandler}>
        {title}
      </Typography.Title>
    </div>
  );
};

export default Title;
