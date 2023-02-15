
import { Button } from "bootstrap"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { SidebarMenuNav } from "react-bootstrap-sidebar-menu"

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
                site is still in development<br />🚧👷🚧<br />
                  
                not all information are included in the site like certificates  <br />all can be found on my other platforms.
                
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