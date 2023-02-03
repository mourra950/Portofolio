import { Nav, Navbar } from "react-bootstrap"

function Navigationbar() {

  return (
    <>
    
      <Nav fill={true} justify className="justify-content-center vertical-center" activeKey="/home">
        <Nav.Item >
          <Nav.Link  href="/home">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Contact</Nav.Link>
        </Nav.Item>

      </Nav>
    </>
  )
}

export default Navigationbar