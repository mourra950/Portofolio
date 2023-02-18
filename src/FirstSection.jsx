import { Button, Card, Container, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import { TypeAnimation } from 'react-type-animation'

import Typewriter from 'typewriter-effect';
function FirstSection() {

    return (
        <div className='firstsection ' style={{ backgroundColor: '#cccccc', paddingBottom: '2.5vmax',paddingRight:'2.5vmax',paddingLeft: '2.5vmax'}}>
            <h1 style={{ padding: '2vmax' }}>Hello, Adventurer welcome to my profile.</h1>
            <Image src='./bwselfie22.png' className='img_first' />
            <p>
               

            </p>
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
                My name is <b style={{ fontSize: '1.4vmax' }}>Omar Yousef</b> ,I am third-year Computer Engineering Student at Ain shams University computer graphics major.
                <br />
                From an early age, I fell in love with video games and SFX effects in animations and movies.
                <br />
                So I decided to embark on my odyssey and started learning everything hoping that it will help
                me to achieve my dream one day which is creating my own game on the same level as the<br />
                <b>
                    <Typewriter
                        options={{
                            strings: ["Legend of Zelda", "Celeste", "Sonic", "Undertale", "Pokemon", "FarCry3"],
                            autoStart: true,
                            loop: true,
                            delay: 50
                        }}
                    />
                </b>

                
                {/* <b className='quote' >
                    `` A jack of all trades is a master of none, but oftentimes better than a master of one. ``
                </b> */}
            </p>

        </div>
    )
}

export default FirstSection