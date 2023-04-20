
import { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement, } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { data } from "./experiencedata"
import { Link } from 'react-router-dom';
import { Button, Layout, theme } from 'antd';
import React from 'react';
const { Content, Sider } = Layout;
import { Typography, Row, Col, Card, Divider } from 'antd';
import { certificates } from "./certificate"
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from 'react-icons/bs'

const { Paragraph } = Typography;

import './experience.css'
import Column from 'antd/es/table/Column';

function Experience() {
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
                    width={200}
                    breakpoint="md"
                    collapsedWidth="0"
                    theme='light'
                    style={{ backgroundColor: "white" }}
                >
                    <p className='t'>Omar Yousef</p>
                    <p className='s'>showcase 2023</p>
                    <div className='side-nav'>
                        <Link to='/' className='Sect' >Home</Link>
                        <Link to='/about' className='Sect' >About</Link>
                        <Link to='/experience' className='Sect' >Experience</Link>
                        <Link to='/project' className='Sect' >Project</Link>
                    </div>
                    <div>
                        <div className="social">
                            <a style={{ fontSize: '28px' }} className="Github " href="https://github.com/mourra950">
                                <BsGithub className="icon " />
                            </a>
                            <a style={{ fontSize: '28px' }} className="Youtube icon" href="https://www.youtube.com/@mourra9598/videos">
                                <BsYoutube className="icon " />
                            </a>
                            <a style={{ fontSize: '28px' }} className="Insta icon" href="https://www.instagram.com/mourra_odyssy/">
                                <BsInstagram className="icon " />
                            </a>
                            <a style={{ fontSize: '28px' }} className="Linkdin icon" href="https://www.linkedin.com/in/mourra950/">
                                <BsLinkedin className="icon " />
                            </a>
                        </div>
                    </div>
                </Sider>
                <Layout>

                    <Content
                        style={{
                            margin: '0px 0px 0',
                            overflowY: "auto"
                        }}
                    >
                        <div style={{ padding: '2rem' }}>
                            <h1>Experience</h1>
                            <Paragraph className='SE' style={{ lineHeight: '36px' }}>
                                As an aspiring professional in the field of technology, I am constantly seeking new opportunities to broaden my knowledge and expertise. I believe that it is important to continuously challenge myself by taking various courses and participating in competitions in different fields. Through platforms such as Udemy, Coursera, and CS50, I have been able to explore various technologies and expand my skill set. Additionally, I am always eager to learn and embrace new technologies, and I am open to taking on any opportunity that allows me to further develop my knowledge and expertise. This mindset has enabled me to constantly evolve and adapt to the rapidly changing technology landscape, and I am excited to continue on this path of growth and learning.     </Paragraph>
                            <Divider />
                            <VerticalTimeline
                                layout='2-columns'
                            >
                                {data.map((data) => (
                                    <VerticalTimelineElement
                                        className="vertical-timeline-element--work"
                                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                        date={data.date}
                                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                    >
                                        <h4 className="vertical-timeline-element-title">{data.title}</h4>
                                        <h5 className="vertical-timeline-element-subtitle">{data.role}</h5>
                                        <p>
                                            {data.des}
                                        </p>
                                    </VerticalTimelineElement>
                                ))
                                }
                            </VerticalTimeline>
                            <Divider />
                            <h1 style={{ marginBottom: '32px' }}>Relevant certificates</h1>
                            <Paragraph className='SE' style={{ lineHeight: '36px' }}>
                                This section displays some of my certificates. To view all of my certificates, please visit my <a href='https://www.linkedin.com/in/mourra950/'>LinkedIn</a> profile.
                            </Paragraph>
                            <Row gutter={[16, 16]}>
                                {certificates.map((cert) => (
                                    <Col sm={24} md={12} lg={8}>
                                        <Card hoverable title={cert.title} description={cert.organization} bordered={false}>
                                            issued by {cert.organization}
                                            <br />
                                            date : {cert.date}
                                            <Button block href={cert.link}>go to certificate</Button>

                                        </Card>
                                    </Col>

                                ))}


                            </Row>
                        </div>
                    </Content>

                </Layout>
            </Layout >
        </>
    )
}

export default Experience