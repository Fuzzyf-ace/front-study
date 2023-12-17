import { Layout, Menu, Popconfirm } from "antd";
import { useNavigate } from "react-router-dom";
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import "./index.scss";
import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendUserInfoRequest, logOut } from "@/store/modules/userStore";
const { Header, Sider } = Layout;

const items = [
  {
    label: "首页",
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: "文章管理",
    key: "article",
    icon: <DiffOutlined />,
  },
  {
    label: "创建文章",
    key: "publish",
    icon: <EditOutlined />,
  },
];

const GeekLayout = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    const path = e.key;
    navigate(path);
  };
  const dispatch = useDispatch();
  //get current path
  // const path = window.location.pathname.split("/")[1];
  // what‘s　the difference between useLocation and window.location?
  //
  const location = useLocation();
  const path = location.pathname.split("/")[1] || "home";

  const userInfo = useSelector((state) => state.user.userInfo);
  useEffect(() => {
    dispatch(sendUserInfoRequest());
  }, [dispatch]);
  const handleConfirmQuit = () => {
    dispatch(logOut());
    navigate("/login");
  };
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <div className="user-info">
          <span className="user-name">{userInfo.name}</span>
          <span className="user-logout">
            <Popconfirm
              title="是否确认退出？"
              okText="退出"
              cancelText="取消"
              onConfirm={handleConfirmQuit}
            >
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={[path]}
            items={items}
            style={{ height: "100%", borderRight: 0 }}
            onClick={handleClick}
          ></Menu>
        </Sider>
        <Layout className="layout-content" style={{ padding: 20 }}>
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  );
};
export default GeekLayout;
