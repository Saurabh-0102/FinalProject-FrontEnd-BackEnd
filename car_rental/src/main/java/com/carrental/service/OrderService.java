package com.carrental.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.carrental.Repository.IOrderRepository;
import com.carrental.customexception.CustomeException;
import com.carrental.entity.Order;

	

@Service
public class OrderService implements IOrderService {

	@Autowired
	private IOrderRepository orderRepo;
	
	public Order saveOrder(Order order) {
		return orderRepo.save(order);
	}
	
	public Order findOrderById(Integer id) {
		Order order = orderRepo.findById(id).orElseThrow(() -> new CustomeException("order not found"));
		return order;
	}
	

}
