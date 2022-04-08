package com.carrental.service;

import java.util.List;

import com.carrental.entity.Car;
import com.carrental.entity.User;

public interface IHostService {

	//Add new Car
	public Car addCar(Car car, String email);
	
	//Delete car by id
	public void deleteCarById();
	
	//Find car by car id
	public Car findCarById(int carId);

	//Update car details
	public Car updateCar(Car car);
	
	//Get all cars
	public List<Car> getAllCars();
	
	//Find all Cars by userid
	public List<Car> findAllCarsByUserid(Integer userId);
	
}
