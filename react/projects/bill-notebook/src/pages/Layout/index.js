import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBillList } from "@/store/modules/billStore";
import { useEffect } from "react";
import { NavBar, TabBar } from "antd-mobile";
import {
  CollectMoneyOutline,
  AddSquareOutline,
  CalculatorOutline,
} from "antd-mobile-icons";
import "./style.scss";

const tabs = [
  {
    key: "/month",
    title: "月度账单",
    icon: <CollectMoneyOutline />,
  },
  {
    key: "/new",
    title: "记账",
    icon: <AddSquareOutline />,
  },
  {
    key: "/year",
    title: "年度账单",
    icon: <CalculatorOutline />,
  },
];

const Layout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBillList());
  }, [dispatch]);
  const { billList } = useSelector((state) => state.bill);
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;

  return (
    <div className="nav-app">
      <div className="nav-header">
        {/* <NavBar backArrow={false}>配合路由使用</NavBar> */}
      </div>
      <div className="nav-body">
        <Outlet />
      </div>
      <div className="nav-tabbar">
        <TabBar activeKey={pathname} onChange={(value) => navigate(value)}>
          {tabs.map((item) => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </div>
    </div>
  );
};

export default Layout;
