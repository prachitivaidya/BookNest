package com.app.dao;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.app.entities.Genre;

@Component
public class GenreDAO {
    @Autowired
    private EntityManager entityManager;

    public void save(Genre genre) {
        entityManager.persist(genre);
    }

    public Genre findById(Long id) {
        return entityManager.find(Genre.class, id);
    }

    public void update(Genre genre) {
        entityManager.merge(genre);
    }

    public void delete(Genre genre) {
        entityManager.remove(genre);
    }
}
