import { Button, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './Navigationbar.jsx';
import FirstSection from './FirstSection.jsx';
import { Canvas } from '@react-three/fiber';
import Model from './Room1.jsx'
import { Float, OrbitControls, OrthographicCamera, PresentationControls, Sparkles } from '@react-three/drei';
function Hero() {
    return (
        <>
            <Navigationbar />
            <FirstSection />
            <Canvas className={'ahmed'} shadows  camera={{ position: [0, 0, 10], fov: 60 }}>
                {/* <OrthographicCamera makeDefault position={[0, 2.5, 5]} scale={0.02} near={0.00001} far={1000} /> */}
                <pointLight position={[0, 2.5, 5]} />

                
                    <Float>
                        <Sparkles count={20} position={[0, 1, 0]} size={20} color={'yellow'} scale={[6, 5, 6]} />
                        <Model />
                    </Float>

                

            </Canvas>

        </>
    )
}

export default Hero