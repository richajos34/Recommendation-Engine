// src/App.js
import React from 'react';
import { Container } from '@chakra-ui/react';
import AddBookForm from './components/AddBookForm';
import BookRecommendations from './components/BookRecommendations';
import BookList from './components/BookList';
import './App.css';

function App() {
  return (
    <Container maxW="container.md">
      <header className="App-header">
        <h1>Book Recommendation App</h1>
      </header>
      <main>
        <AddBookForm />
        <BookRecommendations />
        <BookList />
      </main>
    </Container>
  );
}

export default App;
