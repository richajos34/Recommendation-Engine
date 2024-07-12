package com.example.recommendation_engine.Repositorys;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.recommendation_engine.models.Book;

public interface BookRepository extends MongoRepository<Book, String> {
    
}
