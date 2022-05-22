import React from 'react'
import { Link } from 'react-router-dom'
import shoes from "../shoes.json"

function Products() {
  return (
    <>
      <h1>Products</h1>
      <div className='products-container'>
        <ul>
          {Object.entries(shoes).map(([shoeId, { name, img }]) => (
            <li key={shoeId}>
              <Link to={`/products/${shoeId}`}>
                <h3>{name}</h3>
                <img src={img} alt={name} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Products