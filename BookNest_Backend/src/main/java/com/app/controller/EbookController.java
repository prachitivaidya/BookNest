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

import com.app.dto.EbookDTO;
import com.app.entities.Ebook;
import com.app.service.EbookService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/ebooks")
public class EbookController {
    @Autowired
    private EbookService ebookService;

    @PostMapping
    public ResponseEntity<Ebook> createEbook(@RequestBody EbookDTO ebookDTO) {
        Ebook ebook = ebookService.createEbook(ebookDTO);
        return ResponseEntity.ok(ebook);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Ebook> getEbookById(@PathVariable Long id) {
        Ebook ebook = ebookService.getEbookById(id);
        return ResponseEntity.ok(ebook);
    }
    
    @GetMapping("/{id}/content")
    public ResponseEntity<String> getEbookContentById(@PathVariable Long id) {
        Ebook ebook = ebookService.getEbookById(id);
        return ResponseEntity.ok(ebook.getEbookContent());
    }
    
    @GetMapping // New endpoint for getting all eBooks
    public ResponseEntity<List<Ebook>> getAllEbooks() {
        List<Ebook> ebooks = ebookService.getAllEbooks();
        return ResponseEntity.ok(ebooks);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Ebook> updateEbook(@PathVariable Long id, @RequestBody EbookDTO ebookDTO) {
        Ebook updatedEbook = ebookService.updateEbook(id, ebookDTO);
        return ResponseEntity.ok(updatedEbook);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteEbook(@PathVariable Long id) {
        ebookService.deleteEbook(id);
        return ResponseEntity.ok().build();
    }
}

