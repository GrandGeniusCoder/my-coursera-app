import React, { useState, useEffect, useRef } from "react";
import { Box, HStack, Link } from "@chakra-ui/react";
import { MdEmail } from "react-icons/md"; // <-- replace EmailIcon
import { FaGithub, FaLinkedin, FaMedium, FaStackOverflow } from "react-icons/fa";

const socials = [
  { icon: MdEmail, url: "mailto:hello@example.com" },
  { icon: FaGithub, url: "https://github.com" },
  { icon: FaLinkedin, url: "https://www.linkedin.com" },
  { icon: FaMedium, url: "https://medium.com" },
  { icon: FaStackOverflow, url: "https://stackoverflow.com" },
];


const Header = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);
  const headerRef = useRef();

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setHidden(true); // scrolling down
    } else {
      setHidden(false); // scrolling up
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Box
      ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={10}
      bg="#18181b"
      transition="transform 0.3s ease-in-out"
      transform={hidden ? "translateY(-200px)" : "translateY(0)"}
    >
      <Box maxW="1280px" mx="auto" color="white">
        <HStack px={8} py={4} justify="space-between">
          <HStack spacing={4}>
            {socials.map((social, index) => (
              <Link key={index} href={social.url} isExternal>
                <Box as={social.icon} boxSize={5} />
              </Link>
            ))}
          </HStack>

          <HStack spacing={8}>
            <Link onClick={handleClick("projects")} cursor="pointer">Projects</Link>
            <Link onClick={handleClick("contactme")} cursor="pointer">Contact Me</Link>
          </HStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
