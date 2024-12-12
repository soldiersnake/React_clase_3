import React from "react";
import "./item.css";

export const Item = ({ producto }) => {
  return (
    <div className="item-card">
      <h3>{producto.title}</h3>
      <p>Precio: ${producto.price}</p>
      <button className="item-button" onClick={() => console.log('Comprado')}>Agregar al carrito</button>
    </div>
  );
};
