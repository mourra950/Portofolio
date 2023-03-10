import { Accordion, Button, Card, Container, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import Education from './Education'
import { Fade } from "react-awesome-reveal";

function Educations() {

    return (

        <div className='Sections' style={{ padding: '5vmax',backgroundColor:'#dadada' }}>
            <h1>Education</h1>

            <Accordion>
            <Fade triggerOnce cascade damping={0.7}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>BACHELOR OF ENGINEERING, AIN SHAMS UNIVERSITY</Accordion.Header>
                    <Accordion.Body>
                        Expected July 2024.
                        <br />
                        Major in Multimedia and Computer Graphics.
                        <br />
                        Minor in Software Product Lines.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>HIGH SCHOOL SECONDARY EDUCATION, BRITHISH RAMSES SCHOOL</Accordion.Header>
                    <Accordion.Body>
                        IGSCE Diploma<br />
                        GPA: 3.88/4.0<br />
                        Passed the Delf B1 exam.
                        {/* 
                        O Levels Subjects:<br/>
                        Math: A+<br/>
                        Physics: A+<br/>
                        Chemistry: A+<br/>
                        Computer Science: A+<br/>
                        English: A<br/>
                        French: A+<br/>
                        Arabic: A<br/>
                        Accounting: A<br/>
                        A Level Subjects:<br/>
                        Math: A <br/> */}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>PRE HIGH SCHOOL, COLLEGE DE LA SAINTE FAMILLE</Accordion.Header>
                    <Accordion.Body>
                        Francophone School studied in french as my second language for 8 years.
                    </Accordion.Body>
                </Accordion.Item>
                </Fade>
            </Accordion>
        </div>
    )
}
export default Educations