import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { Input } from "antd";
import { editQuestionnaireBasicSettings } from "../../store/modules/questionnaireStore";

const EditSettings: FC = () => {
  const questionnaire = useSelector(
    (state: RootState) => state.questionnaire.questionnaire
  );
  const title = questionnaire.title;
  const description = questionnaire.description;
  const dispatch = useDispatch();
  return (
    <div>
      <div style={{ display: "flex", alignItems: "baseline" }}>
        <div>Title:</div>
        <Input
          style={{ flex: "auto", margin: "0 0 0 10px" }}
          value={title}
          onChange={(e) => {
            console.log(e.target.value);
            dispatch(
              editQuestionnaireBasicSettings({
                type: "title",
                value: e.target.value,
              })
            );
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          margin: "10px 0 0 0 ",
        }}
      >
        <div>Description:</div>
        <Input.TextArea
          style={{ flex: "auto", margin: "0 0 0 10px" }}
          value={description}
          autoSize={{ minRows: 4 }}
          onChange={(e) => {
            dispatch(
              editQuestionnaireBasicSettings({
                type: "description",
                value: e.target.value,
              })
            );
          }}
        />
      </div>
    </div>
  );
};

export default EditSettings;
