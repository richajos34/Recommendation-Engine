// src/components/HomePage.js
import React from 'react';
import { Box, Heading, SimpleGrid, GridItem } from '@chakra-ui/react';

function HomePage({ books }) {
  return (
    <Box p={5}>
      <SimpleGrid columns={1} spacing={10}>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Continue Reading</Heading>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Recommended</Heading>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Reviewed Books</Heading>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Your Books</Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing={5} mt={4}>
            {books.map((book) => (
              <GridItem key={book.id} p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="md">{book.title}</Heading>
                <Box>{book.author}</Box>
              </GridItem>
            ))}
          </SimpleGrid>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default HomePage;
