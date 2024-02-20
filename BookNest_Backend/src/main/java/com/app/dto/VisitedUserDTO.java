package com.app.dto;


public class VisitedUserDTO {
    private String email;
    private String password;
    private String name;
    private String gender;
    
	public VisitedUserDTO(String email, String password, String name, String gender) {
		super();
		this.email = email;
		this.password = password;
		this.name = name;
		this.gender = gender;
	}
	
	
	public VisitedUserDTO() {
		super();
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}

    // Constructors, getters, and setters
    
}
