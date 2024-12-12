import { useEffect, useState } from "react";

const fetchDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Datos obtenidos correctamente.");
    }, 2000);
  });
};

const fetchDatos2 = () => {
  return new Promise((resolve, reject) => {
    console.log("Procesando datos...");
    setTimeout(() => {
      const exito = true; // Cambia a false para simular un fallo
      if (exito) {
        resolve({ id: 1, nombre: "Juan", edad: 30 });
      } else {
        reject("Error al obtener los datos");
      }
    }, 2000); // Simula un retraso de 2 segundos
  });
};

fetchDatos2()
  .then((datos) => {
    console.log("Datos obtenidos:", datos);
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(() =>{
    console.log('Consulta Finalizada');
  });

const PromesaEjemplo = () => {
  const [mensaje, setMensaje] = useState("Cargando...");

  useEffect(() => {
    fetchDatos().then((respuesta) => setMensaje(respuesta));
  }, []);

  return <p>{mensaje}</p>;
};

export default PromesaEjemplo;
