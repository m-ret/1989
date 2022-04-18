import './index.css';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React from 'react';
import { createRoot } from 'react-dom/client';

const theme = extendTheme({
  fonts: {
    heading: 'Courier, sans-serif',
    body: 'Courier, sans-serif',
  },
});

import { BrowserRouter } from 'react-router-dom';

import App from './App';

const container = document.getElementById('root');

// use type assertion (as)
// const root = createRoot(rootElement as Element);

// or non-null (!) operator
// to get rid of a TS error here.
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
