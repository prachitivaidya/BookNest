// PlanController.java

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

import com.app.dto.PlanDTO;
import com.app.entities.Plan;
import com.app.service.PlanService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/plans")
public class PlanController {
    @Autowired
    private PlanService planService;

    @PostMapping
    public ResponseEntity<Plan> createPlan(@RequestBody PlanDTO planDTO) {
        Plan plan = planService.createPlan(planDTO);
        return ResponseEntity.ok(plan);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Plan> getPlanById(@PathVariable Long id) {
        Plan plan = planService.getPlanById(id);
        return ResponseEntity.ok(plan);
    }
    
    @GetMapping
    public ResponseEntity<List<Plan>> getAllPlans() {
        List<Plan> plans = planService.getAllPlans();
        return ResponseEntity.ok(plans);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Plan> updatePlan(@PathVariable Long id, @RequestBody PlanDTO planDTO) {
        Plan updatedPlan = planService.updatePlan(id, planDTO);
        return ResponseEntity.ok(updatedPlan);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletePlan(@PathVariable Long id) {
        planService.deletePlan(id);
        return ResponseEntity.ok().build();
    }
}
