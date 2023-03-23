import Image from 'react-bootstrap/Image'
import Typewriter from 'typewriter-effect';
function FirstSection() {

    return (
        <div className='firstsection ' style={{ backgroundColor: '#cccccc', paddingBottom: '2.5vmax', paddingRight: '2.5vmax', paddingLeft: '2.5vmax' }}>
            {/* <h1 style={{ padding: '2vmax' }}>Hello, Welcome to my simple portfolio.</h1> */}
            <Image src='./bwselfie22.png' className='img_first' />

            <b >
                <Typewriter
                    options={{
                        strings: ['Creative Game Developer', 'Unique Web Developer', 'Ain Shams Engineer', 'An Amazing Editor', 'A Jack of All trades'],
                        autoStart: true,
                        loop: true,
                        delay: 50
                    }}
                />
            </b>
            {/* <TypeAnimation omitDeletionAnimation={true} wrapper="div" cursor={false} sequence={['Game developer', 1000, '.Web developer', 1000, '.Engineer', 1000, '.Editor', 1000, '.Gamer', 1000, '.What you are looking for', 1000]} /></b> */}

            <p style={{ paddingRight: '5vmax', paddingLeft: '5vmax' }}>
                <br />
                I'm <b style={{ fontSize: '2vmax' }}>Omar Yousef
                </b>, I am third-year Computer Engineering Student at Ain shams University.
                <br />
                Since a young age, I've been passionate about computer systems and have been continuously expanding my knowledge by learning programming, editing, 3D modeling, and pixel art. Over the years, I have accumulated a diverse set of skills and expertise in various areas of the computer world 🖥️.
                My goal is to one day join a dynamic team where I can apply all the knowledge and experience I've gained throughout my journey.
                <br />

            </p>

        </div>
    )
}

export default FirstSection