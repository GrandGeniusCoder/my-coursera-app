
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./Header";
import LandingSection from "./LandingSection";
import ProjectsSection from "../ProjectsSection";
import ContactMeSection from "./ContactMeSection";
import Footer from "./Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./Alert";

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <Header />
        <LandingSection />
        <ProjectsSection />
        <ContactMeSection />
        <Footer />
        <Alert />
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;