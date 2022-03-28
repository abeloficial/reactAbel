import  Container from "react-bootstrap/Container"
import  Navbar from "react-bootstrap/Navbar"
import  Nav from "react-bootstrap/Nav"
import  NavDropdown from "react-bootstrap/NavDropdown"
import logo from "../assets/logo.png"
import carrito from "../assets/carrito.png"
import { Link, NavLink } from "react-router-dom"
import Titulo from "../Titulo/Titulo"




function NavBar(crops) {
  
 
  return (
    <Navbar collapseOnSelect expand="lg" bg="info" variant="danger">
                <Container>
                  <img src={logo}width="70rem"    alt="imagenlogo"        />
                <NavLink to="/">Mi Bebe Perfu</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                   {/*  <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                    <NavDropdown title="Opciones" id="collasible-nav-dropdown">
                    <NavLink to="/categoria/productos">Productos</NavLink>
                    <NavLink to="/categoria/articulos">Articulos de temporada</NavLink>
                    <NavLink to="/categoria/promos">Promos</NavLink>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Intagram</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Link to='/cart'>
                      {/* Carrito */}
                      <img src={carrito} className="bg-danger" alt="logoCarrito"/>
                    </Link>
                   
                     
                    <Nav.Link eventKey={2} href="#memes">
                   
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
                </Container>
                
  </Navbar>
  )
}

export default NavBar