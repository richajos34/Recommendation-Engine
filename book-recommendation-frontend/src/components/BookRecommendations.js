// src/components/BookRecommendations.js
import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Heading, List, ListItem } from '@chakra-ui/react';
import axios from 'axios';

function BookRecommendations() {
  const [genre, setGenre] = useState('');
  const [minRating, setMinRating] = useState('');
  const [books, setBooks] = useState([]);

  const handleFetch = async () => {
    try {
      const response = await axios.get('http://localhost:8080/books/recommendations', {
        params: { genre, minRating },
      });
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching recommendations', error);
    }
  };

  return (
    <Box p={5} shadow="md" borderWidth="1px" mt={5}>
      <Heading as="h3" size="lg" mb={4}>Get Book Recommendations</Heading>
      <FormControl mb={4}>
        <FormLabel>Genre</FormLabel>
        <Input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Minimum Rating</FormLabel>
        <Input
          type="number"
          placeholder="Minimum Rating"
          value={minRating}
          onChange={(e) => setMinRating(e.target.value)}
        />
      </FormControl>
      <Button onClick={handleFetch} colorScheme="teal" mb={4}>Get Recommendations</Button>
      <List spacing={3}>
        {books.map((book) => (
          <ListItem key={book.id} p={2} shadow="md" borderWidth="1px">
            {book.title} by {book.author} - {book.genre} - Rating: {book.rating}
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default BookRecommendations;
