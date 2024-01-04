import { FC } from "react";
import { Radio as AntRadio } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  editQuestionProps,
  setSelectedQuestion,
} from "../../../store/modules/questionnaireStore";
import classnames from "classnames";
import { RootState } from "../../../store";
import Title from "antd/es/typography/Title";

type RadioProps = {
  id: string;
  title: string;
  options: {
    label: string;
    value: string;
  }[];
  disabled?: boolean;
  selected?: string;
};

const Radio: FC<RadioProps> = ({ id, options, selected, title }) => {
  const dispatch = useDispatch();
  const selectedQuestion = useSelector(
    (state: RootState) => state.questionnaire.selectedQuestion
  );
  const selectedId = selectedQuestion?.id;

  return (
    <div
      className={classnames("question", { selected: selectedId === id })}
      onClick={() => dispatch(setSelectedQuestion(id))}
    >
      <Title level={4}>{title}</Title>
      <AntRadio.Group
        value={selected}
        options={options}
        onChange={(e) => {
          dispatch(
            editQuestionProps({
              id,
              props: {
                selected: e.target.value,
              },
            })
          );
        }}
      />
    </div>
  );
};

export type { RadioProps };
export default Radio;
