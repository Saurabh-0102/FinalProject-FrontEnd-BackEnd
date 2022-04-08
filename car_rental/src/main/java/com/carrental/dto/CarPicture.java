package com.carrental.dto;

import org.springframework.web.multipart.MultipartFile;

public class CarPicture {

	private MultipartFile carPicture;
	
	public MultipartFile getCarPicture() {
		return carPicture;
	}
	public void setCarPicture(MultipartFile carPicture) {
		this.carPicture = carPicture;
	}
	
	
}
