import { Button, Card, Container, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'


function FirstSection() {

    return (
        <div className='firstsection'>
            <h1 style={{padding:'2vmax'}}>Hello, Adventurer welcome to my profile.</h1>

            <p>
                My name is <b style={{fontSize:'1.3vmax'}}>Omar Yousef</b> a third-year Computer Engineering Student at Ain shams University computer graphics major.
                <br />
                    From an early age, I fell in love with video games and SFX effects in animations and movies.
                <br/>
                    So I decided to embark on my odyssey and started learning whatever I can put my hands on hoping that it will help
                    me to achieve my dream one day which is creating my own game on the same level as the<br/> <b>" The Legend Of Zelda "</b><br/> series.
                <br />
                    as for my favorite quote :
                <br />
                <b className='quote' >
                    `` A jack of all trades is a master of none, but oftentimes better than a master of one. ``
                </b>
            </p>
            <Image src='./bwselfie2.png' className='img_first' />
        </div>
    )
}

export default FirstSection