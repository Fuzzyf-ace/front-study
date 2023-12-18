import { Card, Form, Input, Button, message } from "antd";
import React from "react";
import logo from "@/assets/logo.png";
import "./index.scss";
import { sendLoginRequest } from "@/store/modules/userStore";
import { useDispatch } from "react-redux";
import router from "@/router";
const Login = () => {
  const dispatch = useDispatch();
  const onFinish = (data) => {
    dispatch(sendLoginRequest(data))
      .then(() => {
        message.success("登录成功");
        router.navigate("/");
      })
      .catch((error) => {
        message.error(error.response.data.message);
      });
  };
  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* 登录表单 */}
        <Form validateTrigger="onBlur" onFinish={onFinish}>
          <Form.Item
            name={"mobile"}
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
            name={"code"}
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
