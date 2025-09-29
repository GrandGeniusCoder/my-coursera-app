import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
 const [theme, setTheme] = useState("light");

 return (
   <ThemeContext.Provider
     value={{
       theme, setTheme
       
     }}
   >
     {children}
   </ThemeContext.Provider>
 );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
