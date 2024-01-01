import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Question, QuestionTypes } from "../../model/question";
import { RootState } from "../../store";
import { QuestionPropTypes } from "../../model/question";
import { TitleLevel, TitleProps } from "../Canvas/Title";
import { Input, Select } from "antd";
import { editQuestionProps } from "../../store/modules/questionnaireStore";

const EditProps: FC = () => {
  const generateEditPropsByQuestionType = (
    props: QuestionPropTypes | undefined,
    questionType: QuestionTypes | undefined
  ) => {
    switch (questionType) {
      case "Title":
        const titleProps = props as TitleProps;
        return (
          <div>
            <div style={{ display: "flex", alignItems: "baseline" }}>
              <div>Title: </div>
              <Input
                style={{ flex: "auto", margin: "0 0 0 10px" }}
                disabled={selectedQuestion?.locked}
                value={titleProps.title}
                onChange={(e) =>
                  dispatch(
                    editQuestionProps({
                      id: selectedQuestion?.id,
                      props: { title: e.target.value },
                    })
                  )
                }
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                margin: "10px 0 0 0 ",
              }}
            >
              <div>Title Level:&nbsp;</div>
              <Select
                title="Title Level"
                style={{ flex: "auto", margin: "0 0 0 10px" }}
                value={titleProps.level}
                disabled={selectedQuestion?.locked}
                options={Object.keys(TitleLevel)
                  .filter((key) => !isNaN(Number(key))) // filter out the enum names
                  .map((key) => {
                    return {
                      label: TitleLevel[Number(key)],
                      value: Number(key),
                    };
                  })}
                onChange={handleOnChange}
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  const dispatch = useDispatch();
  const handleOnChange = (level: number) => {
    dispatch(
      editQuestionProps({ id: selectedQuestion?.id, props: { level: level } })
    );
  };

  const selectedQuestion: Question = useSelector(
    (state: RootState) => state.questionnaire.selectedQuestion
  );
  const props = selectedQuestion?.questionProps;
  return generateEditPropsByQuestionType(props, selectedQuestion?.questionType);
};

export default EditProps;
