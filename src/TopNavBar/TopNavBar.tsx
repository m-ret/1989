import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Button, Flex, Stack, Text, useBreakpointValue, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

export const TopNavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Flex
        w="100%"
        as="header"
        minH="70px"
        align="center"
        boxShadow="md"
        p={{ base: 4 }}
        position="fixed"
        bg={useColorModeValue('white', 'gray.800')}
      >
        <Flex flex={{ base: 1 }} justify={{ xs: 'start' }}>
          <Text
            fontFamily="heading"
            color={useColorModeValue('gray.800', 'white')}
            textAlign={useBreakpointValue({ base: 'left' })}
          >
            This header is under construction
          </Text>
        </Flex>

        <Stack flex={{ base: 1, md: 0 }} justify="flex-end" direction="row" spacing={6}>
          <Button onClick={toggleColorMode}>{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}</Button>
        </Stack>
      </Flex>
    </>
  );
};
