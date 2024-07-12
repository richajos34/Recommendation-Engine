package com.example.recommendationengine.repositorys;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.recommendationengine.models.Book;

public interface BookRepository extends MongoRepository<Book, String> {
    
}