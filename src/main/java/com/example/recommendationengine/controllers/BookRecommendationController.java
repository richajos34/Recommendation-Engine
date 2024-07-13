package com.example.recommendationengine.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.recommendationengine.models.Book;
import com.example.recommendationengine.services.BookRecommendationService;

@RestController
@RequestMapping("/books")
@CrossOrigin(origins = "http://localhost:3000")
public class BookRecommendationController {

    @Autowired
    private BookRecommendationService bookRecommendationService;

    @GetMapping("/recommendations")
    public List<Book> getRecommendations(@RequestParam String genre, @RequestParam double minRating) {
        return bookRecommendationService.recommendBooks(genre, minRating);
    }

    @GetMapping
    public List<Book> getAllBooks() {
        return bookRecommendationService.getAllBooks();
    }

    @PostMapping
    public Book addBook(@RequestBody Book book) {
        return bookRecommendationService.addBook(book);
    }
}