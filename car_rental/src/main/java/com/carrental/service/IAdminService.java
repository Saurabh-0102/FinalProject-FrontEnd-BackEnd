package com.carrental.service;

import java.util.List;

import com.carrental.entity.User;

public interface IAdminService {

	public List<User> getAllUser();
	
	public User disableUser(User user,int id);
	
	public User enableUser(User user, int id);
	
	public User findbyMail(String email);

	public void editUserByStatus(User user);
}
