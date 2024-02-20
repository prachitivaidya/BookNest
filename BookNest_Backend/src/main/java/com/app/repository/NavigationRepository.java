package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.Navigation;

@Repository
public interface NavigationRepository extends JpaRepository<Navigation, Long> {
}