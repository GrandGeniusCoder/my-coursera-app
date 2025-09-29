import React, { useRef } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { useAlertContext } from "./context/alertContext";

const Alert = () => {
  const { isOpen, type, message, onClose } = useAlertContext();
  const cancelRef = useRef();

  // Determine alert color based on type
  const backgroundColor = type === "success" ? "#81C784" : "#FF8A65";
  const headerText = type === "success" ? "All good!" : "Oops!";

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isCentered
    >
      <AlertDialogOverlay>
        <AlertDialogContent py={4} backgroundColor={backgroundColor}>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {headerText}
          </AlertDialogHeader>
          <AlertDialogBody>{message}</AlertDialogBody>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default Alert;
