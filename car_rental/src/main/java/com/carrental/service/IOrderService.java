package com.carrental.service;

import com.carrental.entity.Order;

public interface IOrderService {

	//save order
	public Order saveOrder(Order order);
	
	public Order findOrderById(Integer id);
}
