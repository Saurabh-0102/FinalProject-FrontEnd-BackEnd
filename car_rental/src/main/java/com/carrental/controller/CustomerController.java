package com.carrental.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.carrental.customexception.CustomeException;
import com.carrental.dto.LoginDTO;
import com.carrental.dto.LoginResponse;
import com.carrental.entity.User;
import com.carrental.service.EmailService;
import com.carrental.service.ICustomerService;
import com.carrental.service.OtpGenerator;

@RestController
@CrossOrigin
public class CustomerController {

	@Autowired
	ICustomerService customerService;

	@Autowired
	EmailService emailService;

	@Autowired
	OtpGenerator otpGenerator;

	// UserLogin
	@PostMapping("/login")
	public ResponseEntity<?> userLogin(@RequestBody LoginDTO user) throws CustomeException {
		try {
			User u = customerService.userLogin(user.getEmail(), user.getPassword());
			System.out.println(u.getRole());
			if (u.getRole().equals("host") && u.getStatus().equals("Active")) {
				LoginResponse lr = new LoginResponse(u);
				return new ResponseEntity<>(lr, HttpStatus.ACCEPTED);
			} else if (u.getRole().equals("user") && u.getStatus().equals("Active")) {
				LoginResponse lr = new LoginResponse(u);
				return new ResponseEntity<>(lr, HttpStatus.ACCEPTED);
			} else if (u.getRole().equals("admin") && u.getStatus().equals("Active")) {
				LoginResponse lr = new LoginResponse(u);
				return new ResponseEntity<>(lr, HttpStatus.ACCEPTED);
			} else
				return new ResponseEntity<>("Invalid Login", HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>("User Not Found", HttpStatus.OK);
		}
	}

	// AddNewUser with registration email
	@PostMapping("/addUser")
	public ResponseEntity<?> addUser(@RequestBody User user) {
		customerService.addUser(user);
		emailService.registrationConfirmation(user.getEmail());
		return new ResponseEntity<>("User Added Successfully", HttpStatus.ACCEPTED);
	}

	// Get User by id
	@PostMapping("/getuserbyid")
	public ResponseEntity<?> getUserById(@RequestParam int id) {
		User user = customerService.getUserById(id);
		if (user != null) {
			return new ResponseEntity<>(user, HttpStatus.ACCEPTED);
		} else
			return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
	}

	// update user by id
	@PutMapping("/updateuserbyid/{id}")
	public ResponseEntity<?> updateUserById(@RequestBody User user, @PathVariable int id) {
		User u = customerService.updateUserById(user, id);
		return new ResponseEntity<>(u, HttpStatus.OK);
	}

	// Otp Generator
	@PostMapping("otpgenerator/{email}")
	public ResponseEntity<?> sendOtp(@PathVariable String email) {
		String otp = otpGenerator.generateOTP();
		emailService.sendOtp(email, otp);
		return new ResponseEntity<>("OTP Sent Successfully", HttpStatus.ACCEPTED);
	}

	// Confirm Otp
	@PostMapping("/otpverify/{otp}")
	public ResponseEntity<?> verifyOtp(@PathVariable String otp) {
		boolean res = otpGenerator.verifyOtp(otp);
		if (res)
			return new ResponseEntity<>("OTP verified", HttpStatus.ACCEPTED);
		else
			return new ResponseEntity<>("OTP Invalid Please Try Again", HttpStatus.ACCEPTED);
	}

	// GetAllUser
	@GetMapping("/getalluser")
	public List<User> getAllUser() {
		return customerService.getUser();
	}
	
	//get user by email
	@GetMapping("/getuserbyemail/{email}")
	public ResponseEntity<?> getUesrByEmail(@PathVariable String email){
		User user = customerService.getUserByEmail(email);
		return new ResponseEntity<>(user,HttpStatus.ACCEPTED);
	}
	
	
	//update user for password recover
	@PostMapping("/updateuser")
	public ResponseEntity<?> updateUser(@RequestBody User user){
		customerService.updateUser(user);
		return new ResponseEntity<>("Password Updated" , HttpStatus.OK);
	}
}
