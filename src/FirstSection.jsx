import { Button, Card, Container, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import { TypeAnimation } from 'react-type-animation'

import Typewriter from 'typewriter-effect';
function FirstSection() {

    return (
        <div className='firstsection ' style={{ backgroundColor: '#cccccc', paddingBottom: '2.5vmax',paddingRight:'2.5vmax',paddingLeft: '2.5vmax'}}>
            {/* <h1 style={{ padding: '2vmax' }}>Hello, Welcome to my simple portfolio.</h1> */}
            <Image src='./bwselfie22.png' className='img_first' />
            
            <b >
                <Typewriter
                    options={{
                        strings: ['Creative Game Developer', 'Unique Web Developer', 'Ain Shams Engineer', 'An Amazing Editor','A Jack of All trades'],
                        autoStart: true,
                        loop: true,
                        delay: 50
                    }}
                />
            </b>
            {/* <TypeAnimation omitDeletionAnimation={true} wrapper="div" cursor={false} sequence={['Game developer', 1000, '.Web developer', 1000, '.Engineer', 1000, '.Editor', 1000, '.Gamer', 1000, '.What you are looking for', 1000]} /></b> */}

            <p style={{paddingRight:'5vmax',paddingLeft:'5vmax'}}>
                <br />
                My name is <b style={{ fontSize: '2vmax' }}>Omar Yousef</b>, I am third-year Computer Engineering Student at Ain shams University.
                <br />
                From an early age, I fell in love with computer systems and I started learning programming, editing,3D modeling and pixel art year by year I started to accumulate more knowledge in different areas of the world of computers🖥️ and hope someday I join a formidable team and apply all that I learned throughout the years.
                <br />
                
                I strongly believe in free education for all and I hope someday that my Youtube channel that i am building will be the reason for someone else success hopefully.<br/>
                

                
                {/* <b className='quote' >
                    `` A jack of all trades is a master of none, but oftentimes better than a master of one. ``
                </b> */}
            </p>

        </div>
    )
}

export default FirstSection