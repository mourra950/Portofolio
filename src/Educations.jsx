import { Accordion} from 'react-bootstrap'
import Education from './Education'

function Educations() {

    return (

        <div className='Sections' style={{ padding: '5vmax', backgroundColor: '#dadada' }}>
            <h1>Education</h1>
            <Accordion>
                <Education title={'Bachelor of Engineering, Ain Shams Umiversity'}
                    info={<p>Expected July 2024.
                        <br />Major in Multimedia and Computer Graphics.
                        <br />Minor in Software Product Lines.
                    </p>}
                    k={0} />
                <Education title={'High School Secondary Education, British Ramses School'}
                    info={<p> 
                    IGSCE Diploma
                    <br />GPA: 3.88/4.0
                    <br />Passed the Delf B1 exam.
                    </p>} 
                    k={1} />
                <Education
                    title={'PRE HIGH SCHOOL, COLLEGE DE LA SAINTE FAMILLE'}
                    info={<p>Francophone School studied in french as my second language for 8 years.</p>}
                    k={2} />

            </Accordion>
        </div>
    )
}
export default Educations