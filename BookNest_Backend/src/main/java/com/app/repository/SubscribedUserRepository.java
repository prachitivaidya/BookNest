package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.SubscribedUser;

@Repository
public interface SubscribedUserRepository extends JpaRepository<SubscribedUser, Long> {
	
}