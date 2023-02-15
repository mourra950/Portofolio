import Experience from "./Experience";
import Timeline from '@mui/lab/Timeline';
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

import { Slide, Fade } from "react-awesome-reveal";

export default function Experiences() {
    return (
        <div style={{backgroundColor:'#f8f8f8'}}>
            <h1 className='Sections'>Experience</h1>
            <Timeline style={{margin:'5vmax'}}
                sx={{
                    [`& .${timelineOppositeContentClasses.root}`]: {
                        flex: 0.2,
                    },
                }}
            >
            <Fade cascade damping={0.2} >
                <Experience role={'MBC group'} title={'Broadcast and Engineering intern'} des={'Joined as an intern for 2 months during which I learned everything starting from the studio until the video and audio signal reach every house including infrastructure, IT, TV Direction, and quality assurance.'}/>
                <Experience role={'AIESEC'} title={'Incoming global teaching project manager'} des={'In 2022 I worked in AIESEC Ainshams as product manager and exchange participants manager during which i succesfully made contracts with different establishments to provide foreigners for the teaching positions needed and got at the end of the semester best member award'}/>
                <Experience role={'ICPC '} title={'Contestant'} des={'We participated in the ICPC - International Collegiate Programming Contest as a team enigma and got ranked 17.'}/>
                <Experience role={'Cisco'} title={'IT intern'} des={'Worked for a month as an intern for IT and made some logos for some applications they were working on.'}/>
                <Experience role={'SOUL'} title={'Marketing Member'} des={'University Student activity I was responsible for Graphic designing and video editing of any marketing materials needed for the sponsors or their social platforms but closed shortly because of covid.'}/>
                </Fade>
            </Timeline>
        </div>
    )
}