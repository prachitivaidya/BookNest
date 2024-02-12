package com.app.dao;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.app.entities.VisitedUser;

@Component
public class VisitedUserDAO {
    @Autowired
    private EntityManager entityManager;

    public void save(VisitedUser visitedUser) {
        entityManager.persist(visitedUser);
    }

    public VisitedUser findById(Long id) {
        return entityManager.find(VisitedUser.class, id);
    }

    public void update(VisitedUser visitedUser) {
        entityManager.merge(visitedUser);
    }

    public void delete(VisitedUser visitedUser) {
        entityManager.remove(visitedUser);
    }
}

