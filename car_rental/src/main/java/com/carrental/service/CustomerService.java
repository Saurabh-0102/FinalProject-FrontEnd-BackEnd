package com.carrental.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.carrental.Repository.ICustomerRepository;
import com.carrental.customexception.CustomeException;
import com.carrental.entity.User;

@Service
public class CustomerService implements ICustomerService {

	@Autowired
	ICustomerRepository customerRepo;
	
	//Login Service
	public User userLogin(String name,String password) {
		return customerRepo.UserLogin(name, password);
	}
	
	//Add User
	public void addUser(User u) {
		customerRepo.save(u);
	}
	
	//Get All Users
	public List<User> getUser(){
		return customerRepo.findAll();
	}
	
	//Get user by Id
	public User getUserById(int id) {
		Optional<User> user = customerRepo.findById(id);
		if(user.isPresent()) {
			return user.get();
		}
		else throw new CustomeException("User not found");
	}
	
	//update User by id
	public User updateUserById(User user, int id) {
		User us = customerRepo.findById(id).orElseThrow( () -> new CustomeException("user not found"));
		us.setName(user.getName());
		us.setGovId(user.getGovId());
		us.setPassword(user.getPassword());
		us.setCity(user.getCity());
		customerRepo.save(us);
		return us;
	}	
	
	
	public User getUserByEmail(String email) {
		return customerRepo.getUserByEmail(email);
	}
	
	public void updateUser(User user) {
		customerRepo.save(user);
	}
}
