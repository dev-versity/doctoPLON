import {
  Button,
  Form,
  Input
}            from "antd";
import React from "react";
import axios from "axios";
import toast from "react-hot-toast";


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

  const onFinish = async (values: any) => {
    try {
      const reponse = await axios.post("api/users/register", values)
      if ( reponse.data.success ) {
        toast.success(reponse.data.message);
      } else {
        toast.error(reponse.data.message);
      }
    } catch (err) {
      toast.error("oh noo 😧");
    }
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
            name="name"
            label="name"
            tooltip="What do you want others to call you?"
            rules={ [{ required: true, message: "Please input your name!", whitespace: true }] }
        >
          <Input/>
        </Form.Item>


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
            Register
          </Button>
        </Form.Item>
      </Form>
  );
};

export default App;