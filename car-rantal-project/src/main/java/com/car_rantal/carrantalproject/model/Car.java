package com.car_rantal.carrantalproject.model;

import javax.persistence.*;

@Entity
@Table(name = "tbl_car")
public class Car{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	private int carId;
	
	@Column(length = 30, unique = false, nullable = false )
	private String carName;
	
	@Column(length = 30, unique = false, nullable = false )
	private String type;
	
	@Column(nullable = false)
	private int noOfSeats;
	
	@Column(length = 30, unique = false, nullable = false )
	private String fuleType;

	public int getCarId() {
		return carId;
	}

	public void setCarId(int carId) {
		this.carId = carId;
	}

	public String getCarName() {
		return carName;
	}

	public void setCarName(String carName) {
		this.carName = carName;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public int getNoOfSeats() {
		return noOfSeats;
	}

	public void setNoOfSeats(int noOfSeats) {
		this.noOfSeats = noOfSeats;
	}

	public String getFuleType() {
		return fuleType;
	}

	public void setFuleType(String fuleType) {
		this.fuleType = fuleType;
	}
	
	
	
	
	
	
}
