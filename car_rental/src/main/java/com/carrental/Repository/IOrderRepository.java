package com.carrental.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.carrental.entity.Order;

@Repository
public interface IOrderRepository extends JpaRepository<Order, Integer> {

}
