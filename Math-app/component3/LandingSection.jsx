import React from "react";
import { VStack, Image, Heading, Text, Box } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hi, I'm Anita!";
const bio1 = "A passionate front-end developer.";
const bio2 = "I create amazing web experiences with React.";

const LandingSection = () => {
  return (
    <FullScreenSection backgroundColor="#512DA8" isDarkBackground>
      <VStack spacing={6} align="center">
        <Image src="https://i.pravatar.cc/150?img=7" borderRadius="full" boxSize={150} />
        <Heading>{greeting}</Heading>
        <Text fontSize="lg">{bio1}</Text>
        <Text fontSize="md">{bio2}</Text>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
