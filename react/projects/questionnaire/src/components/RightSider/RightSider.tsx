import { FC } from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";

import { EditOutlined, SettingOutlined } from "@ant-design/icons";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "属性",
    icon: <EditOutlined />,
    children: "属性",
  },
  {
    key: "2",
    label: "页面设置",
    icon: <SettingOutlined />,
    children: "页面设置",
  },
];

const RightSider: FC = () => {
  return (
    <div className="right-sider">
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
};

export default RightSider;
