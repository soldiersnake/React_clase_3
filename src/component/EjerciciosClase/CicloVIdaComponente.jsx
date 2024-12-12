import { useEffect, useState } from "react";

const CicloVIdaComponente = () => {
    const [contador, setContador] = useState(0);
  
    useEffect(() => {
      console.log("Montaje: Componente montado.");
  
      return () => {
        console.log("Desmontaje: Componente desmontado.");
      };
    }, []);
  
    useEffect(() => {
      console.log(`Actualización: Contador actualizado a ${contador}`);
    }, [contador]);
  
    return (
      <div>
        <p>Contador: {contador}</p>
        <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      </div>
    );
  };
  
  export default CicloVIdaComponente;
  