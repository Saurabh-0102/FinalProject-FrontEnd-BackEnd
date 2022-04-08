package com.carrental.Repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.carrental.entity.User;

@Repository
public interface IAdminRepository extends JpaRepository<User, Integer> {

	@Query("select c from User c where c.email= ?1 ")
	public User findbyEmail(String email);

	@Transactional
	@Modifying
	@Query("update User u set u.status=?1 where u.email =?2")
	public void editByEmail(String status, String email);

}
