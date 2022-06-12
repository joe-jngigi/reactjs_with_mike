import React from 'react'

function AboutProduct({description, price}) {
  return (
    <div>
        <p>{description}</p>
        <p><big>${price}</big></p>
      
    </div>
  )
}

export default AboutProduct
