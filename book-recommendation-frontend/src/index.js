// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';

// Get the root element
const container = document.getElementById('root');

// Create a root
const root = createRoot(container);

// Render the application
root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
