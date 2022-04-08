package com.car_rantal.carrantalproject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.car_rantal.carrantalproject.model.Customer;
import com.car_rantal.carrantalproject.service.CustomerService;

@RestController
public class CustomerController {

	@Autowired
	public CustomerService cs;
	
	@PostMapping("/add")
	public String addCustomer(@RequestBody Customer c) {
		cs.add(c);	
		return "Customer added";	
	}
	
	@GetMapping("/sayHello")
	public String sayhello() {
		return "Hello from spring boot";
	}
}
