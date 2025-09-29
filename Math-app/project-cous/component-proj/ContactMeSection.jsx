import React from "react";
import { VStack, Box, Heading, Input, Textarea, Select, Button, FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "./hooks/useSubmit";
import { useAlertContext } from "./context/alertContext";

const ContactMeSection = () => {
  const { isLoading, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: { firstName: "", email: "", type: "hireMe", comment: "" },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      type: Yup.string().required("Type is required"),
      comment: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, actions) => {
      const success = await submit("contact", values);
      if (success) {
        actions.resetForm();
        onOpen("success", `Thanks ${values.firstName}, your form was submitted!`);
      } else {
        onOpen("error", "Failed to submit, try again.");
      }
    },
  });

  return (
    <FullScreenSection backgroundColor="#512DA8" isDarkBackground>
      <VStack spacing={8} align="start" w="100%" maxW="1024px" p={8} id="contactme-section">
        <Heading>Contact Me</Heading>
        <Box w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input {...formik.getFieldProps("firstName")} />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input type="email" {...formik.getFieldProps("email")} />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={formik.touched.type && formik.errors.type}>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select {...formik.getFieldProps("type")}>
                  <option value="hireMe">Freelance Project</option>
                  <option value="openSource">Open Source</option>
                  <option value="other">Other</option>
                </Select>
                <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                <FormLabel htmlFor="comment">Message</FormLabel>
                <Textarea {...formik.getFieldProps("comment")} h={150} />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>

              <Button type="submit" colorScheme="purple" w="full" isLoading={isLoading}>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;
