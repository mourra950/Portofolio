import Experience from "./Experience";
import Timeline from '@mui/lab/Timeline';
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';


export default function Experiences() {
    return (
        <div style={{ backgroundColor: '#f8f8f8' }}>
            <h1 className='Sections'>Experience</h1>
            <Timeline style={{ margin: '5vmax' }}
                sx={{
                    [`& .${timelineOppositeContentClasses.root}`]: {
                        flex: 0.2,
                    },
                }}
            >

                    <Experience
                        role={'STP Mackathon'}
                        title={'Competitor'}
                        des={'Through the use of Python and ROS, combined with my knowledge of computer vision and control, I successfully learned how to drive an autonomous car. I then applied this knowledge in a competition where the challenge was to navigate a long track using only a Wi-Fi network and without any human intervention. Our team ranked 6th out of 100, earning us a well-deserved spot among the top performers. This experience has not only allowed me to put my skills into practice, but also helped me to develop a deeper understanding of autonomous vehicle technology.'} />
                    <Experience
                        role={'MBC group'}
                        title={'Broadcast and Engineering intern'}
                        des={'I joined as a summer intern for a period of two months, during which I had the opportunity to gain a comprehensive understanding of TV broadcasting. Working under the supervision of experts, I learned everything from the initial stages in the studio, all the way through to the point where the video and audio signals reach every household. This included a deep dive into topics such as infrastructure, IT, TV direction, and quality assurance. Overall, this experience helped me to develop a well-rounded perspective of the TV broadcasting industry, and provided me with invaluable knowledge and skills that I will carry with me throughout my career.'} />
                    <Experience
                        role={'AIESEC'}
                        title={'Incoming global teaching project manager'}
                        des={'In 2022, I worked with AIESEC Ain Shams as a product manager and exchange participants manager. During this time, I successfully negotiated contracts with various establishments to provide foreign individuals for teaching positions, resulting in a mutually beneficial relationship for all parties involved. As a result of my dedication and hard work, I was honored with the Best Member Award at the end of the semester. This experience provided me with a valuable opportunity to develop my negotiation and management skills, while also contributing to the growth and success of AIESEC Ain Shams.'} />
                    <Experience
                        role={'ICPC '}
                        title={'Contestant'}
                        des={'I attended sessions focused on learning more about computer algorithms and effective problem solving using C and C++, with the goal of improving efficiency. I then applied these new skills and knowledge, alongside my team, in the ICPC competition. As a result of our hard work and dedication, we ranked 17th among all participating teams from Ain Shams University. This experience allowed me to put my problem-solving skills to the test, while also fostering teamwork and collaboration within a competitive environment.'} />
                    <Experience
                        role={'Cisco'}
                        title={'IT intern'}
                        des={'Worked for a month as an intern for IT and made some logos for some applications they were working on.'} />
                    <Experience
                        role={'SOUL'}
                        title={'Marketing Member'}
                        des={'University Student activity I was responsible for Graphic designing and video editing of any marketing materials needed for the sponsors or their social platforms but closed shortly because of covid.'} />
            </Timeline>
        </div>
    )
}