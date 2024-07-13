// src/components/AddBookForm.js
import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Heading, useToast } from '@chakra-ui/react';
import axios from 'axios';

function AddBookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('');
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const book = { title, author, genre, rating };
    try {
      const response = await axios.post('http://localhost:8080/books', book);
      if (response.status === 200 || response.status === 201) {
        toast({
          title: 'Book added.',
          description: 'The book has been added successfully.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        setTitle('');
        setAuthor('');
        setGenre('');
        setRating('');
      }
    } catch (error) {
      toast({
        title: 'Error.',
        description: 'Failed to add the book.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={5} shadow="md" borderWidth="1px">
      <Heading as="h3" size="lg" mb={4}>Add a New Book</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel>Title</FormLabel>
          <Input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Author</FormLabel>
          <Input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </FormControl>
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
          <FormLabel>Rating</FormLabel>
          <Input
            type="number"
            placeholder="Rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </FormControl>
        <Button type="submit" colorScheme="teal">Add Book</Button>
      </form>
    </Box>
  );
}

export default AddBookForm;
