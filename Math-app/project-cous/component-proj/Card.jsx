import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      align="start"
      backgroundColor="white"
      borderRadius="md"
      overflow="hidden"
      boxShadow="md"
      _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
    >
      <Image src={imageSrc} alt={title} width="100%" height="200px" objectFit="cover" />
      <VStack align="start" p={4} spacing={2}>
        <Heading as="h3" size="md">{title}</Heading>
        <Text>{description}</Text>
        <HStack spacing={1} color="teal.500">
          <Text>View More</Text>
          <FontAwesomeIcon icon={faArrowRight} />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
