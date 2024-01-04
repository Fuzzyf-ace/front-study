import { FC, useEffect, useRef, useState } from "react";
import { RootState } from "../../store";
import { Input, InputRef, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Questionnaire } from "../../model/questionnaire";

import "./styles/index.css";
import EditToolBar from "./EditToolBar/EditToolBar";
import { editQuestionnaireBasicSettings } from "../../store/modules/questionnaireStore";
const Header: FC = () => {
  const questionnaire: Questionnaire = useSelector(
    (state: RootState) => state.questionnaire.questionnaire
  );
  const dispatch = useDispatch();
  const titleInputRef = useRef<InputRef>(null);
  const [onEditing, setOnEditing] = useState(false);

  useEffect(() => {
    if (titleInputRef.current) {
      titleInputRef.current.focus();
    }
  }, [onEditing]);
  return (
    <div className="header">
      <div className="header-start">
        {
          <div>
            {onEditing && (
              <Input
                value={questionnaire.title}
                ref={titleInputRef}
                onChange={(e) => {
                  dispatch(
                    editQuestionnaireBasicSettings({
                      type: "title",
                      value: e.target.value,
                    })
                  );
                }}
                onBlur={() => {
                  setOnEditing(false);
                }}
              />
            )}

            {!onEditing && (
              <Typography.Title
                level={3}
                onClick={() => {
                  setOnEditing(true);
                }}
              >
                {questionnaire.title}
              </Typography.Title>
            )}
          </div>
        }
      </div>
      <div className="header-center">
        <EditToolBar />
      </div>
      <div className="header-end"></div>
    </div>
  );
};

export default Header;
