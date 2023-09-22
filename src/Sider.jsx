
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { Link } from "react-router-dom";
import { Layout } from "antd";
function SiderLay() {
    return (
        < Layout.Sider
            width={200}
            breakpoint="md"
            collapsedWidth="0"
            theme='light'
            style={{ backgroundColor: "white" }
            }
        >
            <p className='t'>Omar Yousef</p>
            <p className='s'>showcase 2023</p>
            <div className='side-nav'>
                <Link to='/' className='Sect' >Home</Link>
                <Link to='/about' className='Sect' >About</Link>
                <Link to='/experience' className='Sect' >Experience</Link>
                <Link to='/project' className='Sect' >Project</Link>
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
        </Layout.Sider >)
}
export { SiderLay }