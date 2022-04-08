package com.carrental.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.carrental.entity.User;

@Repository
public interface ICustomerRepository extends JpaRepository<User, Integer> {

	@Query("select u from User u where u.email = ?1 and u.password = ?2")
	User UserLogin(String name,String password);

	@Query("select u from User u where u.email = ?1")
	public User getUserByEmail(String email);
	
}
