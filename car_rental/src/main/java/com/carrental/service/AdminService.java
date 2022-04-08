package com.carrental.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.carrental.Repository.IAdminRepository;
import com.carrental.customexception.CustomeException;
import com.carrental.entity.User;

@Service
public class AdminService implements IAdminService {

	@Autowired
	IAdminRepository adminRepo;

	public List<User> getAllUser() {
		return adminRepo.findAll();
	}

	@Override
	public User disableUser(User user, int id) {
		User us = adminRepo.findById(id).orElseThrow(() -> new CustomeException("User not found"));
		us.setStatus(user.getStatus());
		adminRepo.save(us);
		return us;
	}

	@Override
	public User enableUser(User user, int id) {
		User us = adminRepo.findById(id).orElseThrow(() -> new CustomeException("User not found"));
		us.setStatus(user.getStatus());
		adminRepo.save(us);
		return us;
	}

	@Override
	public User findbyMail(String email) {
		return adminRepo.findbyEmail(email);
	}

	@Override
	public void editUserByStatus(User user) {
		adminRepo.editByEmail(user.getStatus(), user.getEmail());

	}

}
