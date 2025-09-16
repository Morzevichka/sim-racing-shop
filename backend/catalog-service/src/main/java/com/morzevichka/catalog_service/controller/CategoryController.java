package com.morzevichka.catalog_service.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/catalog")
public class CategoryController {
    private final Logger logger = LoggerFactory.getLogger(CategoryController.class);

    @GetMapping("/categories")
    public ResponseEntity<String> getAllCategories() {
        logger.info("/categories was called");
        return new ResponseEntity<>("I edited response", HttpStatus.OK);
    }
}