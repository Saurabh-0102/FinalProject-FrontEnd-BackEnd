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
import org.springframework.web.bind.annotation.RestController;
import com.carrental.entity.User;
import com.carrental.service.IAdminService;

@RestController
@CrossOrigin
public class AdminController {

	@Autowired
	IAdminService adminService;

	// Get All Users
	@GetMapping("/admingetall")
	public List<User> getAllUser() {
		return adminService.getAllUser();
	}

	
	@PostMapping("/editUser")
	public void editUser(@RequestBody User user) {
		try {
			adminService.editUserByStatus(user);
		} catch (Exception e) {
			System.out.println("kkkkkkkkkkkkkkkkkkkkk");
			System.out.println(e.getMessage());
			System.out.println("kkkkkkkkkkkkkkkkkkkkk");
		}
	}
	
	@PostMapping("/findbyemail")
	public User findByEmail(@RequestBody User user) {
		return adminService.findbyMail(user.getEmail());
	
	}

}
