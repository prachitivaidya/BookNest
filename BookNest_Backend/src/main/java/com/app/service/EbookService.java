package com.app.service;

import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.EbookDTO;
import com.app.entities.Ebook;
import com.app.entities.Genre;
import com.app.entities.SubscribedUser;
import com.app.repository.EbookRepository;
import com.app.repository.GenreRepository;
import com.app.repository.SubscribedUserRepository;

@Service
public class EbookService {
    @Autowired
    private EbookRepository ebookRepository;

    @Autowired
    private SubscribedUserRepository subscribedUserRepository;
    @Autowired
    private GenreRepository genreRepository;

    public Ebook createEbook(EbookDTO ebookDTO) {
        Ebook ebook = new Ebook();
        ebook.setName(ebookDTO.getName());
        ebook.setAuthor(ebookDTO.getAuthor());
        ebook.setNumberOfPages(ebookDTO.getNumberOfPages());
        ebook.setEbookContent(ebookDTO.getEbookContent());
        // Retrieve the genre from the database based on the genre ID in ebookDTO
        Genre genre = genreRepository.findById(ebookDTO.getGenreId())
                .orElseThrow(() -> new EntityNotFoundException("Genre not found with id: " + ebookDTO.getGenreId()));
        ebook.setGenre(genre);
        return ebookRepository.save(ebook);
    }

    public List<Ebook> getAllEbooks() {
        return ebookRepository.findAll();
    }
    
    public Ebook getEbookById(Long id) {
        return ebookRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Ebook not found with id: " + id));
    }

    public Ebook updateEbook(Long id, EbookDTO ebookDTO) {
        Ebook ebook = getEbookById(id);
        ebook.setName(ebookDTO.getName());
        ebook.setAuthor(ebookDTO.getAuthor());
        ebook.setNumberOfPages(ebookDTO.getNumberOfPages());
        ebook.setEbookContent(ebookDTO.getEbookContent());
        // Retrieve the genre from the database based on the genre ID in ebookDTO
        Genre genre = genreRepository.findById(ebookDTO.getGenreId())
                .orElseThrow(() -> new EntityNotFoundException("Genre not found with id: " + ebookDTO.getGenreId()));
        ebook.setGenre(genre);
        return ebookRepository.save(ebook);
    }

    public void deleteEbook(Long id) {
        Ebook ebook = getEbookById(id);
        ebookRepository.delete(ebook);
    }

    public void addSubscribedUserToEbook(Long ebookId, Long userId) {
        Ebook ebook = getEbookById(ebookId);
        SubscribedUser subscribedUser = subscribedUserRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("Subscribed user not found with id: " + userId));
        ebook.getSubscribedUsers().add(subscribedUser);
        ebookRepository.save(ebook);
    }

    public void removeSubscribedUserFromEbook(Long ebookId, Long userId) {
        Ebook ebook = getEbookById(ebookId);
        SubscribedUser subscribedUser = subscribedUserRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("Subscribed user not found with id: " + userId));
        ebook.getSubscribedUsers().remove(subscribedUser);
        ebookRepository.save(ebook);
    }
}
