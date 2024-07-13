// src/App.js
import React from 'react';
import { Box, Grid, GridItem, Heading } from '@chakra-ui/react';
import AddBookForm from './components/AddBookForm';
import BookRecommendations from './components/BookRecommendations';
import BookList from './components/BookList';
import './App.css';

function App() {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={4} h="100vh">
      <GridItem colSpan={1} bg="gray.800" p={5}>
        <Heading as="h1" size="xl" mb={6} color="white">Richa's Books</Heading>
        <BookList />
      </GridItem>
      <GridItem colSpan={4} p={5}>
        <Box mb={6}>
          <AddBookForm />
        </Box>
        <Box>
          <BookRecommendations />
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
