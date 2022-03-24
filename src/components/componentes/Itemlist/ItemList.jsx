
import Item from "../Item"
 

function ItemList({productos}) {
 
    
    return (
        
    <>
     {productos.map((iteracion)=> <Item  key={iteracion.id}  producto={iteracion}/>
        
        
        
        
        
        
        )}
    
    
    </>
  )
}

export default ItemList