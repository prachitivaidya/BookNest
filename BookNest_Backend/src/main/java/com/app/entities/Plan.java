package com.app.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Plan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pid;
    private String name;
    private int numberOfMonths;
    private double price;
    private int subscribedUserCount;

    // Constructor
    public Plan() {}

   

	public Plan(Long pid, String name, int numberOfMonths, double price, int subscribedUserCount) {
		super();
		this.pid = pid;
		this.name = name;
		this.numberOfMonths = numberOfMonths;
		this.price = price;
		this.subscribedUserCount = subscribedUserCount;
	}

 

	public int getSubscribedUserCount() {
		return subscribedUserCount;
	}



	public void setSubscribedUserCount(int subscribedUserCount) {
		this.subscribedUserCount = subscribedUserCount;
	}



	public Long getPid() {
		return pid;
	}

	public void setPid(Long pid) {
		this.pid = pid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getNumberOfMonths() {
		return numberOfMonths;
	}

	public void setNumberOfMonths(int numberOfMonths) {
		this.numberOfMonths = numberOfMonths;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}


    // Getters and setters
}
