import { Fragment } from "react";
import { useParams } from "react-router-dom";

export const LaunchDetails = (props) => {
  //   const params = useParams();
  //   Si no uso el useParams, no me funcionan los props. Es necesario el uso de este hook
  const { launchId } = useParams();

  return <Fragment>"Hola {launchId}"</Fragment>;
};
