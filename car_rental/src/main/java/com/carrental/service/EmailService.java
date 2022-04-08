package com.carrental.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

	@Autowired
	JavaMailSender mailSender;
	
	public void registrationConfirmation(String email) {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setTo(email);
		message.setSubject("Account Registration");
		message.setText("Thank you for registration");
		mailSender.send(message);
	}
	
	public void sendOtp(String email,String otp) {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setTo(email);
		message.setSubject("OTP");
		message.setText(otp);
		mailSender.send(message);
	}
	
	
}
