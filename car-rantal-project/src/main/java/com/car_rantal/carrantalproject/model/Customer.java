package com.car_rantal.carrantalproject.model;

import javax.persistence.*;

@Entity
@Table(name="Customers")
public class Customer {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int customerId;

	@Column(length = 30, unique = false, nullable = false )
	private String name;
	
	@Column(length = 50, unique = true, nullable = false)
	private String email;
	
	@Column(length= 20, unique = false, nullable = false)
	private String password;
	
	@Column(length = 15 , unique = true , nullable = false)
	private String mobileNumber;
	
	@Column(length = 15 , unique = false , nullable = false)
	private String city;
	
	public int getCustomerId() {
		return customerId;
	}

	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}		
}
