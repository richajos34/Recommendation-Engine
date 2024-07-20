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
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

function NavBar({ books }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const handleAddBookClick = () => {
    navigate('/add-book');
    onClose(); // Close the drawer after navigation
  };

  return (
    <Box p={4} color="white">
      <Flex justifyContent="space-between" alignItems="center">
        <IconButton
          icon={<HamburgerIcon />}
          onClick={onOpen}
          colorScheme="teal"
          variant="outline"
        />
      </Flex>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
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
                <ListItem>
                  <Button
                    mt={4}
                    colorScheme="teal"
                    onClick={handleAddBookClick}
                    width="100%"
                  >
                    Add Book
                  </Button>
                </ListItem>
                <ListItem>
                  <Button
                    mt={4}
                    colorScheme="teal"
                    onClick={handleAddBookClick}
                    width="100%"
                  >
                    Add Book
                  </Button>
                </ListItem>
              </List>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
}

export default NavBar;
