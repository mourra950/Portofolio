import { Button, Card, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './Navigationbar.jsx';
import FirstSection from './FirstSection.jsx';
import { Canvas } from '@react-three/fiber';
import Model from './Room1.jsx'
import { Float, OrbitControls, OrthographicCamera, PresentationControls, Sparkles } from '@react-three/drei';
import Projects from './Project.jsx';
import Skills from './Skills.jsx';
function Hero() {
    return (
        <>
            <Navigationbar />
            <FirstSection />
            <Skills/>
            <Projects/>
        </>
    )
}

export default Hero