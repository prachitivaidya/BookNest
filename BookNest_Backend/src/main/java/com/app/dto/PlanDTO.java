package com.app.dto;

public class PlanDTO {
    private String name;
    private int numberOfMonths;
    private double price;
  //  private int subscribedUserCount;
    
	
	public PlanDTO(String name, int numberOfMonths, double price) {
		super();
		this.name = name;
		this.numberOfMonths = numberOfMonths;
		this.price = price;
		//this.subscribedUserCount = subscribedUserCount;
	}
	
	/*public int getSubscribedUserCount() {
		return subscribedUserCount;
	}

	public void setSubscribedUserCount(int subscribedUserCount) {
		this.subscribedUserCount = subscribedUserCount;
	}*/

	public PlanDTO() {
		super();
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

    // Constructors, getters, and setters
}

