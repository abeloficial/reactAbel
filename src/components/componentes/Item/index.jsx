import Card from "react-bootstrap/Card" 
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"
import "./item.css"

function Item({producto}) {
  
  
  
  return (
    <>





                                  <Card  className="container m-3 lola shadow-lg border col-md-2 " >
                                        <Card.Img variant="top" src={producto.img} className="imagenes" style={{width:"9rem", height:"9rem"}} />
                                        <Card.Body className=" cardBody shadow-lg p-3 mb-1 bg-body rounded">
                                            <Card.Title className="title">{producto.name}</Card.Title>
                                            <Card.Text>
                                            {producto.info}
                                            </Card.Text>
                                            <Link to={`/detalle/${producto.id}`}>
                                            <Button className="btn btn-warning">Ver Mas</Button>
                                            
                                            </Link>
                                            
                                        </Card.Body>
                                 </Card>
    </>
  )
}

export default Item