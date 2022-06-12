import React from 'react'

const ListOfItems = (props) => {
    const listproducts = [
        'Convenience Products',
        'Shopping Products',
        'Specialty Products',
        'Unsought Products',
        'Raw Materials',
        'Component Parts',
        'Capital Goods',
        'Major Equipments'
    ]
  return (
    <div>
        <div listproducts = {listproducts}>{listproducts}</div>  
    </div>
  )
}
export default ListOfItems
