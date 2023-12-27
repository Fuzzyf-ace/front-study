import { FC } from "react";
import { useSelector } from "react-redux";
import { Question } from "../../model/question";
import { RootState } from "../../store";

const EditProps: FC = () => {
  const selectedQuestion: Question = useSelector(
    (state: RootState) => state.questionnaire.selectedQuestion
  );
  const props = selectedQuestion?.questionProps;
  return (
    <div className="edit-props">
      {props &&
        Object.keys(props).map((key) => {
          return (
            <div key={key}>
              {key} : {props[key]}
            </div>
          );
        })}
    </div>
  );
};

export default EditProps;
