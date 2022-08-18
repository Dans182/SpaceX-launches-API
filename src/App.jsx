import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { Image } from "@chakra-ui/react";
import logo from "./assets/logo-spacex.png";
import { LaunchesList } from "./components/LaunchesList";
import { LaunchDetails } from "./components/LaunchDetails";

export function App() {
  return (
    <Fragment>
      <Image src={logo} width={300} margin={4}></Image>
      <Routes>
        <Route path="/" element={<LaunchesList />} />
        <Route path="launch/:launchId" element={<LaunchDetails />} />
      </Routes>
    </Fragment>
  );
}

/* 
export function App() {
  return <div>Hola Mundo</div>;
} 

export const App = () => <div>Hola Mundo</div>;

*/

/*
Sintaxis 1, para creación de componenetes en React: 

function App() {
  return <div>Hola Mundo</div>;
}
export default App; 
*/

/*
Sintaxis 2, 
export function App() {
  return <div>Hola Mundo</div>;
}
*/

/*
Sintaxis 3, 
export const App = () => {
  return <div>Hola Mundo</div>;
}
*/

/*Si usas sintaxis 1, cuando importes este componente en otra vista,
puedes llamar al componente con el nombre que te de la gana, y especificando la ruta. 
El tema es que la idea es que llames a los componentes por su nombre.
Ejemplo:
import logo from "../component/img/traveland.png" 
En cambio, usando sintaxis 2 o 3, la importación debe ser por su nombre, de la siguiente manera:
import { Trip } from "./pages/trip.jsx";
*/
