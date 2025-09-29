import React from "react";
import { VStack, Heading, Text, Image, HStack, Box } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack bg="white" borderRadius="md" overflow="hidden" align="start" _hover={{ transform: "scale(1.05)", transition: "0.3s" }}>
      <Image src={imageSrc} alt={title} w="100%" h={200} objectFit="cover" />
      <VStack p={4} spacing={2} align="start">
        <Heading size="md">{title}</Heading>
        <Text>{description}</Text>
        <HStack color="teal.500">
          <Text>View More</Text>
          <Box as={FaArrowRight} />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
