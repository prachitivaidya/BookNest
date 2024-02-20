package com.app.service;

import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.GenreDTO;
import com.app.entities.Genre;
import com.app.repository.GenreRepository;

@Service
public class GenreService {
    @Autowired
    private GenreRepository genreRepository;

    public Genre createGenre(GenreDTO genreDTO) {
        Genre genre = new Genre();
        genre.setGenreName(genreDTO.getGenreName());
        return genreRepository.save(genre);
    }

    public Genre getGenreById(Long id) {
        return genreRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Genre not found with id: " + id));
    }
    
    public List<Genre> getAllGenres() {
        return genreRepository.findAll();
    }

    public Genre updateGenre(Long id, GenreDTO genreDTO) {
        Genre genre = getGenreById(id);
        genre.setGenreName(genreDTO.getGenreName());
        return genreRepository.save(genre);
    }

    public void deleteGenre(Long id) {
        Genre genre = getGenreById(id);
        genreRepository.delete(genre);
    }
}
