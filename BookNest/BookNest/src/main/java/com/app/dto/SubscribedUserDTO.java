package com.app.dto;

import java.time.LocalDate;

public class SubscribedUserDTO {
    private LocalDate registrationDate;
  //  private LocalDate expiryDate;
    private Long visitedUserId; // Linked VisitedUser ID
  //  private Long[] ebookIds; // Array of IDs of the subscribed user's ebooks
    private Long planId;
	public SubscribedUserDTO(LocalDate registrationDate, Long visitedUserId, 
			Long planId) {
		super();
		this.registrationDate = registrationDate;
		//this.expiryDate = expiryDate;
		this.visitedUserId = visitedUserId;
	//	this.ebookIds = ebookIds;
		this.planId = planId;
	}
	public SubscribedUserDTO() {
		super();
	}
	public LocalDate getRegistrationDate() {
		return registrationDate;
	}
	public void setRegistrationDate(LocalDate registrationDate) {
		this.registrationDate = registrationDate;
	}

	public Long getVisitedUserId() {
		return visitedUserId;
	}
	public void setVisitedUserId(Long visitedUserId) {
		this.visitedUserId = visitedUserId;
	}
	
	public Long getPlanId() {
		return planId;
	}
	public void setPlanId(Long planId) {
		this.planId = planId;
	}

    // Constructors, getters, and setters
    
}
