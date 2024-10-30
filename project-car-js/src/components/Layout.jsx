import React, { useState } from 'react';
import {  HomeFilled, ProductFilled, InfoCircleFilled} from '@ant-design/icons';
import { Layout as LayoutAnt, Menu, theme } from 'antd';
import CarTable from './CarTable';
import { Link, Outlet, useLocation } from 'react-router-dom';



const { Header, Content, Footer , Sider} = LayoutAnt;



const items = 
    [{
        key: '/',
        label: "Home",
        icon: <Link to="/"><HomeFilled /></Link>,
    },
    {
        key: '/cars',
        label: "Catalog",
        icon: <Link to="/cars"><ProductFilled /></Link>
    },
    {
        key: '/about',
        label: "About",
        icon: <Link to="/about"><InfoCircleFilled /></Link>
    }]
  const Layout = () => {
    const [current] = useState(useLocation().pathname);

    const {
      token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
      <LayoutAnt className='Layout'>
        <Sider className='siderLayout'
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <img src="https://static.vecteezy.com/system/resources/thumbnails/027/385/442/small/car-stainless-logo-png.png" width="150px" alt="" srcset="" className='logo' />
          <div className="demo-logo-vertical" />
          <Menu className='menuSider'
          theme="dark" 
          mode="inline" 
          defaultSelectedKeys={[current]} 
          items={items} 
          />
        </Sider>
        <LayoutAnt>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
              height: '100px',
            }}>
                
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
              <Outlet />
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
      </LayoutAnt>
    );
  };
export default Layout;