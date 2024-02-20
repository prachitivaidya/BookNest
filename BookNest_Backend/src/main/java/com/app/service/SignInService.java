package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entities.VisitedUser;
import com.app.repository.VisitedUserRepository;

@Service
public class SignInService {
    @Autowired
    private VisitedUserRepository visitedUserRepository;

    public VisitedUser signIn(String email, String password) {
        // Query the database to find a user with the provided email and password
        return visitedUserRepository.findByEmailAndPassword(email, password);
    }
}
