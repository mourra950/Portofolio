import { Button, Card, CardGroup, Carousel, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Canvas } from '@react-three/fiber';
import Model from './ultimateRoom.jsx'
import { Float, OrbitControls, Sparkles } from '@react-three/drei';
import './App.css'
import { Fade } from 'react-awesome-reveal';
function Projects() {
    return (
        
        <div className=' Sections'>
            <h1> Projects</h1>
            
            
                <Carousel touch={false} variant="dark">
                    <Carousel.Item>
                        <Canvas shadows camera={{ position: [10, 1, 10], fov: 40 }}>
                            <pointLight position={[1, 5, 2.5]} />


                            <Float>
                                <Sparkles count={20} position={[0, 1, 0]} size={10} color={'yellow'} scale={[6, 5, 6]} />
                                <Model position={[0, 0, 0]} />
                            </Float>
                            <OrbitControls rotation={true} enablePan={false} />
                        </Canvas>
                        <Carousel.Caption>
                            <h4>3D Room</h4>
                            <p style={{ fontSize: '1.4vmax' }}>3D web devolpment using React-fiber.
                                interact by dragging and zooming</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src='./pixelball-export.gif' style={{ height: '25vmax' }} />

                        <Carousel.Caption>
                            <h4>Pixel Ball</h4>
                            <p style={{ fontSize: '1.4vmax' }}>Pixel ball was my first to the world of pixel art.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>

                        <Image src='https://img.youtube.com/vi/g7wws6VFd3o/maxresdefault.jpg' style={{ height: '25vmax' }} />

                        <Carousel.Caption >
                            <h5 >High School graduation video</h5>
                            <p style={{ fontSize: '1.4vmax' }}>
                                I was responsible to create my Highschool graduation video .
                                <a href='https://www.youtube.com/watch?v=g7wws6VFd3o'>Watch</a>
                            </p>

                            {/* <Button href='https://www.youtube.com/watch?v=g7wws6VFd3o' variant='dark' >Watch on Youtube</Button> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src='./jake.png' style={{ height: '25vmax' }} />

                        <Carousel.Caption  >
                            <h4 >3D cartoon Modelling</h4>
                            <p style={{ fontSize: '1.4vmax' }}>
                                2021 i started learning and recreating my favorite characters on blender.
                            </p>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

           
        </div>
       
    )
}

export default Projects



{/* 

            <CardGroup >

                <Card >
                    <Canvas shadows camera={{ position: [0, 3, 10], fov: 40 }}>
                        <pointLight position={[0, 2.5, 5]} />


                        <Float>
                            <Sparkles count={20} position={[0, 1, 0]} size={10} color={'yellow'} scale={[6, 5, 6]} />
                            <Model position={[0, -1, 0]} />
                        </Float>
                        <OrbitControls rotation={true} enablePan={false} />
                    </Canvas>

                    <Card.Body>
                        <Card.Title><h2>3D Room</h2></Card.Title>
                        <Card.Text>
                            I am currently learning 3D web devolpment using THREE.js and React-fiber.
                            please enjoy this demo by dragging and zooming
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card >
                    <Image src='./pixelball-export.gif' />

                    <Card.Body  >
                        <Card.Title><h2>Pixel Ball </h2></Card.Title>
                        <Card.Text>
                            Pixel ball was my first to the world of pixel art and its one of my favorite hobbies at the moment
                        </Card.Text>

                    </Card.Body>
                </Card>
                <Card >
                    <Image src='https://img.youtube.com/vi/g7wws6VFd3o/hqdefault.jpg' />

                    <Card.Body>
                        <Card.Title><h2>High School graduation video</h2></Card.Title>
                        <Card.Text>
                            I was responsible to create my Highschool graduation video and used different moment throughout our school years mixed with some famous trends and memes.
                        </Card.Text>
                        <Button href='https://www.youtube.com/watch?v=g7wws6VFd3o' variant='dark' >Watch on Youtube</Button>
                    </Card.Body>
                </Card>

            </CardGroup> */}