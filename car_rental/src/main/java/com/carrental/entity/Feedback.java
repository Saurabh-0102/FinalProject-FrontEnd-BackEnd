package com.carrental.entity;

import javax.persistence.*;

@Entity
@Table(name="tbl_feedback")
public class Feedback {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int feedbackId;
	
	@Column(length = 25, nullable = false)
	private String name;
	
	@Column(length = 30, nullable = false)
	private String email;
	
	@Column(length = 15 , nullable = false)
	private String city;
	
	@Column(length = 250, nullable = false)
	private String feedback;

	public int getFeedbackId() {
		return feedbackId;
	}

	public void setFeedbackId(int feedbackId) {
		this.feedbackId = feedbackId;
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

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getFeedback() {
		return feedback;
	}

	public void setFeedback(String feedback) {
		this.feedback = feedback;
	}
	
	
}
