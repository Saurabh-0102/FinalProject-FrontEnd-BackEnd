package com.car_rantal.carrantalproject.model;

import javax.persistence.*;


@Entity
@Table(name = "tbl_Admin")
public class Admin {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int adminId;

	@Column(length = 30, unique = false, nullable = false )
	private String name;
	
	@Column(length = 50, unique = true, nullable = false)
	private String email;
	
	@Column(length= 20, unique = false, nullable = false)
	private String password;

	@Column(length= 20, unique = false, nullable = false)
	private String role;
	
	public int getAdminId() {
		return adminId;
	}

	public void setAdminId(int adminId) {
		this.adminId = adminId;
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

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	
	
	
}
