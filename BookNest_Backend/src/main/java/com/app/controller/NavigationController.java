package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.NavigationDTO;
import com.app.entities.Navigation;
import com.app.service.NavigationService;

@RestController
@RequestMapping("/api/navigation")
public class NavigationController {
    @Autowired
    private NavigationService navigationService;

    @PostMapping
    public ResponseEntity<Navigation> createNavigation(@RequestBody NavigationDTO navigationDTO) {
        Navigation navigation = navigationService.createNavigation(navigationDTO);
        return ResponseEntity.ok(navigation);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Navigation> getNavigationById(@PathVariable Long id) {
        Navigation navigation = navigationService.getNavigationById(id);
        return ResponseEntity.ok(navigation);
    }

    @GetMapping
    public ResponseEntity<List<Navigation>> getAllNavigations() {
        List<Navigation> navigations = navigationService.getAllNavigations();
        return ResponseEntity.ok(navigations);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Navigation> updateNavigation(@PathVariable Long id, @RequestBody NavigationDTO navigationDTO) {
        Navigation updatedNavigation = navigationService.updateNavigation(id, navigationDTO);
        return ResponseEntity.ok(updatedNavigation);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteNavigation(@PathVariable Long id) {
        navigationService.deleteNavigation(id);
        return ResponseEntity.ok().build();
    }
}
