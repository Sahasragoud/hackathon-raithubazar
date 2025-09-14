package com.RaithuBazar.app.service;

import com.RaithuBazar.app.dto.OrderResponse;
import com.RaithuBazar.app.dto.OrderRequest;
import com.RaithuBazar.app.enitity.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public interface OrderService {
    Page<Order> getOrdersByUserId(Long userId, Pageable pageable);
    Order getOrderById(Long id);
    OrderResponse placeOrder(OrderRequest order);
    void cancelOrder(Long orderId);
}
