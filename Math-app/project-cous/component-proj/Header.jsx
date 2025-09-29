import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link } from "@chakra-ui/react";


const socials = [
  { icon: faEnvelope, url: "mailto:hello@example.com" },
  { icon: faGithub, url: "https://github.com" },
  { icon: faLinkedin, url: "https://www.linkedin.com" },
  { icon: faMedium, url: "https://medium.com" },
  { icon: faStackOverflow, url: "https://stackoverflow.com" },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView  ({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transition="transform 0.3s ease-in-out"
      backgroundColor="#18181b"
      zIndex={10}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack px={16} py={4} justifyContent="space-between" alignItems="center">
          {/* Social Media Links */}
          <nav>
            <HStack spacing={4}>
              {socials.map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  isExternal
                  _hover={{ color: "teal.300" }}
                >
                  <FontAwesomeIcon icon={social.icon} size="lg" />
                </Link>
              ))}
            </HStack>
          </nav>

          {/* Navigation Links */}
          <nav>
            <HStack spacing={8}>
              <Link onClick={handleClick("projects")} cursor="pointer" _hover={{ color: "teal.300" }}>
                Projects
              </Link>
              <Link onClick={handleClick("contact")} cursor="pointer" _hover={{ color: "teal.300" }}>
                Contact Me
              </Link>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
