import './App.css';

import { Box, Container } from '@chakra-ui/react';
import { Footer } from 'Footer/Footer';
import { Main } from 'Main/Main';
import React from 'react';
import { TopNavBar } from 'TopNavBar/TopNavBar';

function App() {
  return (
    <Box>
      <TopNavBar />
      <Container maxW={900} py="100px" as="main">
        <Main />
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
