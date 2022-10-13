import React from "react";
import { Button, Checkbox, Form, Input, message } from "antd";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import Lottie from "lottie-react";
import bg_movie_loading from "../../assets/bg-movie-loading.json";
import { userServ } from "../../services/userService";
import { setUserInfo } from "../../redux/slice/userSlice";
import { localService } from "../../services/localService";

export default function LoginPage() {
  let navigate = useNavigate();

  let dispatch = useDispatch();

  const onFinish = (values) => {
    userServ
      .postLogin(values)
      .then((res) => {
        console.log(res);
        dispatch(setUserInfo(res.data.content));

        localService.user.set(res.data.content);

        navigate("/management");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onFinishFailed = (errorInfo) => {};
  return (
    <div className="container mx-auto h-screen w-screen flex items-center justify-center">
      <div className="w-1/2 h-full">
        <div className="scale-50">
          {" "}
          <Lottie animationData={bg_movie_loading} />
        </div>
      </div>
      <div className="w-1/2 h-full flex items-center justify-center">
        <Form
          className="bg-blue-100 w-full"
          layout="vertical"
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 24,
          }}
          initialValues={{}}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="taiKhoan"
            rules={[
              {
                required: true,
                message: "Vui long nhap tai khoan!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="matKhau"
            rules={[
              {
                required: true,
                message: "Vui long nhap mat khau!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
