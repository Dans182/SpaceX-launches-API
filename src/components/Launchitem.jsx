import { Box, Flex, Text, Spacer, Tag, Button, Icon } from "@chakra-ui/react";
import { HiCalendar } from "react-icons/hi";
import format from "date-fns/format";
import { parseISO } from "date-fns";

export const Launchitem = (launch) => {
  return (
    <Box bg="gray.100" padding={4} margin={4} borderRadius="lg">
      <Flex>
        <Text fontSize="2x1">
          Mission:{" "}
          <strong>
            {launch.name} ({format(parseISO(launch.date_local), "yyyy")})
          </strong>
        </Text>
        <Spacer />
        <Tag padding={2} colorScheme={launch.success ? "green" : "red"}>
          {launch.success ? "Success" : "Failure"}
        </Tag>
      </Flex>
      <Flex align="center">
        <Icon as={HiCalendar} color={"gray.500"} />
        <Text fontSize="sm" ml={1} color={"gray.500"}>
          {format(parseISO(launch.date_local), "d MMMM, yyyy")}
        </Text>
      </Flex>
      <Button mt={2} colorScheme="purple">More details</Button>
    </Box>
  );
};
