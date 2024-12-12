import React, { useRef } from "react";

const EjemploUseRef = () => {
  const inputRef = useRef(null); // Crear una referencia

  const enfocarInput = () => {
    inputRef.current.focus(); // Enfocar el input usando la referencia
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Ejemplo de useRef</h2>
      <input
        ref={inputRef} // Asociar el input con la referencia
        type="text"
        placeholder="Escribe algo..."
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ddd",
          marginBottom: "10px",
        }}
      />
      <br />
      <button
        onClick={enfocarInput}
        style={{
          padding: "10px 15px",
          border: "none",
          backgroundColor: "#007bff",
          color: "#fff",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Enfocar Input
      </button>
    </div>
  );
};

export default EjemploUseRef;
