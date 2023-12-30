import { FC } from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";

import { AppstoreOutlined, BarsOutlined } from "@ant-design/icons";
import ComponentPackage from "./ComponentPackage/ComponentPackage";
const items: TabsProps["items"] = [
  {
    key: "1",
    label: "组件库",
    icon: <AppstoreOutlined />,
    children: <ComponentPackage />,
  },
  {
    key: "2",
    label: "图层",
    icon: <BarsOutlined />,
    children: "图层",
  },
];

const LeftSider: FC = () => {
  return (
    <div className="left-sider">
      <Tabs
        defaultActiveKey="1"
        items={items}
        style={{
          height: "100%",
          position: "relative",
        }}
      />
    </div>
  );
};

export default LeftSider;
