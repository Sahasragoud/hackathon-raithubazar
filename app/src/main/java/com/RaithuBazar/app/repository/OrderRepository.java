package com.RaithuBazar.app.repository;

import com.RaithuBazar.app.enitity.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

    // Find orders placed by a buyer
    Page<Order> findByBuyerId(Long buyerId, Pageable pageable);

    // Find orders received by a seller
    Page<Order> findBySellerId(Long sellerId, Pageable pageable);
}
