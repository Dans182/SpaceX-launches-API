import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import * as API from "../services/launches";
import { Box, Flex, Text, Spacer, Tag } from "@chakra-ui/react";
import format from "date-fns/format";
import { parseISO } from "date-fns";

export const LaunchDetails = () => {
  const [launch, setLaunch] = useState({});
  const { launchId } = useParams();
  //   const params = useParams();
  //   Si no uso el useParams, no me funcionan los props. Es necesario el uso de este hook. Es en resumen, un hook para
  //   pasar props, que se hace necesario cuando empiezas a usar React Router, ya que con esta librería no funcionan los props.

  useEffect(() => {
    API.getLaunchById(launchId).then(setLaunch).catch(console.log);
  }, [launchId]);
  return (
    <Fragment>
      <Box bg="gray.100" padding={4} margin={4} borderRadius="lg">
        {!launch ? (
          <div>Loading...</div>
        ) : (
          <Box bg="gray.100" padding={4} margin={4} borderRadius="lg">
            <Flex>
              <Text fontSize="2x1">
                Mission:{" "}
                <strong>
                  {launch.name} 
                  {/* ({format(parseISO(launch.date_utc), "yyyy")}) */}
                </strong>
              </Text>
              <Spacer />
              <Tag padding={2} colorScheme={launch.success ? "green" : "red"}>
                {launch.success ? "Success" : "Failure"}
              </Tag>
            </Flex>
            <Box></Box>
          </Box>
        )}
      </Box>
    </Fragment>
  );
};
