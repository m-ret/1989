import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Link,
  Text,
  useToken,
} from '@chakra-ui/react';
import { AvatarC } from 'Components/Avatar/Avatar';
import React from 'react';

import data from '../data/data.json';

export const Landing = () => {
  const [green500] = useToken('colors', ['green.500']);

  return (
    <Box>
      <Flex alignItems="center" alignContent="center" justify="space-between" my={5}>
        <Flex flexDir="column">
          <Text fontWeight="extrabold" fontSize={36}>
            {data.about.name}
          </Text>
          <Text fontSize={16}>{data.about.from}</Text>
        </Flex>
        <AvatarC size="2xl" css={{ border: `3px solid ${green500}` }} zIndex="hide" />
      </Flex>

      <hr />

      <Box my={5}>
        <Text fontWeight="bold" fontSize={32}>
          {data.about.title}
        </Text>
        <Text>{data.about.personal}</Text>
        <Text my={5}>{data.about.professional}</Text>
        <Text my={5}>{data.about.extra}</Text>
        <Text fontWeight="bold" fontSize={32}>
          {data.experience.title}
        </Text>
        <Text fontWeight="hairline" fontSize={12}>
          {data.experience.subtitle}
        </Text>
        <Accordion allowToggle mt={5}>
          {data.experience.jobs.map((job, i) => (
            <AccordionItem key={i}>
              <AccordionButton>
                <Text fontWeight="bold" fontSize={24} flex="1" textAlign="left" display="inline">
                  {job.company}{' '}
                  {!!job.details && (
                    <Text fontWeight="hairline" fontSize={12} display="inline">
                      ({job.details})
                    </Text>
                  )}
                </Text>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                {job.description.map((d, i) => (
                  <Text key={i} my={5}>
                    {d}
                  </Text>
                ))}
                <Text>
                  Reference:{' '}
                  <Link color={green500} isExternal>
                    {job.url}
                  </Link>
                </Text>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
        <Box my={5}>
          <Text fontWeight="bold" fontSize={32}>
            Note
          </Text>
          <Text fontWeight="hairline">
            The companies listed above are ONLY the most relevant experience I've had. I've worked on many other
            projects through my 8 years of experience as a software developer. Also, as a part of that list there are
            companies where I am still under contract with them.
          </Text>
        </Box>
      </Box>
      <Box my={5}>
        <Text fontWeight="bold" fontSize={32}>
          Contact
        </Text>
        <Text>
          Email:{' '}
          <Link color={green500} href="mailto:retana.marcelo@gmail.com" isExternal>
            retana.marcelo@gmail.com
          </Link>
        </Text>
      </Box>
    </Box>
  );
};
