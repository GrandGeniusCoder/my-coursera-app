import React from "react";
import { VStack, Heading, Box } from "@chakra-ui/react";
import FullScreenSection from "./component3/FullScreenSection";
import Card from "./Card";

const projects = [
  { title: "React Space", description: "AR components with Redux", imageSrc: "https://i.pravatar.cc/300?img=1" },
  { title: "Infinite Scroll", description: "Virtualised list at 60FPS", imageSrc: "https://i.pravatar.cc/300?img=2" },
  { title: "Photo Gallery", description: "Share and monetize photos", imageSrc: "https://i.pravatar.cc/300?img=3" },
  { title: "Event Planner", description: "Discover events easily", imageSrc: "https://i.pravatar.cc/300?img=4" },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection backgroundColor="#14532d" isDarkBackground>
      <VStack spacing={8} align="start">
        <Heading id="projects-section">Featured Projects</Heading>
        <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={6} w="100%">
          {projects.map((project) => (
            <Card key={project.title} {...project} />
          ))}
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ProjectsSection;
