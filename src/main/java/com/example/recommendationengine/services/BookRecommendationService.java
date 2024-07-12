package com.example.recommendationengine.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.recommendationengine.models.Book;
import com.example.recommendationengine.repositorys.BookRepository;

@Service
public class BookRecommendationService {
    @Autowired
    private BookRepository bookRepository;

    public List<Book> recommendBooks(String genre, double minRating) {
        List<Book> allBooks = bookRepository.findAll();
        return allBooks.stream()
                .filter(book -> book.getGenre().equalsIgnoreCase(genre) && book.getRating() >= minRating)
                .collect(Collectors.toList());
    }

    public Book addBook(Book book) {
        return bookRepository.save(book);
    }
}
