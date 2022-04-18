import { Box, Container, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

export const Footer = () => {
  return (
    <Box bg={useColorModeValue('white', 'gray.800')} color={useColorModeValue('gray.800', 'gray.200')}>
      <Container py={4} maxW="6xl" as={Stack} spacing={4} textAlign="center">
        <Text>Marcelo Retana | {new Date().getFullYear()}</Text>
      </Container>
    </Box>
  );
};
