package com.carrental.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.carrental.dto.OrderDto;
import com.carrental.entity.Car;
import com.carrental.entity.Order;
import com.carrental.entity.User;
import com.carrental.service.IOrderService;

@RestController
@CrossOrigin
public class OrderController {

	@Autowired
	private IOrderService orderService;

	@PostMapping("/saveorder")
	public ResponseEntity<?> saveOrder(@RequestBody OrderDto orderDto) {
		Car car = new Car();
		User user = new User();
		car.setCarId(orderDto.getCarId());
		car.setCarName(orderDto.getCarName());
		car.setCarType(orderDto.getCarType());
		car.setNoOfSeats(orderDto.getNoOfSeats());
		car.setPricePerDay(orderDto.getCarPrice());
		user.setUserId(orderDto.getUserId());
		user.setName(orderDto.getUserName());
		user.setEmail(orderDto.getUserEmail());

		Order odr = new Order(car, user);
		odr.setFromDate(orderDto.getFromDate());
		odr.setToDate(orderDto.getToDate());

		orderService.saveOrder(odr);
		return new ResponseEntity<>(odr, HttpStatus.ACCEPTED);
	}

	// find order by id
	@GetMapping("/getorder/{id}")
	public ResponseEntity<?> findOrderById(@PathVariable int id) {
		Order order = orderService.findOrderById(id);
		return new ResponseEntity<>(order, HttpStatus.ACCEPTED);
	}
}
