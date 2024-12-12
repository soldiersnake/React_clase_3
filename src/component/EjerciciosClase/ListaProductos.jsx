const productos = [
    { id: 1, nombre: "Producto 1", precio: 100 },
    { id: 2, nombre: "Producto 2", precio: 200 },
    { id: 3, nombre: "Producto 3", precio: 300 },
    { id: 4, nombre: "Producto 4", precio: 400 },
  ];
  
  const ListaProductos = () => {

    const productosFiltrados = productos.filter( producto => producto.precio > 200);
    const productoEncontrado = productos.find( p => p.id === 3);
    const precioTotal = productos.reduce((acumulador, producto) => acumulador + producto.precio, 0);

    return (
      <>
      <h2>Ejemplo Map</h2>
        <ul>
          {productos.map((producto) => (
            <li key={producto.id}>
              {producto.nombre} - ${producto.precio}
            </li>
          ))}
        </ul>

        <h3 style={{color:'red', backgroundColor: 'yellow'}}>Ejemplo Concatenacion filter en JSX</h3>
        {
          productos
            .filter(p => p.precio >= 400)
            .map(p => (
              <li key={p.id}>
                {p.nombre} - ${p.precio}
              </li>
            ))
        }

        <h2>Ejemplo Filtrado con precio mayor a 200</h2>
        {productosFiltrados.map(producto => (
          <li key={producto.id}>
            {producto.nombre}
          </li>
        ))}

        <h2>Ejemplo de Find - {productoEncontrado.nombre}</h2>
        <p>El producto encontrado se llama {productoEncontrado.nombre}, su valor es ${productoEncontrado.precio}</p>

        <h3 style={{color:'red', backgroundColor: 'yellow'}}>Ejemplo Find en JSX</h3>
        <p>
          {productos.find((p) => p.id === 3)?.nombre
            ? `${productos.find((p) => p.id === 3).nombre} - $${productos.find((p) => p.id === 3).precio}`
            : "No se encontró el producto"}
        </p>

        <h2>Ejemplo de Reduce</h2>
        <p>El Suma total de todos los productos es: ${precioTotal}</p>

        <h3 style={{color:'red', backgroundColor: 'yellow'}}>Ejemplo Reduce en JSX</h3>
          <p>
            ${productos.reduce((acum, p) => acum + p.precio, 0)}
          </p>
      </>
    );
  };
  
  export default ListaProductos;
  