// SubscribedUserController.java

package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.SubscribedUserDTO;
import com.app.entities.SubscribedUser;
import com.app.service.SubscribedUserService;


@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/subscribed-users")
public class SubscribedUserController {
    @Autowired
    private SubscribedUserService subscribedUserService;

    @PostMapping
    public ResponseEntity<SubscribedUser> createSubscribedUser(@RequestBody SubscribedUserDTO subscribedUserDTO) {
        SubscribedUser subscribedUser = subscribedUserService.createSubscribedUser(subscribedUserDTO);
        return ResponseEntity.ok(subscribedUser);
    }

    @GetMapping
    public ResponseEntity<List<SubscribedUser>> getAllSubscribedUsers() {
        List<SubscribedUser> subscribedUsers = subscribedUserService.getAllSubscribedUsers();
        return ResponseEntity.ok().body(subscribedUsers);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<SubscribedUser> getSubscribedUserById(@PathVariable Long id) {
        SubscribedUser subscribedUser = subscribedUserService.getSubscribedUserById(id);
        return ResponseEntity.ok(subscribedUser);
    }

    @PutMapping("/{id}")
    public ResponseEntity<SubscribedUser> updateSubscribedUser(@PathVariable Long id, @RequestBody SubscribedUserDTO subscribedUserDTO) {
        SubscribedUser updatedSubscribedUser = subscribedUserService.updateSubscribedUser(id, subscribedUserDTO);
        return ResponseEntity.ok(updatedSubscribedUser);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteSubscribedUser(@PathVariable Long id) {
        subscribedUserService.deleteSubscribedUser(id);
        return ResponseEntity.ok().build();
    }
}
