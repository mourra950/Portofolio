
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { Layout } from "antd";
import uisound from '/game.mp3'
import { useSound } from 'use-sound';
function SiderLay({ animate }) {
    const [play] = useSound(uisound);
    return (

        < Layout.Sider
            width={200}
            breakpoint="md"
            collapsedWidth="0"
            theme='light'
            style={{ backgroundColor: "white" }
            }
        >
            <motion.div
                initial={animate ? { opacity: 0 } : { opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={animate ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <p className='t'>Omar Yousef</p>
                <p className='s'>showcase 2023</p>
                <div className='side-nav'>
                    <Link to='/' className='Sect' animate={true} onClick={play}>Home</Link>
                    <Link to='/about' className='Sect' animate={false} onClick={play} >About</Link>
                    <Link to='/experience' className='Sect' animate={false} onClick={play} >Experience</Link>
                    <Link to='/project' className='Sect' animate={false} onClick={play} >Project</Link>
                </div>
                <div>
                    <div className="social">
                        <a style={{ fontSize: '28px' }} className="Github " href="https://github.com/mourra950">
                            <BsGithub className="icon " />
                        </a>
                        <a style={{ fontSize: '28px' }} className="Youtube icon" href="https://www.youtube.com/@mourra9598/videos">
                            <BsYoutube className="icon " />
                        </a>
                        <a style={{ fontSize: '28px' }} className="Insta icon" href="https://www.instagram.com/mourra_odyssy/">
                            <BsInstagram className="icon " />
                        </a>
                        <a style={{ fontSize: '28px' }} className="Linkdin icon" href="https://www.linkedin.com/in/mourra950/">
                            <BsLinkedin className="icon " />
                        </a>
                    </div>
                </div>
            </motion.div>
        </Layout.Sider >
    )
}
export { SiderLay }