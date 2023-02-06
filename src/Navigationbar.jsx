
import { Button } from "bootstrap"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { SidebarMenuNav } from "react-bootstrap-sidebar-menu"

import { BsGithub, BsYoutube, BsInstagram } from 'react-icons/bs'


function Navigationbar() {

  return (
    <>

      <Navbar bg="light" expand="true"  >
        <Container>
        <Navbar.Brand href="#home">
            <img
              
              src="./mourrasign.png"
              className="brandy"
              
            />{' '}

          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Item >
                {/* <Nav.Link href="/home">About</Nav.Link> */}
                Hello adventurer welcome to my profile for now the site is under construction until then you can check my other profiles on other platforms
              </Nav.Item>
              {/* <Nav.Item>
                <Nav.Link eventKey="link-1">Projects</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">Contact</Nav.Link>
              </Nav.Item> */}
              <Nav.Item>
                <div eventKey="link-2" className="icons">
                  <a href="https://github.com/mourra950">
                    <BsGithub className="icon Github" />
                  </a>
                  <a href="https://www.youtube.com/@mourra9598/videos">
                    <BsYoutube className="icon Youtube" />
                  </a>
                  <a href="https://www.instagram.com/mourra_odyssy/">
                    <BsInstagram className="icon Insta" />
                  </a>
                </div>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  )
}

export default Navigationbar