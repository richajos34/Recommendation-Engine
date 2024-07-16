// src/components/AddBookForm.js
import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
  ChakraProvider,
  extendTheme,
  CSSReset,
} from '@chakra-ui/react';
import axios from 'axios';

const lightTheme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});

function AddBookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('');
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/books', {
        title,
        author,
        genre,
        rating,
      });
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
    } catch (error) {
      toast({
        title: 'Error adding book.',
        description: 'There was an error adding the book.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      marginRight="20%"
      marginTop="10%"
      marginLeft="auto"
      boxShadow="md"
      width="60%"
      borderRadius="2xl"
      bg="#FFFDD0"
      p={5}>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired mb={4}>
          <FormLabel color="black">Title</FormLabel>
          <Input
            color="black"
            borderColor="black"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired mb={4}>
          <FormLabel color="black" >Author</FormLabel>
          <Input
            color="black"
            borderColor="black"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired mb={4}>
          <FormLabel color="black" >Genre</FormLabel>
          <Input
            color="black"
            borderColor="black"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired mb={4}>
          <FormLabel color="black" >Rating</FormLabel>
          <Input
            color="black"
            borderColor="black"
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </FormControl>
        <Button type="submit" colorScheme="teal">
          Add Book
        </Button>
      </form>
    </Box>
  );
}

export default AddBookForm;
