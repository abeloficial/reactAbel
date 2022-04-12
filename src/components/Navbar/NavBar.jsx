import  Container from "react-bootstrap/Container"
import  Navbar from "react-bootstrap/Navbar"
import  Nav from "react-bootstrap/Nav"
import  NavDropdown from "react-bootstrap/NavDropdown"
import logo from "../assets/logo.png"
import carrito from "../assets/carrito.png"
import { Link, NavLink } from "react-router-dom"
import { useCartContex } from "../../context/cartContext"
// import Titulo from "../Titulo/Titulo"
// import { useCartContex } from '../../../context/cartContext'



function NavBar(crops) {
  const {cantidadTotalItem} = useCartContex()
  
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                  <img src={logo}width="70rem"    alt="imagenlogo"        />
                <NavLink to="/">Mi Bebe Perfu</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                   {/*  <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                    <NavDropdown title="Opciones" id="collasible-nav-dropdown">
                    <NavLink to="/categoria/liquidacion">liquidacion</NavLink>
                    {/* <NavLink to="/categoria/articulos">Articulos de temporada</NavLink> */}
                    <NavLink to="/categoria/promo">Promos</NavLink>
                    <NavDropdown.Divider />
                    {/* <NavDropdown.Item href="#action/3.4">Intagram</NavDropdown.Item> */}
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Link to='/cart'>
                      {/* Carrito */}
                      <button type="button" class="btn $indigo-200">
                            Carrito <span class="badge bg-secondary">{cantidadTotalItem()}</span>
                     </button>
                      {/* <img src={carrito} className="bg-danger" alt="logoCarrito"/> */}
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