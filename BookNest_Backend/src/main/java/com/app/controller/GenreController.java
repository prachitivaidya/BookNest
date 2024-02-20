package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.GenreDTO;
import com.app.entities.Genre;
import com.app.service.GenreService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/genres")
public class GenreController {
    @Autowired
    private GenreService genreService;

    @PostMapping
    public ResponseEntity<Genre> createGenre(@RequestBody GenreDTO genreDTO) {
        Genre genre = genreService.createGenre(genreDTO);
        return ResponseEntity.ok(genre);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Genre> getGenreById(@PathVariable Long id) {
        Genre genre = genreService.getGenreById(id);
        return ResponseEntity.ok(genre);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Genre> updateGenre(@PathVariable Long id, @RequestBody GenreDTO genreDTO) {
        Genre updatedGenre = genreService.updateGenre(id, genreDTO);
        return ResponseEntity.ok(updatedGenre);
    }
    
    @GetMapping
    public ResponseEntity<List<Genre>> getAllGenres() {
        List<Genre> genres = genreService.getAllGenres();
        return ResponseEntity.ok(genres);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteGenre(@PathVariable Long id) {
        genreService.deleteGenre(id);
        return ResponseEntity.ok().build();
    }
}

