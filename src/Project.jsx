import { Button, Card, CardGroup, Col, Container, Image, Navbar, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './Navigationbar.jsx';
import FirstSection from './FirstSection.jsx';
import { Canvas } from '@react-three/fiber';
import Model from './Room1.jsx'
import { Float, OrbitControls, OrthographicCamera, PresentationControls, Sparkles } from '@react-three/drei';
function Projects() {
    return (
        <><h1> Projects</h1>
            <div />
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
                        </Card.Text>
                        <Button variant="dark">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card >
                    <Image src='./pixelball-export.gif' />

                    <Card.Body>
                        <Card.Title><h2>Pixel Ball </h2></Card.Title>
                        <Card.Text>
                            Pixel ball was my first to the world of pixel art and its one of my favorite hobbies at the moment
                        </Card.Text>
                        <Button variant="dark">Go somewhere</Button>
                    </Card.Body>
                </Card>
               
            </CardGroup>
        </>
    )
}

export default Projects