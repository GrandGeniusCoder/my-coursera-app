import React from "react";
import { VStack } from "@chakra-ui/react";

const FullScreenSection = ({ children, isDarkBackground, backgroundColor }) => {
  return (
    <VStack minH="100vh" w="100%" bg={backgroundColor} color={isDarkBackground ? "white" : "black"} align="center" justify="center">
      {children}
    </VStack>
  );
};

export default FullScreenSection;
