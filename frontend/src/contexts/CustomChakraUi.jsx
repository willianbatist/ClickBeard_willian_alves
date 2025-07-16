"use client"
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme.js";


export default function CustomChakraProvider({ children }) {
  return (
    <ChakraProvider theme={theme}>
      {children}
    </ChakraProvider>
  );
};