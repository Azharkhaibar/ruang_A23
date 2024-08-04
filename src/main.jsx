import React from "react";
import { createRoot } from "react-dom/client";
import { PrimeReactProvider } from "primereact/api";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";

// Impor gaya PrimeReact
import "primereact/resources/themes/saga-blue/theme.css"; // Tema PrimeReact
import "primereact/resources/primereact.min.css"; // Gaya PrimeReact


const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <PrimeReactProvider value={{ unstyled: true }}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </PrimeReactProvider>
);
