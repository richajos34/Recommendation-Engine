// src/components/BookList.js
import React, { useState, useEffect } from 'react';
import { Box, Heading, List, ListItem } from '@chakra-ui/react';
import axios from 'axios';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:8080/books');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <Box p={5} shadow="md" borderWidth="1px" mt={5}>
      <Heading as="h3" size="lg" mb={4}>All Books</Heading>
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

export default BookList;
