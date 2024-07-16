// src/components/HomePage.js
import React from 'react';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';

function HomePage() {
  return (
    <Box p={5}>
      <SimpleGrid columns={1} spacing={10}>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Continue Reading</Heading>
          {/* Display currently reading books */}
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Recommended</Heading>
          {/* Display recommended books */}
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Reviewed Books</Heading>
          {/* Display reviewed books */}
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default HomePage;
