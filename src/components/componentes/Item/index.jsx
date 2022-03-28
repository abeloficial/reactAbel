import Card from "react-bootstrap/Card" 
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"

function Item({iteracion}) {
  
  
  
  return (
    <>
      <Card  className="container m-3 lola border border-info ">
                                        <Card.Img variant="top" src={iteracion.img} className="imagenes"/>
                                        <Card.Body className=" cardBody shadow-lg p-3 mb-5 bg-body rounded">
                                            <Card.Title className="title">{iteracion.name}</Card.Title>
                                            <Card.Text>
                                            Esto es un texto de prueba
                                            </Card.Text>
                                            <Link to={`/detalle/${iteracion.id}`}>
                                            <Button className="btn btn-warning">Agregar</Button>
                                            
                                            </Link>
                                            
                                        </Card.Body>
                                 </Card>
    </>
  )
}

export default Item