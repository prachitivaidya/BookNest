package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.dto.VisitedUserDTO;
import com.app.entities.VisitedUser;
import com.app.service.SignInService;
import com.app.service.VisitedUserService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/visited-users")
public class VisitedUserController {
    @Autowired
    private VisitedUserService visitedUserService;
    
    @Autowired
    private SignInService signInService;
    
    @PostMapping("/signin")
    public ResponseEntity<VisitedUser> signIn(@RequestBody VisitedUserDTO signInRequest) {
        VisitedUser user = signInService.signIn(signInRequest.getEmail(), signInRequest.getPassword());
        if (user != null) {
            return ResponseEntity.ok(user); // User exists, return the user details
        } else {
            return ResponseEntity.notFound().build(); // User not found, return 404 Not Found
        }
    }


    @PostMapping
    public ResponseEntity<VisitedUser> createVisitedUser(@RequestBody VisitedUserDTO visitedUserDTO) {
        VisitedUser visitedUser = visitedUserService.createVisitedUser(visitedUserDTO);
        return ResponseEntity.ok(visitedUser);
    }
    
    
    @GetMapping
    public ResponseEntity<List<VisitedUser>> getAllVisitedUsers() {
        List<VisitedUser> visitedUsers = visitedUserService.getAllVisitedUsers();
        return ResponseEntity.ok(visitedUsers);
    }

    @GetMapping("/{id}")
    public ResponseEntity<VisitedUser> getVisitedUserById(@PathVariable Long id) {
        VisitedUser visitedUser = visitedUserService.getVisitedUserById(id);
        return ResponseEntity.ok(visitedUser);
    }

    @PutMapping("/{id}")
    public ResponseEntity<VisitedUser> updateVisitedUser(@PathVariable Long id, @RequestBody VisitedUserDTO visitedUserDTO) {
        VisitedUser updatedVisitedUser = visitedUserService.updateVisitedUser(id, visitedUserDTO);
        return ResponseEntity.ok(updatedVisitedUser);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteVisitedUser(@PathVariable Long id) {
        visitedUserService.deleteVisitedUser(id);
        return ResponseEntity.ok().build();
    }
    
    
}
