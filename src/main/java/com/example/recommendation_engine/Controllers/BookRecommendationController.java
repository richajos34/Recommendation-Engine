package com.example.recommendation_engine.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.recommendation_engine.Services.BookRecommendationService;
import com.example.recommendation_engine.models.Book;

@RestController
public class BookRecommendationController {

    @Autowired
    private BookRecommendationService bookRecommendationService;

    @GetMapping("/recommendations")
    public List<Book> getRecommendations(@RequestParam String genre, @RequestParam double minRating) {
        return bookRecommendationService.recommendBooks(genre, minRating);
    }
}
