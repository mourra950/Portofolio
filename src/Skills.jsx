import { Figure } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Skills() {
    return (
        <div className=' Sections' style={{ backgroundColor: '#eeeeee' }}>
            <h1> Skills</h1>
            <p style={{ paddingRight: '10vmax', paddingLeft: '10vmax' }}>
                I believe in a continuous learning process, which is why I'm always exploring and experimenting with different areas in both computer science and arts. Currently, the technologies I'm most familiar with are the ones I've mentioned, but I'm always eager to expand my horizons and learn more.
            </p>

            <div style={{ paddingRight: '4vmax', paddingLeft: '4vmax' }}>

                <Figure>
                    <Figure.Image className='skills' src='./icons/letter-c.png' />
                    <Figure.Caption>
                        C/C embedded
                    </Figure.Caption>
                </Figure>
                <Figure>
                    <Figure.Image className='skills' src='./icons/c-.png' />
                    <Figure.Caption>
                        C++
                    </Figure.Caption>
                </Figure>
                <Figure>
                    <Figure.Image className='skills' src='./icons/c-sharp.png' />
                    <Figure.Caption>
                        C Sharp
                    </Figure.Caption>
                </Figure>
                <Figure>
                    <Figure.Image className='skills' src='./icons/happy.png' />
                    <Figure.Caption>
                        Pixel Art
                    </Figure.Caption>
                </Figure>
                <Figure>
                    <Figure.Image className='skills' src='./icons/atom.png' />
                    <Figure.Caption>
                        Reactjs
                    </Figure.Caption>
                </Figure>
                <Figure>
                    <Figure.Image className='skills' src='./icons/html-5.png' />
                    <Figure.Caption>
                        HTML5
                    </Figure.Caption>
                </Figure>
                <Figure>
                    <Figure.Image className='skills' src='./icons/css-3.png' />
                    <Figure.Caption>
                        CSS3
                    </Figure.Caption>
                </Figure>
                <Figure>
                    <Figure.Image className='skills' src='./icons/js.png' />
                    <Figure.Caption>
                        Javascript
                    </Figure.Caption>
                </Figure>
                <Figure>
                    <Figure.Image className='skills' src='./icons/python.png' />
                    <Figure.Caption>
                        Python
                    </Figure.Caption>
                </Figure>
                <Figure>
                    <Figure.Image className='skills' src='./icons/unity.png' />
                    <Figure.Caption>
                        Unity
                    </Figure.Caption>
                </Figure>
                <Figure>
                    <Figure.Image className='skills' src='./icons/photoshop.png' />
                    <Figure.Caption>
                        Photoshop
                    </Figure.Caption>
                </Figure>
                <Figure>
                    <Figure.Image className='skills' src='./icons/premiere-pro.png' />
                    <Figure.Caption>
                        Premiere Pro
                    </Figure.Caption>
                </Figure>

                <Figure>
                    <Figure.Image className='skills' src='./icons/illustrator.png' />
                    <Figure.Caption>
                        Illustrator
                    </Figure.Caption>
                </Figure>
                <Figure>
                    <Figure.Image className='skills' src='./icons/database.png' />
                    <Figure.Caption>
                        SQL
                    </Figure.Caption>
                </Figure>
                <Figure>
                    <Figure.Image className='skills' src='./icons/blender_community_badge_white.png' />
                    <Figure.Caption>
                        Blender
                    </Figure.Caption>
                </Figure>

                {/* 
                <Image className='skills' src='./icons/c-.png' />
                <Image className='skills' src='./icons/c-sharp.png' />
                <Image className='skills' src='./icons/happy.png' />
                <Image className='skills' src='./icons/atom.png' />
                <Image className='skills' src='./icons/html-5.png' />
                <Image className='skills' src='./icons/css-3.png' />
                <Image className='skills' src='./icons/js.png' />
                <Image className='skills' src='./icons/python.png' />
                <Image className='skills' src='./icons/unity.png' />
                <Image className='skills' src='./icons/java.png' />
                <Image className='skills' src='./icons/photoshop.png' />
                <Image className='skills' src='./icons/premiere-pro.png' />
                <Image className='skills' src='./icons/illustrator.png' />
                <Image className='skills' src='./icons/database.png' />
                <Image className='skills' src='./icons/blender_community_badge_white.png' /> */}
            </div>
            for more info you can check my <a className=" Linkdin1" href="https://www.linkedin.com/in/mourra950/">Linkdin</a> profile
        </div>
    )
}

export default Skills