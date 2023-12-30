import {
  Checkbox,
  Col,
  Collapse,
  CollapseProps,
  Input,
  List,
  Radio,
  Row,
} from "antd";
import { FC } from "react";
import "../styles/index.css";
const TextComponents = [
  {
    key: "1",
    label: "Title",
    children: <div className="component title">Title</div>,
  },
  {
    key: "2",
    label: "Paragraph",
    children: <div className="component">Paragraph</div>,
  },
];

const inputComponents = [
  {
    key: "1",
    label: "TextInput",
    children: (
      <div className="component">
        <div>Your Question Here</div>
        <Input
          placeholder="TextInput"
          style={{
            border: "none",
            cursor: "pointer",
          }}
          readOnly={true}
        />
      </div>
    ),
  },
  {
    key: "2",
    label: "ParagraphInput",
    children: (
      <div className="component">
        <div>Your Question Here</div>
        <Input.TextArea
          placeholder="ParagraphInput"
          style={{
            border: "none",
            cursor: "pointer",
          }}
          readOnly={true}
        />
      </div>
    ),
  },
  {
    key: "3",
    label: "RadioInput",
    children: (
      <div className="component">
        <div>Your Question Here</div>
        <Radio.Group>
          <Radio value={1}>Option 1</Radio>
          <Radio value={2}>Option 2</Radio>
          <Radio value={3}>Option 3</Radio>
          <Radio value={4}>Option 4</Radio>
        </Radio.Group>
      </div>
    ),
  },
  {
    key: "4",
    label: "CheckboxInput",
    children: (
      <div className="component">
        <Checkbox.Group
          options={[
            { label: "Option 1", value: "1" },
            { label: "Option 2", value: "2" },
            { label: "Option 3", value: "3" },
            {
              label: "Check All",
              value: "4",
              onChange: () => {
                console.log("select/unselect all");
              },
            },
          ]}
        />
      </div>
    ),
  },
];

const components: CollapseProps["items"] = [
  {
    key: "1",
    label: "Text Components",
    children: (
      <List
        dataSource={TextComponents}
        renderItem={(item) => (
          <List.Item key={item.key}>{item.children}</List.Item>
        )}
      />
    ),
  },
  {
    key: "2",
    label: "Input Components",
    children: (
      <List
        dataSource={inputComponents}
        renderItem={(item) => (
          <List.Item key={item.key}>{item.children}</List.Item>
        )}
      />
    ),
  },
];

const ComponentPackage: FC = () => {
  return (
    <Collapse
      defaultActiveKey={1}
      items={components}
      style={{
        maxHeight: "100%",
        overflow: "scroll",
      }}
    />
  );
};

export default ComponentPackage;
