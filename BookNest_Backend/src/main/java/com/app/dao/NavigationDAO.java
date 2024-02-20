package com.app.dao;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.app.entities.Navigation;

@Component
public class NavigationDAO {
    @Autowired
    private EntityManager entityManager;

    public void save(Navigation navigation) {
        entityManager.persist(navigation);
    }

    public Navigation findById(Long id) {
        return entityManager.find(Navigation.class, id);
    }

    public void update(Navigation navigation) {
        entityManager.merge(navigation);
    }

    public void delete(Navigation navigation) {
        entityManager.remove(navigation);
    }
}

