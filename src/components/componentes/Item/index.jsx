import Card from "react-bootstrap/Card" 
import Button from "react-bootstrap/Button"

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
                                            <Button className="btn btn-warning">Comprar</Button>
                                        </Card.Body>
                                 </Card>
    </>
  )
}

export default Item