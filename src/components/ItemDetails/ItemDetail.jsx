import React from 'react'

function ItemDetail({productos}) {
  return (
    <>
    <div>{productos.name}</div>
    <div>{productos.categoria}</div>
    </>
    )
}

export default ItemDetail