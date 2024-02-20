package com.app.service;

import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.VisitedUserDTO;
import com.app.entities.VisitedUser;
import com.app.repository.VisitedUserRepository;

@Service
public class VisitedUserService {
    @Autowired
    private VisitedUserRepository visitedUserRepository;

    public VisitedUser createVisitedUser(VisitedUserDTO visitedUserDTO) {
        VisitedUser visitedUser = new VisitedUser();
        visitedUser.setName(visitedUserDTO.getName());
        visitedUser.setGender(visitedUserDTO.getGender());
        visitedUser.setEmail(visitedUserDTO.getEmail());
        visitedUser.setPassword(visitedUserDTO.getPassword());
        return visitedUserRepository.save(visitedUser);
    }

    public VisitedUser getVisitedUserById(Long id) {
        return visitedUserRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Visited user not found with id: " + id));
    }

    public VisitedUser updateVisitedUser(Long id, VisitedUserDTO visitedUserDTO) {
        VisitedUser visitedUser = getVisitedUserById(id);
        visitedUser.setName(visitedUserDTO.getName());
        visitedUser.setGender(visitedUserDTO.getGender());
        visitedUser.setEmail(visitedUserDTO.getEmail());
        visitedUser.setPassword(visitedUserDTO.getPassword());
        return visitedUserRepository.save(visitedUser);
    }
    
    public List<VisitedUser> getAllVisitedUsers() {
        return visitedUserRepository.findAll();
    }

    public void deleteVisitedUser(Long id) {
        VisitedUser visitedUser = getVisitedUserById(id);
        visitedUserRepository.delete(visitedUser);
    }
}
