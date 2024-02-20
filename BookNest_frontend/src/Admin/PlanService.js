import axios from "axios";

const USER_REST_API_URL = 'http://localhost:8080/api/plans';

class PlanService {
    // Get all plans
    getPlans() {
        return axios.get(USER_REST_API_URL);
    }

    // Add a new plan
    addPlan(planData) {
        return axios.post(USER_REST_API_URL, planData);
    }

    // Delete a plan by ID
    deletePlan(planId) {
        return axios.delete(`${USER_REST_API_URL}/${planId}`);
    }

    // Update a plan by ID
    updatePlan(planId, planData) {
        return axios.put(`${USER_REST_API_URL}/${planId}`, planData);
    }

    


}

export default new PlanService();
