package com.app.service;

import javax.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.app.dto.SubscribedUserDTO;
import com.app.entities.Ebook;
import com.app.entities.Plan;
import com.app.entities.SubscribedUser;
import com.app.entities.VisitedUser;
import com.app.repository.EbookRepository;
import com.app.repository.PlanRepository;
import com.app.repository.SubscribedUserRepository;
import com.app.repository.VisitedUserRepository;
import java.time.LocalDate;
import java.util.List;

@Service
public class SubscribedUserService {
    @Autowired
    private SubscribedUserRepository subscribedUserRepository;

    @Autowired
    private EbookRepository ebookRepository;

    @Autowired
    private PlanRepository planRepository;

    @Autowired
    private VisitedUserRepository visitedUserRepository;

    public SubscribedUser createSubscribedUser(SubscribedUserDTO subscribedUserDTO) {
        SubscribedUser subscribedUser = new SubscribedUser();
        LocalDate subscriptiondate = LocalDate.now();
        subscribedUser.setRegistrationDate(subscriptiondate);
        
        // Calculate the expiry date based on the registration date and plan duration
        Plan plan = planRepository.findById(subscribedUserDTO.getPlanId())
                .orElseThrow(() -> new EntityNotFoundException("Plan not found with id: " + subscribedUserDTO.getPlanId()));
        LocalDate expiryDate = subscriptiondate.plusMonths(plan.getNumberOfMonths());
        subscribedUser.setExpiryDate(expiryDate);
       //plan.setSubscribedUserCount(plan.getSubscribedUserCount()+1);

        // Fetch VisitedUser from repository using the provided ID
        VisitedUser visitedUser = visitedUserRepository.findById(subscribedUserDTO.getVisitedUserId())
                .orElseThrow(() -> new EntityNotFoundException("VisitedUser not found with id: " + subscribedUserDTO.getVisitedUserId()));
        subscribedUser.setVisitedUser(visitedUser);

        // Fetch Ebooks from repository using the provided IDs
      /*  if (subscribedUserDTO.getEbookIds() != null) {
            for (Long ebookId : subscribedUserDTO.getEbookIds()) {
                Ebook ebook = ebookRepository.findById(ebookId)
                        .orElseThrow(() -> new EntityNotFoundException("Ebook not found with id: " + ebookId));
                subscribedUser.getEbooks().add(ebook);
            }
        }
        */

        // Set Plan
        subscribedUser.setPlan(plan);
        plan.setSubscribedUserCount(plan.getSubscribedUserCount() + 1);
        planRepository.save(plan); 

        return subscribedUserRepository.save(subscribedUser);
    }

    public SubscribedUser getSubscribedUserById(Long id) {
        return subscribedUserRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Subscribed user not found with id: " + id));
    }


    public List<SubscribedUser> getAllSubscribedUsers() {
        return subscribedUserRepository.findAll();
    }
    
    public SubscribedUser updateSubscribedUser(Long id, SubscribedUserDTO subscribedUserDTO) {
        SubscribedUser subscribedUser = getSubscribedUserById(id);
        // Update subscribedUser fields as needed
        return subscribedUserRepository.save(subscribedUser);
    }

    public void deleteSubscribedUser(Long id) {
        SubscribedUser subscribedUser = getSubscribedUserById(id);
        subscribedUserRepository.delete(subscribedUser);
    }

    // Other methods for CRUD operations or additional business logic
}
