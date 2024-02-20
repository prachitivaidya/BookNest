package com.app.dao;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.app.entities.Ebook;

@Component
public class EbookDAO {
    @Autowired
    private EntityManager entityManager;

    public void save(Ebook ebook) {
        entityManager.persist(ebook);
    }

    public Ebook findById(Long id) {
        return entityManager.find(Ebook.class, id);
    }

    public void update(Ebook ebook) {
        entityManager.merge(ebook);
    }

    public void delete(Ebook ebook) {
        entityManager.remove(ebook);
    }
}

