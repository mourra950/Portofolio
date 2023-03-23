import { Container, Nav, Navbar} from "react-bootstrap"

import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from 'react-icons/bs'


function Navigationbar() {

  return (
    <div>

      <Navbar bg="light" expand="true"  >
        <Container>
          <Navbar.Brand href="#home">
           Omar Yousef

          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{ padding: '3vmax' }}>
              <Nav.Item >
                {/* <Nav.Link href="/home">About</Nav.Link> */}
                Please note that my website is still under development 🚧👷🚧 and not all information has been included yet, including my certificates. However, you can find this information and more on my other platforms. Thank you for your understanding and patience as I continue to work on improving my website.
                
              </Nav.Item>
              {/* <Nav.Item>
                <Nav.Link eventKey="link-1">Projects</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">Contact</Nav.Link>
              </Nav.Item> */}
              <Nav.Item>
                <div className="icons">
                  <a className=" Github" href="https://github.com/mourra950">
                    <BsGithub className="icon " />
                  </a>
                  <a className=" Youtube" href="https://www.youtube.com/@mourra9598/videos">
                    <BsYoutube className="icon " />
                  </a>
                  <a className=" Insta" href="https://www.instagram.com/mourra_odyssy/">
                    <BsInstagram className="icon " />
                  </a>
                  <a className=" Linkdin" href="https://www.linkedin.com/in/mourra950/">
                    <BsLinkedin className="icon " />
                  </a>
                </div>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  )
}

export default Navigationbar