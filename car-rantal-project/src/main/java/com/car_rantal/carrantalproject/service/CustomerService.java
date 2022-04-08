package com.car_rantal.carrantalproject.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.car_rantal.carrantalproject.model.Customer;
import com.car_rantal.carrantalproject.repository.CustomerRepo;

@Service
public class CustomerService {

	@Autowired
	public CustomerRepo obj;
	
	@Transactional
	public void add(Customer c) {
		obj.save(c);
	}

	
}
