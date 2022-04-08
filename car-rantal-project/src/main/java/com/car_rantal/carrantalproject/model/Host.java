package com.car_rantal.carrantalproject.model;

import javax.persistence.*;

@Entity
@Table(name = "tbl_provider")
public class Host {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int hostId;

	@Column(length = 30, unique = false, nullable = false )
	private String name;
	
	@Column(length = 50, unique = true, nullable = false)
	private String email;
	
	@Column(length= 20, unique = false, nullable = false)
	private String password;
	
	@Column(length = 15 , unique = true , nullable = false)
	private String mobileNumber;
	
	@Column(length = 15 , unique = false , nullable = false)
	private String address;
	
	@Column(length=30,unique = true , nullable = false)
	private String idProof;
	
	@Column(length = 30 , unique = false , nullable = false)
	private String role;


	public int getHostId() {
		return hostId;
	}

	public void setHostId(int hostId) {
		this.hostId = hostId;
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

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getIdProof() {
		return idProof;
	}

	public void setIdProof(String idProof) {
		this.idProof = idProof;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
	
	
}
