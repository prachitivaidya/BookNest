// PlanService.java

package com.app.service;

import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.PlanDTO;
import com.app.entities.Plan;
import com.app.repository.PlanRepository;

@Service
public class PlanService {
    @Autowired
    private PlanRepository planRepository;

    public Plan createPlan(PlanDTO planDTO) {
        Plan plan = new Plan();
        plan.setName(planDTO.getName());
        plan.setNumberOfMonths(planDTO.getNumberOfMonths());
        plan.setPrice(planDTO.getPrice());
        plan.setSubscribedUserCount(0); // Initially, user count is set to 0
        return planRepository.save(plan);
    }

    public Plan getPlanById(Long id) {
        return planRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Plan not found with id: " + id));
    }
    
    public List<Plan> getAllPlans() {
        return planRepository.findAll();
    }

    public Plan updatePlan(Long id, PlanDTO planDTO) {
        Plan plan = getPlanById(id);
        plan.setName(planDTO.getName());
        plan.setNumberOfMonths(planDTO.getNumberOfMonths());
        plan.setPrice(planDTO.getPrice());
        return planRepository.save(plan);
    }

    public void deletePlan(Long id) {
        Plan plan = getPlanById(id);
        planRepository.delete(plan);
    }
}
