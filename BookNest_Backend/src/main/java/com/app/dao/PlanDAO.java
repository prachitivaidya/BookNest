package com.app.dao;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.app.entities.Plan;

@Component
public class PlanDAO {
    @Autowired
    private EntityManager entityManager;

    public void save(Plan plan) {
        entityManager.persist(plan);
    }

    public Plan findById(Long id) {
        return entityManager.find(Plan.class, id);
    }

    public void update(Plan plan) {
        entityManager.merge(plan);
    }

    public void delete(Plan plan) {
        entityManager.remove(plan);
    }
}
