
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Layout, theme } from 'antd';
import React from 'react';
const { Content, Sider } = Layout;
import { Typography, Row, Col, Divider, Image } from 'antd';

const { Title, Paragraph } = Typography;
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from 'react-icons/bs'


import './project.css'


const items = [
    {
        key: '1',
        label: "Softwares and Websites",
        children: "Content of Tab Pane 1",
    }, {
        key: '2',
        label: "Softwares and Websites",
        children: "Content of Tab Pane 2",
    }
];

function Project() {
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
                            margin: '0px',
                            overflowY: "auto"
                        }}
                    >
                        <div style={{ padding: '2rem' }}>
                            <h1>Projects</h1>
                            <Row >
                                <Col >
                                    <Paragraph className='SE project' style={{ lineHeight: '36px' }}>
                                        In this section, I have highlighted some of my favorite projects that I have worked on. Although I have experience working on a variety of projects, including web development using Django and React, and embedded systems using Atmega16 and Tivac, I have carefully selected a few projects that I am particularly proud of. If you are interested in exploring more of my projects, please feel free to visit my <a href='https://github.com/mourra950'>GitHub</a> page.
                                    </Paragraph>
                                </Col>
                            </Row>
                            <Divider />
                            <div >
                                <Title className='SE'>
                                    Car Distributed Systems Game (Serene Track)
                                </Title>
                                <Paragraph className='SE' style={{ lineHeight: '36px' }}>
                                    I worked on this project with the help of <a href='https://github.com/OmarElbanna'>Eng/Omar Elbanna</a>.We created a multiplayer racing car game where players compete in real-time, even if their connection is lost or they experience a crash. We focused on making the game robust and distributed across multiple clients and servers. To achieve this, we used basic libraries and coded the system ourselves, allowing us to learn and improve our socket programming skills.
                                </Paragraph>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <Image
                                        src="./photos/project/Node_Distribution.svg"
                                    />
                                    <p style={{ textAlign: 'center', margin: '10px' }}>
                                        <b>Figure 1 :</b> Distributed system project structure</p>
                                </div>
                                <Paragraph className='SE' style={{ lineHeight: '36px' }}>
                                    Our project incorporates various components to deliver a captivating multiplayer gaming experience. It includes a Unity game instance developed with the Unity game engine, a Python proxy server that acts as an intermediary between the Unity game and the dedicated game server, a Node.js-based dedicated game server deployed on EC2 to handle game logic and real-time interactions using the Socket.IO library, a MongoDB server for storing game information and updates, a Node.js data server that retrieves data from MongoDB and provides a REST API for the React webpage, and finally, a React webpage that showcases the project, utilizing data from the Node.js data server. This architecture ensures seamless communication among the Unity game instance, Python proxy server, dedicated game server, and web components, resulting in an engaging and dynamic multiplayer gaming experience.
                                </Paragraph>
                            </div>
                            <Title className='SE'>
                                Links
                            </Title>
                            <Paragraph className='SE' style={{ lineHeight: '36px' }}>
                                <ul>
                                    <li>Game Page : <a href='https://mourra950.github.io/Distributed-Car-Game-Site/'>Live page [Github pages]</a></li>
                                    <li>Github Repo : <a href='https://github.com/mourra950/Distrubited-System-Racing-Cars'>Main Repo</a></li>
                                    <li>Youtube Trailer : <a href='https://www.youtube.com/watch?v=XfoahjVGTwg&ab_channel=mourra95'>Youtube Video</a></li>
                                </ul>
                            </Paragraph>
                            <Divider />
                            <div >
                                <Title className='SE'>
                                    Omar Yousef Portofolio
                                </Title>
                                <Paragraph className='SE' style={{ lineHeight: '36px' }}>
                                    The website you are currently viewing is called the Omar Yousef Portfolio, and its purpose is to exhibit my abilities and assist me in finding an internship during my final summer in university. Initially, the website was modest and basic, composed only of HTML and vanilla Javascript. However, I was not content with the outcome, so I embarked on learning about Node.js and the React framework after completing my first web course <a href='https://cs50.harvard.edu/web/2020/'>"CS50W"</a>. This opened up a whole new world of possibilities, and I decided to transform the website into an experience similar to a video game . I intend to continue updating it as frequently as possible, particularly after I complete the Three.js course, and as I learn more.
                                </Paragraph>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <video disablePictureInPicture loop autoPlay width="100%">
                                        <source src="./Videos/Porfolio.mp4" type="video/mp4" />
                                    </video>
                                    <p style={{ textAlign: 'center', margin: '10px' }}>
                                        <b>Figure 2 :</b> My Portfolio version 2 made in senior 1 using Reactjs</p>
                                </div>
                                <Paragraph className='SE' style={{ lineHeight: '36px' }}>
                                    My portfolio website has undergone a journey of evolution and transformation. Initially, it was a single page crafted with the MUI library, but I realized that to truly showcase my skills and creativity, I needed more. So I delved into the React Router Dom and expanded the site to incorporate multiple pages, injecting a fresh dynamic into the site's design. The next step was to replace the MUI library with the antd library, which allowed me to experiment more freely with CSS, bringing a unique flair to the site's appearance. To further enhance its aesthetic appeal, I added custom libraries for animation, giving the site a touch of whimsy and playfulness. As my passion for design grew, I began incorporating SASS and adding captivating glitching effects, giving my portfolio a distinct and memorable edge. Creating this website has been an enjoyable and rewarding experience, and I am eager to continue pushing the boundaries of design to create something truly remarkable.
                                </Paragraph>
                            </div>
                            <Title className='SE'>
                                Links
                            </Title>
                            <Paragraph className='SE' style={{ lineHeight: '36px' }}>
                                <ul>
                                    <li>Page : <a href='https://mourra950.github.io/Portofolio/'>Live page [Github pages]</a></li>
                                    <li>Github Repo : <a href='https://github.com/mourra950/Portofolio/'>Repo</a></li>
                                </ul>
                            </Paragraph>
                            <Divider />

                            <div>
                                <Title className='SE'>
                                    3D Room
                                </Title>
                                <Paragraph className='SE' style={{ lineHeight: '36px' }}>
                                    My first foray into 3D design was the creation of a remarkable 3D room using the powerful combination of Three.js, React Three Fiber, and Drei. With these innovative tools, I was able to seamlessly integrate a stunning 3D room, designed using Blender, into a captivating web environment. The site is fully interactive, allowing visitors to explore the intricacies of the 3D room with ease. This was an exciting and immersive project that has left me eager to explore more of the possibilities of 3D design.    </Paragraph>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <video autoPlay disablePictureInPicture loop width="100%">
                                        <source src="./Videos/Room.mp4" type="video/mp4" />
                                    </video>
                                    <p style={{ textAlign: 'center', margin: '10px' }}>
                                        <b>Figure 3 : </b>My Room made in blender and integrated using react three fiber</p>
                                </div>
                                <Paragraph className='SE' style={{ lineHeight: '36px' }}>
                                    My journey into the world of 3D design began a year ago when I first discovered Blender. I was captivated by its versatility and power, but I never imagined that I could integrate my 3D models into the web. That was until I began learning Three.js, and subsequently, React Three Fiber. Learning the basics of computer graphics was an essential step in my journey, and it gave me the foundation I needed to create truly remarkable 3D scenes. React Three Fiber made the process of creating scenes so much more accessible, and it opened up new possibilities that I had never considered before. The journey was challenging, but it was also highly enjoyable, and I am proud that I faced it head-on. I am excited to see where this newfound passion for 3D design will take me in the future.         </Paragraph>
                            </div>
                            <Title className='SE'>
                                Links                                </Title>
                            <Paragraph className='SE' style={{ lineHeight: '36px' }}>
                                <ul>
                                    <li>Github Page : <a href='https://mourra950.github.io/My-Room-Threejs/'>Live page [Github pages]</a></li>
                                    <li>Github Repo : <a href='https://github.com/mourra950/My-Room-Threejs'>Repo</a></li>
                                </ul>
                            </Paragraph>
                            <Divider />
                            <div>
                                <Title className='SE'>
                                    Rover NASA Mars Simulator
                                </Title>
                                <Paragraph className='SE' style={{ lineHeight: '36px' }}>
                                    Leveraged my expertise in Python, OpenCV, and NumPy to write scripts that employed computer
                                    vision techniques for autonomous navigation and gold rock collection in a simulation like errosion and perspective transform from camera view to bird eye view.Using my skills in Python, NumPy, and OpenCV, I created scripts that employed various computer vision techniques for autonomous navigation and gold rock collection in a simulation. These techniques included erosion, perspective transformation from camera view to bird's eye view, and others, etc.
                                </Paragraph>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <video disablePictureInPicture loop autoPlay width="100%">
                                        <source src="./Videos/Rover.mp4" type="video/mp4" />
                                    </video>
                                    <p style={{ textAlign: 'center', margin: '10px' }}>
                                        <b>Figure 4 :</b> Rover in action </p>
                                </div>
                                <Paragraph className='SE' style={{ lineHeight: '36px' }}>
                                    As a university project for a computer vision course, my project involved implementing flawless execution, collision avoidance, and real-time mapping of the surrounding world. I am proud to say that the project was a success, and we were able to achieve a mapping accuracy of 95% with 90% precision, which resulted in top marks for the project.
                                </Paragraph>
                            </div>
                            <Title className='SE'>
                                Links
                            </Title>
                            <Paragraph className='SE' style={{ lineHeight: '36px' }}>
                                <ul>
                                    <li>Github Repo : <a href='https://github.com/mourra950/Rover_Sim'>Repo</a></li>
                                    <li>Video Sample : <a href='https://www.youtube.com/watch?v=nr3JfPq8gJs'>Youtube</a></li>

                                </ul>
                            </Paragraph>
                            <Divider />
                            <div>
                                <Title className='SE'>
                                    3D modelling
                                </Title>
                                <Paragraph className='SE' style={{ lineHeight: '36px' }}>
                                    I have a passion for animation and cartoons, and lately, I've been honing my skills in Blender. I've been creating 3D models of my favorite characters and scenes, and I'm proud to share my progress on my <a href='https://www.instagram.com/mourra_odyssy/'>Instagram page</a>. If you're interested, feel free to check it out!
                                </Paragraph>
                                <Carousel>
                                    <Carousel.Item>
                                        <video disablePictureInPicture loop autoPlay width="100%">
                                            <source src="./photos/project/animation.mp4" type="video/mp4" />
                                        </video>
                                        <Carousel.Caption>
                                            <h3>Lego</h3>
                                            <p>My first flawless animation</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Image
                                            src="./photos/project/emmet.jpg"
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                            <h3>Emmet</h3>
                                            <p>Lego Movie</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Image
                                            src="./photos/project/beachph.jpg"
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                            <h3>Beach</h3>
                                            <p>Monster Inc.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Image
                                            src="./photos/project/jake.jpg"
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                            <h3>Jake</h3>
                                            <p>Adventure Time</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Image
                                            src="./photos/project/mike2.jpg"
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                            <h3>Mike</h3>
                                            <p>Monster inc</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Image
                                            src="./photos/project/squidwardface.jpg"
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                            <h3>Squidward</h3>
                                            <p>Spongbob Squarepants</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Image
                                            src="./photos/project/SquidwardHouse.jpg"
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                            <h3>Squidward House</h3>
                                            <p>Spongbob Squarepants</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Image
                                            src="./photos/project/shamshom.jpg"
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                            <h3>Plankton</h3>
                                            <p>Spongbob Squarepants</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>

                                </Carousel>

                                <Paragraph className='SE' style={{ lineHeight: '36px' }}>
                                    I am continuing to refine my 3D modeling skills and delving deeper into the realm of materials and material maps. In the near future, I intend to make a fully imersive animation.
                                </Paragraph>
                            </div>


                            <Divider />
                        </div>
                    </Content>
                </Layout>
            </Layout >
        </>
    )
}

export default Project