import React, { useState, useEffect } from "react";
import { ItemList } from "./ItemList";

const mockProductos = [
  { id: 1, title: "Producto A", price: 100 },
  { id: 2, title: "Producto B", price: 200 },
  { id: 3, title: "Producto C", price: 300 },
];

const fetchProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProductos);
    }, 2000);
  });
};

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetchProductos().then((data) => setProductos(data));
  }, []);

  return <ItemList productos={productos}/>
};

export default ItemListContainer;
