
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Button, Layout, theme } from 'antd';
const { Content, Sider } = Layout;



function Hero() {
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