import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import * as API from "../services/launches";

export const LaunchDetails = () => {
  const [launch, setLaunch] = useState({});
  const { launchId } = useParams();
  //   const params = useParams();
  //   Si no uso el useParams, no me funcionan los props. Es necesario el uso de este hook

  useEffect(() => {
    API.getLaunchById(launchId).then(setLaunch).catch(console.log);
  }, [launchId]);
  return <Fragment>{JSON.stringify(launch)}</Fragment>;
};
