import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Question, QuestionTypes } from "../../model/question";
import { RootState } from "../../store";
import { QuestionPropTypes } from "../../model/question";
import { TitleLevel, TitleProps } from "../Canvas/Title";
import { Button, Input, Select } from "antd";
import { editQuestionProps } from "../../store/modules/questionnaireStore";
import { RadioProps } from "../Canvas/Radio";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
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

      case "Radio":
        const radioProps = props as RadioProps;
        return (
          <div>
            <div style={{ display: "flex", alignItems: "baseline" }}>
              <div>Title: </div>
              <Input
                style={{ flex: "auto", margin: "0 0 0 10px" }}
                disabled={selectedQuestion?.locked}
                value={radioProps.title}
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
                flexDirection: "column",
                alignItems: "baseline",
                margin: "10px 0 0 0 ",
              }}
            >
              <div>Options:</div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "baseline",
                }}
              >
                {radioProps.options.map((option, index) => {
                  const label = option.label;
                  const value = option.value;
                  return (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        margin: "10px 0 0 0 ",
                      }}
                      key={index}
                    >
                      <Button
                        icon={<DeleteOutlined />}
                        shape="circle"
                        onClick={() => {
                          const options = radioProps.options;
                          const newOptions = Object.assign([], options);
                          newOptions.splice(index, 1);
                          dispatch(
                            editQuestionProps({
                              id: selectedQuestion?.id,
                              props: { options: newOptions },
                            })
                          );
                        }}
                      />
                      <div style={{ margin: "0 0 0 10px" }}>Label:</div>
                      <Input
                        value={label}
                        style={{ margin: "0 0 0 10px" }}
                        onChange={(e) => {
                          const options = radioProps.options;
                          const newOptions = Object.assign([], options, {
                            [index]: {
                              ...options[index],
                              label: e.target.value,
                            },
                          });
                          dispatch(
                            editQuestionProps({
                              id: selectedQuestion?.id,
                              props: { options: newOptions },
                            })
                          );
                        }}
                      />
                      <div style={{ margin: "0 0 0 10px" }}>Value:</div>
                      <Input
                        value={value}
                        style={{ margin: "0 0 0 10px" }}
                        onChange={(e) => {
                          const options = radioProps.options;
                          const newOptions = Object.assign([], options, {
                            [index]: {
                              ...options[index],
                              value: e.target.value,
                            },
                          });
                          dispatch(
                            editQuestionProps({
                              id: selectedQuestion?.id,
                              props: { options: newOptions },
                            })
                          );
                        }}
                      ></Input>
                    </div>
                  );
                })}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "end",
                  width: "100%",
                  margin: "10px 0 0 0 ",
                }}
              >
                <Button
                  icon={<PlusOutlined />}
                  shape="circle"
                  onClick={() => {
                    const options = radioProps.options;
                    const newOptions = Object.assign([], options);
                    newOptions.push({
                      label: "Option",
                      value: "Option",
                    });
                    dispatch(
                      editQuestionProps({
                        id: selectedQuestion?.id,
                        props: { options: newOptions },
                      })
                    );
                  }}
                />
              </div>
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

  const selectedQuestion: Question | null = useSelector(
    (state: RootState) => state.questionnaire.selectedQuestion
  );
  const props = selectedQuestion?.questionProps;
  return generateEditPropsByQuestionType(props, selectedQuestion?.questionType);
};

export default EditProps;
