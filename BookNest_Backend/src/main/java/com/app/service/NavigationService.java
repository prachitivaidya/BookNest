package com.app.service;
import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.NavigationDTO;
import com.app.entities.Ebook;
import com.app.entities.Navigation;
import com.app.entities.SubscribedUser;
import com.app.repository.EbookRepository;
import com.app.repository.NavigationRepository;
import com.app.repository.SubscribedUserRepository;

@Service
public class NavigationService {
    @Autowired
    private NavigationRepository navigationRepository;

    @Autowired
    private SubscribedUserRepository subscribedUserRepository;

    @Autowired
    private EbookRepository ebookRepository;

    public Navigation createNavigation(NavigationDTO navigationDTO) {
        Navigation navigation = new Navigation();
        // Retrieve SubscribedUser from the database
        SubscribedUser subscribedUser = subscribedUserRepository.findById(navigationDTO.getUserId())
                .orElseThrow(() -> new EntityNotFoundException("SubscribedUser not found with id: " + navigationDTO.getUserId()));
        
        // Retrieve Ebook from the database
        Ebook ebook = ebookRepository.findById(navigationDTO.getEbookId())
                .orElseThrow(() -> new EntityNotFoundException("Ebook not found with id: " + navigationDTO.getEbookId()));
        
        navigation.setUser(subscribedUser);
        navigation.setEbook(ebook);
        navigation.setPageNo(navigationDTO.getPageNo());
        return navigationRepository.save(navigation);
    }

    public Navigation getNavigationById(Long id) {
        return navigationRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Navigation not found with id: " + id));
    }
    
    public List<Navigation> getAllNavigations() {
        return navigationRepository.findAll();
    }

    public Navigation updateNavigation(Long id, NavigationDTO navigationDTO) {
        Navigation navigation = getNavigationById(id);
        // Update fields as needed
        return navigationRepository.save(navigation);
    }

    public void deleteNavigation(Long id) {
        Navigation navigation = getNavigationById(id);
        navigationRepository.delete(navigation);
    }
}
