import React, { useState, useEffect } from 'react';
import { Button, Card, Form, Input, Space, Tabs } from 'antd';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../features/authSlice";

const { TabPane } = Tabs;

const App = () => {
  const dispatch = useDispatch();
  const [tabPosition, setTabPosition] = useState('left');
  const [users, setUsers] = useState([]);
  const { isError, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
    getUsers();
  }, [dispatch]);

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/users");
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const changeTabPosition = (value) => {
    setTabPosition(value);
  };

  const [form] = Form.useForm();

  const [formLayout, setFormLayout] = useState('horizontal');
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  

  return (
    <div>
      <div>
        <Tabs tabPosition={tabPosition}>
          <TabPane tab="Basic Settings" key="1">
            <h1 style={{ marginBottom: '50px' }}><b>Basic Settings</b></h1>
            <div style={{ display: 'flex', flexDirection: 'row-reverse', marginBottom: '20px' }}>
              <Card style={{ height: 200, width: 200, marginLeft: '20px', marginRight: '500px', justifyContent: 'center', alignItems: 'center' }}>
                <img src="https://via.placeholder.com/150" alt="placeholder" style={{ width: '100%' }} />
              </Card>
              <div style={{ flex: 1 }}>
                <Form form={form} name="validateOnly" layout="vertical" autoComplete="off" onFinish={onFinish}>
                  <Form.Item
                    name="tlp"
                    label="Phone Number"
                    initialValue={user && user.tlp}
                    rules={[
                      {
                        message: 'Please input your Phone Number!',
                      },
                    ]}
                  >
                    <Input style={{ width: 200 }} maxLength={15} />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    label="Email"
                    initialValue={user && user.email}
                    rules={[
                      {
                        message: 'Please input your User Email!',
                      },
                    ]}
                  >
                    <Input style={{ width: 200 }} maxLength={50} />
                  </Form.Item>
                  <Form.Item
                    name="name"
                    label="User Name"
                    initialValue={user && user.name}
                    rules={[
                      {
                        message: 'Please input your User Name!',
                      },
                    ]}
                  >
                    <Input style={{ width: 200 }} maxLength={30} />
                  </Form.Item>
                  <Form.Item>
                    <Space>
                      <Button type="primary" htmlType="submit">Submit</Button>
                    </Space>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </TabPane>
          <TabPane tab="Security Settings" key="2">
            <h2 style={{ marginBottom: '10px' }}><b> Security Settings</b></h2>
            <Form
              layout={formLayout}
              form={form}
              initialValues={{
                layout: formLayout,
              }}
              onValuesChange={onFormLayoutChange}
              style={{
                maxWidth: formLayout === 'inline' ? 'none' : 600,
              }}
            >
              <Form.Item>
                <Input placeholder="Old Password" />
              </Form.Item>
              <Form.Item>
                <Input placeholder="New Password" />
              </Form.Item>
              <Form.Item>
                <Input placeholder="Confirm New Password" />
              </Form.Item>
              <Form.Item>
                <Button type="primary">OK</Button>
              </Form.Item>
            </Form>
          </TabPane>
          <TabPane tab="Logo Settings" key="3">
            <h2 style={{ marginBottom: '10px' }}><b>  Logo Settings</b></h2>
            <Card style={{ height: 200, width: 200, marginLeft: '20px', marginRight: '500px', justifyContent: 'center', alignItems: 'center' }}>
              <img src="https://via.placeholder.com/150" alt="placeholder" style={{ width: '100%' }} />
            </Card>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default App;
