
import React, { useState, useEffect, useContext, } from 'react';
import { Link, } from 'react-router-dom';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartFilled,
    SettingFilled,
    DashboardOutlined,
    UsergroupAddOutlined,
    PoundCircleFilled,
    PhoneOutlined,
    HeartFilled,
    FundFilled,
    FilePptFilled,
    UserOutlined,
    UnlockFilled,
    ThunderboltFilled,
    LogoutOutlined,
    DownOutlined,
    MoneyCollectFilled,
    CalculatorFilled,
    FunnelPlotFilled,
} from '@ant-design/icons';
import { Layout, Menu, theme, ConfigProvider, Button, Breadcrumb, Select, Space, Dropdown, Flex, Divider } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

const Main = () => {

    const [showChild, setShowChild] = useState(false)
    const [domLoaded, setDomLoaded] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const name = localStorage.getItem('account');

    const {
        token: { colorBgContainer },
    } = theme.useToken();
    useEffect(() => {
        setDomLoaded(true);
    }, []);
    useEffect(() => {
        setShowChild(true)
    }, [])
    if (!showChild) {
        return null
    }
    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    };

    const items = [
        {
            key: '1',
            label: (
                <span onClick={() => handleLogout()}>Sign Out</span>
            ),
            icon: <LogoutOutlined onClick={() => handleLogout()} />,
        },
    ];


    if (typeof window !== "undefined") {

        return (
            <>
                {domLoaded && (
                    <ConfigProvider theme={
                        {
                            "components": {},
                            "token": {
                                "colorPrimary": "#6b21a8",
                            }
                        }
                    }>
                        <Layout className='rounded-none animate__animated animate__fadeIn' style={{ minHeight: '100vh', }} >
                            {/* collapsedWidth="10" */}
                            <Sider trigger={null} collapsible collapsed={collapsed} className='shadow bg-white' width={240} breakpoint="lg">
                                <div className="demo-logo-vertical flex  justify-center p-4 bg-purple-800 text-white" >Diebeties Prediction System</div>
                                {collapsed ? null : (<> <div className="row">
                                    <div className='col-sm col-md col-lg flex justify-center'>
                                        <Space>
                                            <span><i className="bi bi-person-fill text-3xl" style={{ color: '#0E65B4' }}></i></span>
                                            <span>
                                                <Dropdown menu={{ items, }} arrow trigger={['click']}>
                                                    <Flex className='py-4' gap="small" vertical>
                                                        <Space>
                                                            {name}
                                                            <DownOutlined style={{ color: '#0E65B4' }} />
                                                        </Space>
                                                    </Flex>
                                                </Dropdown>
                                            </span>
                                        </Space>

                                    </div>
                                </div></>)}
                                <Divider className='p-0 m-0' />
                                <Menu className='py-3' mode="inline" defaultSelectedKeys={['/dashboard',]} defaultOpenKeys={['/dashboard']} onClick={(item) => { navigate(item.key) }}
                                    items={
                                        [
                                            {
                                                key: "/dashboard",
                                                label: 'Dashboard',
                                                icon: <DashboardOutlined />,
                                            },
                                        ]
                                    } />
                            </Sider>
                            <Layout >
                                <Header className='bg-white' >
                                    <div className='row'>
                                        <div className='col-sm col-md col-lg flex justify-start'>
                                            <span>
                                                <Button
                                                    type="text"
                                                    icon={collapsed ? <MenuUnfoldOutlined className='color' /> : <MenuFoldOutlined className='color' />}
                                                    onClick={() => setCollapsed(!collapsed)}
                                                />
                                            </span>

                                        </div>
                                    </div>
                                </Header>
                                <Content style={{ overflow: 'auto', height: '80vh' }} className='p-0 m-0 color2' >
                                    <Outlet />
                                </Content>
                                <Footer style={{ background: colorBgContainer, borderRadius: '0px 6px 6px 0px' }} className='text-center flex justify-center' > <span>Copyright &copy; {new Date().getFullYear()} Powered By Cimas Developers</span> </Footer>
                            </Layout>
                        </Layout>
                    </ConfigProvider>
                )}
            </>
        );
    }
}

export default Main;

