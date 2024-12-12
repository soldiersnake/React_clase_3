import Categorias from "./component/Categorias";
import CicloVIdaComponente from "./component/EjerciciosClase/CicloVIdaComponente";
import EjemploUseRef from "./component/EjerciciosClase/EjemploUseref";
import ItemListContainer from "./component/EjerciciosClase/ItemList/ItemListContainer";
import ItemListContainerPokemon from "./component/EjerciciosClase/ItemListPokemon/ItemListContainerPokemon";
import ListaProductos from "./component/EjerciciosClase/ListaProductos";
import PromesaEjemplo from "./component/EjerciciosClase/PromesaEjemplo";
import Footer from "./component/Footer";
import { Header } from "./component/Header";
import MainPage from "./component/MainPage";
import { Navegacion } from "./component/Navegacion";
import SobreNosotros from "./component/SobreNosotros";

const Tarjeta = ({ titulo, children }) => {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <h2>{titulo}</h2>
      <div>{children}</div>  {/* el Children Permite insertar contenido dinamico */}
      <EjemploUseRef/>
      <CicloVIdaComponente/>
      <PromesaEjemplo/>
      <ListaProductos/>
      <ItemListContainer/>
      <ItemListContainerPokemon/>
    </div>
  );
};

function App() {
  return (
    <>
      {/* EJEMPLO DE CHILDREN */}
      <Tarjeta titulo="Título de la tarjeta">
        <p>Este es el contenido dentro de la tarjeta.</p>
      </Tarjeta>

      <Header />
      {/* WEB PASADA A REACT */}
      <Navegacion />
      <Categorias />
      <SobreNosotros />
      <MainPage />
      <Footer />
    </>
  );
}

export default App;
