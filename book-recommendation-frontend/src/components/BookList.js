// src/components/BookList.js
import React, { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';
import axios from 'axios';

function BookList() {
  const [books, setBooks] = useState([]);
  const [booksByGenre, setBooksByGenre] = useState({});

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:8080/books');
        console.log(response.data)
        setBooks(response.data);

        const groupedBooks = response.data.reduce((acc, book) => {
          if (!acc[book.genre]) {
            acc[book.genre] = [];
          }
          acc[book.genre].push(book);
          return acc;
        }, {});
        setBooksByGenre(groupedBooks);
      } catch (error) {
        console.error('Error fetching books', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <Box p={5} shadow="md" borderWidth="1px" mt={5} bg="gray.700" color="white">
      <Heading as="h3" size="lg" mb={4}>All Books</Heading>
      <Accordion allowMultiple>
        {Object.keys(booksByGenre).map((genre) => (
          <AccordionItem key={genre}>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {genre}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <List spacing={3}>
                {booksByGenre[genre].map((book) => (
                  <ListItem key={book.id} p={2} shadow="md" borderWidth="1px" bg="gray.600">
                    <Text fontWeight="bold">{book.title}</Text>
                    <Text>by {book.author}</Text>
                    <Text>Rating: {book.rating}</Text>
                  </ListItem>
                ))}
              </List>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
}

export default BookList;
