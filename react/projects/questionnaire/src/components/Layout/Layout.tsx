import { FC } from "react";
import "./Layout.css";

const Layout: FC = () => {
  return (
    <div className="layout">
      <div className="header">Header</div>
      <div className="main">
        <div className="left">Left</div>
        <div className="center">Center</div>
        <div className="right">Right</div>
      </div>
      <div className="footer">Footer</div>
    </div>
  );
};

export default Layout;
