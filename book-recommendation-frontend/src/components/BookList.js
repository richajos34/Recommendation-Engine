// src/components/BookSidebar.js
import React from 'react';
import {
  Box,
  List,
  ListItem,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

function BookSidebar({ books }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        icon={<HamburgerIcon />}
        onClick={onOpen}
        position="absolute"
        top={4}
        left={4}
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <List spacing={3}>
                <ListItem>
                  <RouterLink to="/" onClick={onClose}>Home</RouterLink>
                </ListItem>
                <ListItem>
                  <RouterLink to="/add-book" onClick={onClose}>Add Book</RouterLink>
                </ListItem>
              </List>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}

export default BookSidebar;
