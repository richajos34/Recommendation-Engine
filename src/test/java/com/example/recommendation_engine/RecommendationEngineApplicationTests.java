package com.example.recommendation_engine;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.ResponseEntity;

import com.example.recommendationengine.models.Book;
import com.example.recommendationengine.services.BookRecommendationService;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class RecommendationEngineApplicationTests {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private BookRecommendationService bookRecommendationService;

    @Test
    void contextLoads() {
    }

    @Test
    void testGetRecommendations() {
        ResponseEntity<Book[]> response = this.restTemplate.getForEntity(
            "http://localhost:" + port + "/recommendations?genre=fiction&minRating=4.0", Book[].class);
        assertThat(response.getStatusCode().is2xxSuccessful()).isTrue();
        assertThat(response.getBody()).isNotNull();
        assertThat(response.getBody().length).isGreaterThan(0);
    }

    @Test
    void testBookRecommendationService() {
        java.util.List<Book> recommendations = bookRecommendationService.recommendBooks("fiction", 4.0);
        assertThat(recommendations).isNotNull();
        assertThat(recommendations).allMatch(book -> book.getGenre().equalsIgnoreCase("fiction") && book.getRating() >= 4.0);
    }
}
