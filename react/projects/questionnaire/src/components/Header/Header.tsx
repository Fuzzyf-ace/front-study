import { FC } from "react";
import { RootState } from "../../store";
import { Typography } from "antd";
import { useSelector } from "react-redux";
import { Questionnaire } from "../../model/questionnaire";

import "./styles/index.css";
import EditToolBar from "./EditToolBar/EditToolBar";
const Header: FC = () => {
  const questionnaire: Questionnaire = useSelector(
    (state: RootState) => state.questionnaire.questionnaire
  );
  return (
    <div className="header">
      <div className="header-start">
        <Typography.Title level={3}>{questionnaire.title}</Typography.Title>
      </div>
      <div className="header-center">
        <EditToolBar />
      </div>
      <div className="header-end"></div>
    </div>
  );
};

export default Header;
