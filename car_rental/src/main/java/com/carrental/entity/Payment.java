package com.carrental.entity;

import java.time.LocalDate;

import javax.persistence.*;

@Entity
@Table(name = "tbl_payment")
public class Payment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int paymentId;
	
	private LocalDate date;
		
	private int amount;	
	
	
	public int getPaymentId() {
		return paymentId;
	}

	public void setPaymentId(int paymentId) {
		this.paymentId = paymentId;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public int getAmount() {
		return amount;
	}


	public void setAmount(int amount) {
		this.amount = amount;
	}
	
	
	/*
	 * https://marketplace.eclipse.org/content/uml-lab-modeling-ide
	 */	
}
