import { useState, useEffect, Fragment } from "react";
import { Heading } from "@chakra-ui/react";
import { Launchitem } from "./Launchitem";
import * as API from "../services/launches"; //importo todos las rutas de API, como "API"

export function LaunchesList() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches).catch(console.log);
  }, []);

  //Lo mismo, escrito de otra manera
  // useEffect(() => {
  //   API.getAllLaunches().then(data => setLaunches(data));
  // },[])

  //Aca estamos usando un .then, como una manera de usar un async-await en el useEffect, asi esperar el resultado... Async Await no se podría usar en el useEffect
  //En resumen, se va a ejecutar la promesa, vamos a tener los datos y los pasamos al useState

  return (
    <Fragment>
      <Heading as="h1" size="lg" margin={4}>
        SpaceX Launches
      </Heading>
      {launches.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <section>
          {launches.map((launch) => (
            <Launchitem key={launch.id} {...launch} />
          ))}
        </section>
      )}
    </Fragment>
  );
}
