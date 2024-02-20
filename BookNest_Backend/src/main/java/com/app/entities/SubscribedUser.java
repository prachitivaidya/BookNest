package com.app.entities;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import java.time.LocalDate;
import java.util.Set;

@Entity
public class SubscribedUser {
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long userId;

	    private LocalDate registrationDate;
	    private LocalDate expiryDate;

	    @OneToOne
	    private VisitedUser visitedUser;

    @ManyToMany(mappedBy = "subscribedUsers",fetch = FetchType.EAGER)
    private Set<Ebook> ebooks;
    
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "plan_id")
    private Plan plan;

	public SubscribedUser() {
		super();
	}

	public SubscribedUser(Long userId, LocalDate registrationDate, LocalDate expiryDate, VisitedUser visitedUser,
			Set<Ebook> ebooks, Plan plan) {
		super();
		this.userId = userId;
		this.registrationDate = registrationDate;
		this.expiryDate = expiryDate;
		this.visitedUser = visitedUser;
		this.ebooks = ebooks;
		this.plan = plan;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public LocalDate getRegistrationDate() {
		return registrationDate;
	}

	public void setRegistrationDate(LocalDate registrationDate) {
		this.registrationDate = registrationDate;
	}

	public LocalDate getExpiryDate() {
		return expiryDate;
	}

	public void setExpiryDate(LocalDate expiryDate) {
		this.expiryDate = expiryDate;
	}

	public VisitedUser getVisitedUser() {
		return visitedUser;
	}

	public void setVisitedUser(VisitedUser visitedUser) {
		this.visitedUser = visitedUser;
	}

	public Set<Ebook> getEbooks() {
		return ebooks;
	}

	public void setEbooks(Set<Ebook> ebooks) {
		this.ebooks = ebooks;
	}

	public Plan getPlan() {
		return plan;
	}

	public void setPlan(Plan plan) {
		this.plan = plan;
	}

	
}
