
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
// import FirstSection from './pages/mainpage/sections/FirstSection.jsx';
// import Projects from './pages/mainpage/sections/Project.jsx';
// import Skills from './pages/mainpage/sections/Skills.jsx';
// import Educations from './pages/mainpage/sections/Educations.jsx';
// import Experiences from './pages/mainpage/sections/Experiences.jsx';




function Hero() {
    const [collapsed, setCollapsed] = useState(false);

    const onCollapse = (collapsed) => {
        setCollapsed(collapsed);
    };
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <>
            <Layout style={{ height: "100vh" }}>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    style={{ backgroundColor: "white" }}
                >
                    <p>Omar Yousef</p>
                    <Button></Button>
                </Sider>
                <Layout>

                    <Content
                        style={{
                            margin: '24px 16px 0',
                        }}
                    >
                        <div
                            style={{
                                padding: 24,
                                minHeight: 360,
                                background: colorBgContainer,
                            }}
                        >
                            content
                        </div>
                    </Content>

                </Layout>
            </Layout>
        </>
    )
}

export default Hero