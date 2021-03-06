import  Container from "react-bootstrap/Container"
import  Navbar from "react-bootstrap/Navbar"
import  Nav from "react-bootstrap/Nav"
import  NavDropdown from "react-bootstrap/NavDropdown"
import logoPerfu from "./assets/img/logoPerfu.jpg"

function CartWidget()
                        {
  
  
  
  
                          return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                  <img src="{logoPerfu}" />
                <Navbar.Brand href="#home">Mi Bebe Perfu</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                   {/*  <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                    <NavDropdown title="Opciones" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Productos</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Articulos de temporada</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Promos</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Intagram</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">Carrito</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                   
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
                </Container>
                
  </Navbar>
  
  )
}

export default 
