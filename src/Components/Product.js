import React from 'react'
import { Link } from 'react-router-dom';
import Shoes from "../shoes.json";

const Product = () => {
  console.table(Shoes)
  return (
    <div>
      <h1>Product</h1>
      <div className='product-container'>
        {Object.keys(Shoes).map((keyName, ind) => {
          const shoe = Shoes[keyName]

          return (
            <Link key={ind} className="link" to={`/product/${keyName}`}>
              <h4>{shoe.name}</h4>
              <img src={shoe.img} height={150} alt={shoe.name} />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Product