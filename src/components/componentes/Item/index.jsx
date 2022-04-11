import Card from "react-bootstrap/Card" 
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"
import "./item.css"

function Item({producto}) {
  
  
  
  return (
    <>
                                  <Card  className="container m-3 lola shadow-lg border col-md-4 ">
                                        <Card.Img variant="top" src={producto.img} className="imagenes"/>
                                        <Card.Body className=" cardBody shadow-lg p-3 mb-5 bg-body rounded">
                                            <Card.Title className="title">{producto.name}</Card.Title>
                                            <Card.Text>
                                            Esto es un texto de prueba
                                            </Card.Text>
                                            <Link to={`/detalle/${producto.id}`}>
                                            <Button className="btn btn-warning">Detalle</Button>
                                            
                                            </Link>
                                            
                                        </Card.Body>
                                 </Card>
    </>
  )
}

export default Item