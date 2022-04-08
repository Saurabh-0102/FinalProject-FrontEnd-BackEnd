package com.carrental.entity;

import java.time.Clock;
import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.*;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.zaxxer.hikari.util.ClockSource;

@Entity
@Table(name = "tbl_receipt")
public class Order {

	public Order() {};
	
	public Order(Car car, User user) {
		this.car = car;
		this.user = user;
		this.time = time.now();
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int orderId;
	
	@JsonIgnore
	@OneToOne
	@JoinColumn(name = "carData")
	private Car car;
	
	@JsonIgnore
	@OneToOne
	@JoinColumn(name = "userData")
	private User user;
		

	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate fromDate;
	

	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate toDate;
	
	
	@DateTimeFormat
	private LocalTime time;
	

	public int getOrderId() {
		return orderId;
	}


	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}

	public Car getCar() {
		return car;
	}

	public void setCar(Car car) {
		this.car = car;
	}
	


	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
	}


	public LocalDate getFromDate() {
		return fromDate;
	}


	public void setFromDate(LocalDate fromDate) {
		this.fromDate = fromDate;
	}


	public LocalDate getToDate() {
		return toDate;
	}


	public void setToDate(LocalDate toDate) {
		this.toDate = toDate;
	}


	public LocalTime getTime() {
		return time;
	}


	public void setTime(LocalTime time) {
		this.time = time;
	}	
}
