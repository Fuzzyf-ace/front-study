import { Button, Space, Tooltip } from "antd";
import { FC } from "react";
import {
  DeleteOutlined,
  CopyOutlined,
  BlockOutlined,
  LockOutlined,
  UnlockOutlined,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { Question } from "../../../model/question";
import { toggleLockSelectedQuestion } from "../../../store/modules/questionnaireStore";

const EditToolBar: FC = () => {
  const selectedQuestion: Question = useSelector(
    (state: RootState) => state.questionnaire.selectedQuestion
  );
  const dispatch = useDispatch();
  const locked = selectedQuestion?.locked;
  return (
    <Space className="edit-tool-bar">
      <Tooltip title={locked ? "unlock" : "lock"}>
        <Button
          shape="circle"
          icon={locked ? <UnlockOutlined /> : <LockOutlined />}
          onClick={() => {
            dispatch(toggleLockSelectedQuestion());
          }}
        />
      </Tooltip>
      <Tooltip title={"delete"}>
        <Button shape="circle" icon={<DeleteOutlined />} />
      </Tooltip>
      <Tooltip title={"copy"}>
        <Button shape="circle" icon={<CopyOutlined />} />
      </Tooltip>
      <Tooltip title={"paste"}>
        <Button shape="circle" icon={<BlockOutlined />} />
      </Tooltip>
      <Tooltip title={"hide"}>
        <Button
          shape="circle"
          icon={<EyeInvisibleOutlined disabled={selectedQuestion?.hidden} />}
        />
      </Tooltip>
    </Space>
  );
};
export default EditToolBar;
