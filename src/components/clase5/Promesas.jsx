// import { useState } from "react"
// import issue from "./assets/issue.jpg"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

import { useEffect,useState } from "react";
import { getFetch } from "./getFetch";
import './promesas.css'






function Promesas() {
    
      
    const [productos,setProductos] = useState([]) 
   useEffect(()=>{
    setTimeout(()=>{    
    getFetch
    .then(respuesta =>{ setProductos(respuesta)
        
       
    } 
        
    
    )
    .catch(err => console.log(err))
   
    .finally(()=> console.log('siempre al ultimo'))


},3000);

}, [])
    
  console.log(productos)
 
    return (
    <div className="container d-flex width:20px cardone ">
        {productos.map((iteracion)=> <Card key={iteracion.id} className="container m-3 lola border border-info ">
  <Card.Img variant="top" src={iteracion.img}  className="imagenes"/>
  <Card.Body className=" cardBody shadow-lg p-3 mb-5 bg-body rounded">
    <Card.Title className="title">{iteracion.name}</Card.Title>
    <Card.Text>
      Esto es un texto de prueba
    </Card.Text>
    <Button className="btn btn-warning">Comprar</Button>
  </Card.Body>
</Card>
        
        
        
        
        
        
        )}
      
    </div>
  )
}

export default Promesas