
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement, } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Button, Layout, Typography, Row, Col, Card, Divider } from 'antd';
const { Content } = Layout;
import { certificates } from "./certificate"
const { Paragraph } = Typography;
import './experience.css'
import { motion } from 'framer-motion';
import { data } from "./experiencedata"
import { SiderLay } from '../../Sider';


function Experience() {
    return (
        <>
            <Layout style={{ height: "100vh" }}>
                <SiderLay />

                <Layout className='contentlay'>
                    <motion.div
                        key={'experience'}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    >
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
                                    {data.map((data, index) => (
                                        <VerticalTimelineElement key={index}
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
                                    {certificates.map((cert, index) => (
                                        <Col key={index} sm={24} md={12} lg={8}>
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
                    </motion.div>
                </Layout>
            </Layout >
        </>
    )
}

export default Experience