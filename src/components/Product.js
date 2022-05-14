import React from 'react'

const Product = ({product , onAdd}) => {
    console.log(product);
  return (
    <div>
        <img src={product.image} className='small' alt={product.name} />
        <div>
            <h3>{product.name}</h3>
            <div>${product.price}</div>
            <div>
                <button onClick={() => onAdd(product)}>Add to cart</button>
            </div>
        </div>
    </div>
  )
}

export default Product