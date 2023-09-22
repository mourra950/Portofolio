
import React, { useState } from 'react';
import { Figure } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Layout, theme, Typography, Row, Col, Card, Divider, Image } from 'antd';
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from 'react-icons/bs'
import './about.css'
import { motion } from 'framer-motion';
import { SKILLS, EDUCATION } from './aboutdata.js'


const { Title, Paragraph } = Typography;
const { Content, Sider } = Layout;

function About() {
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
                <motion.div
                    key={'about'}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
                >
                    <Layout>

                        <Content
                            style={{
                                margin: '0px 0px 0',
                                overflowY: "auto"
                            }}
                        >
                            <div style={{ padding: '2rem' }}>
                                <h1>Ahoy there,</h1>
                                <Row >
                                    <Col md={24} lg={12}>

                                        <Paragraph className='SE' style={{ lineHeight: '36px' }}>
                                            fellow adventurer! I see you've stumbled upon my portfolio as a mighty computer engineer student from the great land of Egypt. As a brave soul who has majored in the mystical arts of computer graphics, I am well-versed in the ways of game development, embedded systems, web development, and the creation of wondrous 3D models. But that's just the beginning! I have also mastered the ways of pixel art, and can craft masterpieces by editing. So go ahead, take a look at my portfolio and delve into the many wonders I have to offer. I assure you, you won't be disappointed!
                                        </Paragraph>
                                    </Col>
                                    <Col style={{ justifyContent: 'center', display: 'flex', justifyItems: 'center' }} md={24} lg={12}>
                                        <Image src='./photos/about/selfie2.png' />
                                    </Col>
                                </Row>
                                <Divider />
                                <Title className='SE' level={2}>My Skills</Title>
                                <Row style={{ textAlign: 'center', justifyContent: 'center' }} gutter={[16, 16]}>
                                    {SKILLS.map((icon, index) => (
                                        <Col key={index} xs={8} sm={6} md={4}>
                                            <Figure >
                                                <Figure.Image className='skillz' src={icon.src} />
                                                <Figure.Caption> {icon.tite} </Figure.Caption>
                                            </Figure>
                                        </Col>
                                    ))}
                                </Row>
                                <Divider />

                                <Title className='SE' level={2}>My Education</Title>
                                {EDUCATION.map((edu) => {
                                    return (
                                        <Card key={edu.title}>
                                            <Title className='SE' level={3}>{edu.title}</Title>
                                            {edu.description.map((paragraph) => {
                                                return (
                                                    <Paragraph className='SE'>
                                                        {paragraph}
                                                    </Paragraph>
                                                )
                                            })}
                                        </Card>
                                    )
                                })}
                                <Divider />
                                <Title className='SE' level={2}>My Interests</Title>
                                <Paragraph className='SE'>
                                    My love for video games, pixel art, and the world of computers began with my first game, Pokemon Emerald.
                                    <Image style={{ padding: '20px 0 20px 0' }} src='./photos/about/pokemon.png' />
                                    I spent countless hours playing and replaying, enjoying every moment. While I played other games on different consoles, like PC, PS1 and PS2, none ignited my passion like my first time playing the GameBoy Legend of Zelda Minish Cap.
                                    <Image style={{ padding: '20px 0 20px 0' }} src='./photos/about/legend.jpg' />
                                    I was amazed at how a small game could pack so much fun , mystery, fun characters and enjoyable puzzels . From that moment, I started playing every Legend of Zelda game I could get my hands.
                                </Paragraph>
                                <Paragraph className='SE'>
                                    During my journey, I played other games from Triple A games to indie games like Undertale and Celeste,
                                    <Image style={{ padding: '20px 0 20px 0' }} src='./photos/about/celeste.jpg' />

                                    which had a huge impact on my mental health. It was then that I decided I wanted to become a game developer so that I could recreate that precious moment for someone else.
                                </Paragraph>
                            </div>
                        </Content>
                    </Layout>
                </motion.div>
            </Layout >

        </>
    )
}

export default About