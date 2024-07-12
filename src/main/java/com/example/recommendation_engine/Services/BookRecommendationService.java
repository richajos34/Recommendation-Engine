package com.example.recommendation_engine.Services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.recommendation_engine.Repositorys.BookRepository;
import com.example.recommendation_engine.models.Book;

public class BookRecommendationService {
    @Autowired
    private BookRepository bookRepository;

    public List<Book> recommendBooks(String genre, double minRating) {
        List<Book> allBooks = bookRepository.findAll();
        return allBooks.stream()
                .filter(book -> book.getGenre().equalsIgnoreCase(genre) && book.getRating() >= minRating)
                .collect(Collectors.toList());
    }
}
