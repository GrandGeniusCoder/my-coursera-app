import { createContext, useContext, useState } from "react";

// Create the Alert Context
const AlertContext = createContext();

// Provider component
export const AlertProvider = ({ children }) => {
  const [state, setState] = useState({
    isOpen: false,
    type: "success", // "success" or "error"
    message: "",
  });

  return (
    <AlertContext.Provider
      value={{
        ...state,
        // Function to open the alert
        onOpen: (type, message) => setState({ isOpen: true, type, message }),
        // Function to close the alert
        onClose: () => setState({ ...state, isOpen: false }),
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

// Custom hook to use the alert context
export const useAlertContext = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlertContext must be used within an AlertProvider");
  }
  return context;
};
