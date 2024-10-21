import React from 'react';
import { Breadcrumb, Layout as LayoutAnt, Menu, theme } from 'antd';
import { HomeFilled, InfoCircleFilled, ProductFilled } from '@ant-design/icons';
import CarTable from './CarTable';

const { Header, Content, Footer } = LayoutAnt;

const items = [
    {
        key: 1,
        label: "Home",
        icon: <HomeFilled />,
    },
    {
        key: 2,
        label: "Products",
        icon: <ProductFilled />
    },
    {
        key: 3,
        label: "About",
        icon: <InfoCircleFilled />
    },
];

const Layout = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <LayoutAnt className='Layout'>
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    items={items}
                    style={{
                        flex: 1,
                        minWidth: 0,
                    }}
                />
            </Header>

            <Content className='main'
                style={{
                    padding: '0 48px',
                    margin: '24px 0'
                }}
            >
                <div
                    style={{
                        background: colorBgContainer,
                        minHeight: 280,
                        padding: 24,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <CarTable />
                </div>
            </Content>

            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </LayoutAnt>
    );
};
export default Layout;