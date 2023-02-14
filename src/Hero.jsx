
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './Navigationbar.jsx';
import FirstSection from './FirstSection.jsx';

import Projects from './Project.jsx';
import Skills from './Skills.jsx';
import Education from './Education.jsx';
function Hero() {
    return (
        <>
            <Navigationbar />
            <FirstSection />
            <Education/>
            <Skills/>
            <Projects/>
        </>
    )
}

export default Hero