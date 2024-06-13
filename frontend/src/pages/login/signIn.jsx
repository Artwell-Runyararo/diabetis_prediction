import React, { useEffect, useState } from "react";
import { Layout, Button, Typography, ConfigProvider, Form, message, Input, Alert, Divider } from "antd";
import { LockOutlined, ScanOutlined } from "@ant-design/icons";
import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const { Title } = Typography;
const { Content } = Layout;

const SignIn = () => {

    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();
    const [loading, setLoading] = useState(false);
    const [received, setReceived] = useState("");
    const [notice, setNotifier] = useState(false);
    const navigate = useNavigate();

    // accounts
    let johnName = 'John';
    let johnPassword = '1234';
    let jaddress = '1234 Harare Street Zimbabwe';
    let jphone = '0772747830';
    let jage = '34';
    let jgender = 'Male';
    let jjob = 'Software Developer';
    let jsocial = 'FaceBook';


    let peterName = 'Peter';
    let peterPassword = '0123';
    let paddress = '1234 Harare Street Zimbabwe';
    let pphone = '0772747830';
    let page = '34';
    let pgender = 'Male';
    let pjob = 'Software Developer';
    let psocial = 'FaceBook';

    let mikeName = 'Mike';
    let mikePassword = '12345';
    let maddress = '1234 Harare Street Zimbabwe';
    let mphone = '0772747830';
    let mage = '34';
    let mgender = 'Male';
    let mjob = 'Software Developer';
    let msocial = 'FaceBook';


    const onSubmit = async (values) => {

        setLoading(true);
        if (values?.acc_name === johnName && values?.password === johnPassword) {
            localStorage.setItem('account', johnName);

            localStorage.setItem('address', jaddress);
            localStorage.setItem('phone', jphone);
            localStorage.setItem('age', jage);
            localStorage.setItem('gender', jgender);
            localStorage.setItem('job', jjob);
            localStorage.setItem('social', jsocial);

            navigate("/dashboard");
        } else if (values?.acc_name === peterName && values?.password === peterPassword) {
            localStorage.setItem('account', peterName);

            localStorage.setItem('address', paddress);
            localStorage.setItem('phone', pphone);
            localStorage.setItem('age', page);
            localStorage.setItem('gender', pgender);
            localStorage.setItem('job', pjob);
            localStorage.setItem('social', psocial);

            navigate("/dashboard");
        } else if (values?.acc_name === mikeName && values?.password === mikePassword) {
            localStorage.setItem('account', mikeName);

            localStorage.setItem('address', maddress);
            localStorage.setItem('phone', mphone);
            localStorage.setItem('age', mage);
            localStorage.setItem('gender', mgender);
            localStorage.setItem('job', mjob);
            localStorage.setItem('social', msocial);

            navigate("/dashboard");
        }
        setLoading(false);

    };

    return (
        <>
            <div className="container-fluid">
                <div className="row py-5">
                    <div className="col-sm-0 col-md-0 col-lg-3"></div>
                    <div className="col-sm-12 col-md-12 col-lg">
                        <Card>
                            <ConfigProvider theme={{ "token": { "fontSize": 12, "colorPrimary": "#6b21a8" } }}>
                                <Layout>
                                    <Content>
                                        <div className="container-fluid bg-white">
                                            <div className="row">
                                                <div className="col-sm col-md col-lg p-5">
                                                    <Title className="text-4xl font-bold">Sign In</Title>
                                                    <Title className="font-regular text-muted" level={5}> Enter your email and password to sign in </Title>

                                                    {notice ? (
                                                        <div className='py-2'>
                                                            <Alert message={`Sorry: ${received}`} type="error" showIcon closable />
                                                        </div>
                                                    ) : null}

                                                    <Form layout="vertical" initialValues={{ remember: true }} className="row-col" form={form} onFinish={onSubmit} hideRequiredMark autoComplete="off">
                                                        <Form.Item label="Account Name" name="acc_name" rules={[{ required: true, message: "Please input your account name!" }]}>
                                                            <Input prefix={<ScanOutlined />} aria-required="true" autoComplete="current-email" placeholder="Account name" />
                                                        </Form.Item>

                                                        <Form.Item label="Password" name="password" rules={[{ required: true, message: "Please input your password!" }]}>
                                                            <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} aria-required="true" autoComplete="current-password" placeholder="Password" />
                                                        </Form.Item>

                                                        <Divider className="mt-5" />
                                                        <Form.Item>
                                                            <Button type="primary" htmlType="submit" style={{ width: "100%" }}> SIGN IN</Button>
                                                        </Form.Item>
                                                    </Form>
                                                    <div className="row">
                                                        <div className="col">
                                                            <Link to={`/`} className='text-purple-800'>Return Home</Link>
                                                        </div>
                                                    </div>
                                                    <div className=''>
                                                        {loading ? (
                                                            <span className="flex items-center text-sky-800 rounded-lg px-2 py-1">
                                                                <svg className="mr-3 h-5 text-sky-800  w-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                                </svg>
                                                                <span className="font-medium"> Signing you in ... </span>
                                                            </span>
                                                        ) : <span></span>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Content>
                                </Layout>
                            </ConfigProvider>
                        </Card>
                    </div>
                    <div className="col-sm-0 col-md-0 col-lg-3"></div>
                </div>
            </div>
        </>
    )
}

export default SignIn;
