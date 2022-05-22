import React from 'react'
import { useParams } from 'react-router-dom'
import shoes from "../shoes.json"

function Product() {
  const { id } = useParams()
  const shoe = shoes[id]

  if (!shoe) {
    return <h1>Sorry! The shoe you are looking for is not valid.</h1>
  }

  const { name, img } = shoe
  return (
    <div className='shoe-item'>
      <h2>{name}</h2>
      <img src={img} alt={name} />
    </div>
  )
}

export default Product