package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.Plan;

@Repository
public interface PlanRepository extends JpaRepository<Plan, Long> {
}