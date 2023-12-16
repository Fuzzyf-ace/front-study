import { Card, Form, Input, Button } from "antd";
import React from "react";
import logo from "@/assets/logo.png";
import "./index.scss";
const Login = () => {
  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* 登录表单 */}
        <Form validateTrigger="onBlur" onFinish={console.log}>
          <Form.Item
            name={"phone"}
            rules={[
              {
                required: true,
                message: "请输入手机号",
              },
              {
                pattern: /^1\d{10}$/,
                message: "请输入正确的手机号",
              },
            ]}
          >
            <Input size="large" placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item
            name={"token"}
            rules={[
              {
                required: true,
                message: "请输入验证码",
              },
              {
                pattern: /^\d{6}$/,
                message: "请输入正确的验证码",
              },
            ]}
          >
            <Input size="large" placeholder="请输入验证码" maxLength={6} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
