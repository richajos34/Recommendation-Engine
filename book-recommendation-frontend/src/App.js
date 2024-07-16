// src/App.js
import React, { useState } from 'react';
import { ChakraProvider, Box, Flex } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Homepage';
import AddBookForm from './components/AddBookForm';
import BookList from './components/BookList';
<Route path="/add-book" element={<AddBookForm />} />;
<Route path="/" element={<HomePage />} />;





function App() {
  const [books, setBooks] = useState([
    { id: '1', title: 'The Fellowship of the Ring', author: 'J.R.R. Tolkien', genre: 'Fantasy', rating: 4.9 },
    { id: '2', title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction', rating: 4.8 },
    // Add more books as needed
  ]);

  return (
    <ChakraProvider>
      <Router>
        <Flex>
          <BookList books={books} onAddBookClick={() => { }} />
          <Box flex="1" p={5}>
            <Routes>
              <Route path="/" element={<HomePage />} />;
              <Route path="/add-book" element={<AddBookForm />} />;
            </Routes>
          </Box>
        </Flex>
      </Router>
    </ChakraProvider>
  );
}

export default App;
