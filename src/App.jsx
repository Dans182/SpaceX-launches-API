import { useState, useEffect, Fragment } from "react";
import { Heading, Box, Image, Flex, Text, Spacer, Tag } from "@chakra-ui/react";
Fimport * as API from "./services/launches"; //importo todos las rutas de API, como "API"
import logo from "./assets/logo-spacex.png";
import { Launchitem } from "./components/Launchitem";

export function App() {
  const [lauches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

  //Lo mismo, escrito de otra manera
  // useEffect(() => {
  //   API.getAllLaunches().then(data => setLaunches(data));
  // },[])

  //Aca estamos usando un .then, como una manera de usar un async-await en el useEffect, asi esperar el resultado... Async Await no se podría usar en el useEffect
  //En resumen, se va a ejecutar la promesa, vamos a tener los datos y los pasamos al useState
  return (
    <Fragment>
      <Image src={logo} width={300} margin={4}></Image>
      <Heading as="h1" size="lg" margin={4}>
        SpaceX Launches
      </Heading>
      <section>
        {lauches.map((launch) => (
          <Launchitem key={launch.flight_number}{...launch} />
        ))}
      </section>
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
