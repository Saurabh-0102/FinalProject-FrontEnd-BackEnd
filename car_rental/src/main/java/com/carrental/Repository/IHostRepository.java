package com.carrental.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.carrental.entity.Car;
import com.carrental.entity.User;

@Repository
public interface IHostRepository extends JpaRepository<Car, Integer> {

	
	@Query("select u from User u where u.email= :em")
	public User findByEmail(@Param("em") String email);

	@Query("select c from Car c where c.carId = ?1")
	public Car findCarById(int carId);
	
	@Query("select c from Car c where c.user.userId = ?1")
	public List<Car> findAllCarsByUserId(Integer userId);
}
