import { Typography } from "antd";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setSelectedQuestion } from "../../../store/modules/questionnaireStore";
import { RootState } from "../../../store";
import classnames from "classnames";
import "../style/index.css";

export enum TitleLevel {
  H1 = 1,
  H2,
  H3,
  H4,
  H5,
}
export type TitleProps = {
  id: string;
  title: string;
  level?: TitleLevel;
  disabled?: boolean;
};

const Title: FC<TitleProps> = ({
  title,
  level = 1,
  id,
  disabled,
}: TitleProps) => {
  const dispatch = useDispatch();

  const onclickHandler = () => {
    dispatch(setSelectedQuestion(id));
  };

  const selectedQuestion = useSelector(
    (state: RootState) => state.questionnaire.selectedQuestion
  );
  const selectedId = selectedQuestion?.id;
  return (
    <div
      className={classnames("question", { selected: selectedId === id })}
      onClick={onclickHandler}
    >
      <Typography.Title level={level} disabled={disabled}>
        {title}
      </Typography.Title>
    </div>
  );
};

export default Title;
