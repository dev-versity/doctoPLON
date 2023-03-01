import {
  Button,
  Form,
  Input
}             from "antd";
import React from "react";


interface DataNodeType {
  value: string;
  label: string;
  children?: DataNodeType[];
}


const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 }
  }
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 8
    }
  }
};

const App: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };



  return (
      <Form
          { ...formItemLayout }
          form={ form }
          name="register"
          onFinish={ onFinish }
          style={ { maxWidth: 600 } }
          scrollToFirstError
      >


        <Form.Item
            name="email"
            label="E-mail"
            rules={ [
              {
                type: "email",
                message: "The input is not valid E-mail!"
              },
              {
                required: true,
                message: "Please input your E-mail!"
              }
            ] }
        >
          <Input/>
        </Form.Item>

        <Form.Item
            name="password"
            label="Password"
            rules={ [
              {
                required: true,
                message: "Please input your password!"
              }
            ] }
            hasFeedback
        >
          <Input.Password/>
        </Form.Item>


        <Form.Item { ...tailFormItemLayout }>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
  );
};

export default App;