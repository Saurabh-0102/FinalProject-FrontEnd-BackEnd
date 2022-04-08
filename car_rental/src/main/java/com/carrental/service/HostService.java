package com.carrental.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.carrental.Repository.IHostRepository;
import com.carrental.entity.Car;
import com.carrental.entity.User;

@Service
public class HostService implements IHostService {

	@Autowired
	IHostRepository hostRepo;
	
	public Car addCar(Car car,String email){
		User u = hostRepo.findByEmail(email);
		Car c = car;
		c.setUser(u);
		c.setCarName(car.getCarName());
		c.setCarType(car.getCarType());
		c.setNoOfSeats(car.getNoOfSeats());
		return hostRepo.save(c);
	}

	@Override
	public void deleteCarById() {
		
	}

	@Override
	public Car findCarById(int carId) {
		return	hostRepo.findCarById(carId);
	}

	@Override
	public Car updateCar(Car car) {
		return hostRepo.save(car);
	}
	
	@Override
	public List<Car> getAllCars(){
		return hostRepo.findAll();
	}
	
	@Override
	public List<Car> findAllCarsByUserid(Integer userId){
		return hostRepo.findAllCarsByUserId(userId);
		
	}
	
	
	
	
}
