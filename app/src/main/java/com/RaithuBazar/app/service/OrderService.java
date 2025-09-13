package com.RaithuBazar.app.service;

import com.RaithuBazar.app.enitity.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface OrderService {
    Page<Order> getOrdersByUserId(Long userId, Pageable pageable);
    Order getOrderById(Long id);
    Order placeOrder(Order order);
    void cancelOrder(Long orderId);
}
