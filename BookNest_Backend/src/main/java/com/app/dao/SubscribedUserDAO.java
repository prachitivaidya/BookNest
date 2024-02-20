package com.app.dao;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.app.entities.SubscribedUser;

@Component
public class SubscribedUserDAO {
    @Autowired
    private EntityManager entityManager;

    public void save(SubscribedUser subscribedUser) {
        entityManager.persist(subscribedUser);
    }

    public SubscribedUser findById(Long id) {
        return entityManager.find(SubscribedUser.class, id);
    }

    public void update(SubscribedUser subscribedUser) {
        entityManager.merge(subscribedUser);
    }

    public void delete(SubscribedUser subscribedUser) {
        entityManager.remove(subscribedUser);
    }
}

