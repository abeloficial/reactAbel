
import Item from "../Item"
 

function ItemList({productos}) {
 
    
    return (
        
    <>
     {productos.map((iteracion)=> <Item  key={iteracion.id}  iteracion={iteracion}/>
       
        )}
     </>
   )
}

export default ItemList