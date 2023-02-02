import { Nav, Navbar } from "react-bootstrap"

function Navigationbar() {

  return (
    <>
    
      <Nav fill={true} className="justify-content-center" activeKey="/home">
        <Nav.Item >
          <Nav.Link  href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Projects</Nav.Link>
        </Nav.Item>

      </Nav>
    </>
  )
}

export default Navigationbar