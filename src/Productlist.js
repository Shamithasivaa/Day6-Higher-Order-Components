import React from 'react'

function Productlist(props) {
    const {products} = props;
  return (
    <div>
        {products.map((product)=>(
            <div>
               <li> {product.no}.
                Name : {product.name}<br></br>
                Price : {product.price}</li>
                <img src={product.imageUrl} style={{height:"75px",weight:"50px"}}/>
            </div>
        ))}
    </div>
  )
}

export default Productlist;