import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import * as API from "../services/launches";
import {
  Box,
  Flex,
  Text,
  Spacer,
  Tag,
  Image,
  AspectRatio,
} from "@chakra-ui/react";
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
        {launch && launch.links && launch.links.patch.small ? (
          <Box
            bg="gray.100"
            minW="540px"
            padding={4}
            margin={4}
            borderRadius="lg"
          >
            <Flex>
              <Image
                src={launch.links.patch.small}
                width={150}
                margin={4}
              ></Image>

              <Text fontSize="2x1">
                Mission:{" "}
                <strong>
                  {launch.name} ({format(parseISO(launch.date_utc), "yyyy")})
                </strong>
                <Spacer />
                Flight number: <strong>{launch.flight_number}</strong>
                <Spacer />
                Flight date:{" "}
                <strong>
                  {format(parseISO(launch.date_utc), "dd/MM/yyyy")}
                </strong>
              </Text>
              <Spacer />
              <Tag
                height={50}
                padding={2}
                colorScheme={launch.success ? "green" : "red"}
              >
                {launch.success ? "Success" : "Failure"}
              </Tag>
            </Flex>
            <br />
            <Text fontSize="2x1">{launch.details}</Text>
            <br />
            <Box>
              <AspectRatio maxW="560px" mx="auto" ratio={1}>
                <iframe
                  title={launch.name}
                  src={
                    "https://www.youtube.com/embed/" + launch.links.youtube_id
                  }
                  allowFullScreen
                />
              </AspectRatio>
            </Box>
          </Box>
        ) : (
          <div>Loading...</div>
        )}
      </Box>
    </Fragment>
  );
};
