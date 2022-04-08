package com.carrental.controller;

import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.carrental.dto.CarPicture;
import com.carrental.dto.PicUploadStatus;
import com.carrental.entity.Car;
import com.carrental.service.IHostService;

@RestController
@CrossOrigin
public class HostController {

	@Autowired
	IHostService hostService;

	// AddNewCar
	@PostMapping("/addNewCar/{email}")
	public ResponseEntity<?> listNewCar(@RequestBody Car car, @PathVariable String email) {
		Car c = hostService.addCar(car, email);
		return new ResponseEntity<>(c, HttpStatus.ACCEPTED);
	}

	// Add Car Picture
	@PostMapping("hostcarpicupload/{carId}")
	public PicUploadStatus picUpload(@RequestParam("file") MultipartFile carPicture , @PathVariable int carId ) {

		String uploadedPicName = carPicture.getOriginalFilename();
		String fileName = carId + "-" + uploadedPicName;
		String fileName2 = "/images/"+fileName;

		try {
			FileCopyUtils.copy(carPicture.getInputStream(),
					new FileOutputStream("D:\\Final_Project\\car-rental-frontend\\public\\Images\\" + fileName));
		} catch (IOException e) {

		}

		Car car = hostService.findCarById(carId);
		car.setCarPicture(fileName2);
		hostService.updateCar(car);
		return new PicUploadStatus(true, "Car Pic Uploaded");
	}
	
	
	//Read CarPicture
		
	

	// find car by id
	@GetMapping("/hostfindcarbyid/{carId}")
	public ResponseEntity<?> findCarById(@PathVariable int carId) {
		Car car = hostService.findCarById(carId);
		return new ResponseEntity<>(car, HttpStatus.OK);
	}

	// get all cars (admin specific)
	@GetMapping("hostgetallcars")
	public List<Car> getAllCars() {
		return hostService.getAllCars();
	}

	// get all cars by user id
	@GetMapping("hostgetallcarsbyuserid/{userId}")
	public ResponseEntity<?> findAllCarsByUserId(@PathVariable Integer userId) {
		List<Car> cars = hostService.findAllCarsByUserid(userId);
		return new ResponseEntity<>(cars, HttpStatus.ACCEPTED);
	}

	// update car by admin
	@PostMapping("/adminupdatecar")
	public ResponseEntity<?> updateCarByAdmin(@RequestBody Car car) {
		 hostService.updateCar(car);
		 return new ResponseEntity<>("Car updated" , HttpStatus.ACCEPTED);
	}

}
