
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './Navigationbar.jsx';
import FirstSection from './FirstSection.jsx';

import Projects from './Project.jsx';
import Skills from './Skills.jsx';
import Educations from './Educations.jsx';
import Experiences from './Experiences.jsx';
function Hero() {
    return (
        <>
            <Navigationbar />
            <FirstSection   />
            <Educations  />
            <Skills />
            <Experiences />
            <Projects  />
             
        </>
    )
}

export default Hero