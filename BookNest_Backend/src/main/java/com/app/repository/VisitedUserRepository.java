package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.VisitedUser;

@Repository
public interface VisitedUserRepository extends JpaRepository<VisitedUser, Long> {
	VisitedUser findByEmailAndPassword(String email, String password);
	
}
