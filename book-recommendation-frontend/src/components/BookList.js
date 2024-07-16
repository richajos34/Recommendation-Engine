// src/components/BookSidebar.js
import React from 'react';
import {
  Box,
  Flex,
  Heading,
  List,
  ListItem,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

function BookList({ books, onAddBookClick }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const handleAddBookClick = () => {
    navigate('/add-book');
    onClose(); // Close the drawer after navigation
  };

  return (
    <>
      <Button onClick={onOpen} position="absolute" top={4} right={4} colorScheme="teal">
        <AddIcon />
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Richa's Books</DrawerHeader>
            <DrawerBody>
              <List spacing={3}>
                {books.map((book) => (
                  <ListItem key={book.id}>
                    <Box as="span" fontWeight="bold">
                      {book.title}
                    </Box>
                    <Box as="span"> by {book.author}</Box>
                  </ListItem>
                ))}
              </List>
              <Button mt={4} colorScheme="teal" onClick={handleAddBookClick}>
                Add Book
              </Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}

export default BookList;
