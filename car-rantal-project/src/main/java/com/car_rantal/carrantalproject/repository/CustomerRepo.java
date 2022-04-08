package com.car_rantal.carrantalproject.repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;

import com.car_rantal.carrantalproject.model.Customer;

@Repository
public class CustomerRepo {

	
		@PersistenceContext
	 	public EntityManager em;
	
		
		public void save(Customer c) {
			em.merge(c);
		}
}
