// src/App.js
import React, { useState, useEffect } from 'react';
import { ChakraProvider, Box, Flex } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Homepage';
import AddBookForm from './components/AddBookForm';
import BookList from './components/BookList';
import NavBar from './components/NavBar';
import axios from 'axios';

<Route path="/add-book" element={<AddBookForm />} />;
<Route path="/" element={<HomePage />} />;





function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:8080/books');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <ChakraProvider>
      <Router>
      <NavBar books={books} />
        <Flex direction="column" p={5}>
          <BookList books={books} onAddBookClick={() => { }} />
          <Box flex="1" p={5}>
            <Routes>
            <Route path="/" element={<HomePage books={books} />} />
              <Route path="/add-book" element={<AddBookForm />} />;
            </Routes>
          </Box>
        </Flex>
      </Router>
    </ChakraProvider>
  );
}

export default App;
