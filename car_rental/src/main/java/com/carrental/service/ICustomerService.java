package com.carrental.service;

import java.util.List;

import com.carrental.entity.User;

public interface ICustomerService {

	
	//user Login
	public User userLogin(String name,String password);
	
	//Add New User
	public void addUser(User u);
	
	//Get All User
	public List<User> getUser();
	
	//get User by Id
	public User getUserById(int id);
	
	//update user by id
	public User updateUserById(User user, int id);
	
	//get User by email
	public User getUserByEmail(String email);
	
	
	public void updateUser(User user);
	
}
