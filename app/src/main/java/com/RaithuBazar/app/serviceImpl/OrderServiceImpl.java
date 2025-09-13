package com.RaithuBazar.app.serviceImpl;

import com.RaithuBazar.app.enitity.Order;
import com.RaithuBazar.app.repository.OrderRepository;
import com.RaithuBazar.app.service.OrderService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;

    public OrderServiceImpl(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @Override
    public Page<Order> getOrdersByUserId(Long userId, Pageable pageable) {
        // Fetch orders both as buyer and seller
        Page<Order> buyerOrders = orderRepository.findByBuyerId(userId, pageable);
        Page<Order> sellerOrders = orderRepository.findBySellerId(userId, pageable);

        // For now, just return buyer orders (you can merge if needed)
        return buyerOrders;
    }

    @Override
    public Order getOrderById(Long id) {
        return orderRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Order not found with id: " + id));
    }

    @Override
    public Order placeOrder(Order order) {
        order.setStatus("PENDING"); // default status
        return orderRepository.save(order);
    }

    @Override
    public void cancelOrder(Long orderId) {
        Order order = getOrderById(orderId);
        order.setStatus("CANCELED");
        orderRepository.save(order);
    }
}
