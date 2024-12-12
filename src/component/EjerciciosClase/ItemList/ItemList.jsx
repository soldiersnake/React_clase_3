import React from 'react'
import { Item } from './Item'
import './item.css';

export const ItemList = ({productos}) => {
  return (
    <div className='item-list'>
      {productos.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  )
}
