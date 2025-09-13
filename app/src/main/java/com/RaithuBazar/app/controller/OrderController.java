package com.RaithuBazar.app.controller;

import com.RaithuBazar.app.enitity.Order;
import com.RaithuBazar.app.service.OrderService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    // Get orders by userId (both buyer & seller)
    @GetMapping("/user/{userId}")
    public Page<Order> getOrdersByUserId(@PathVariable Long userId, Pageable pageable) {
        return orderService.getOrdersByUserId(userId, pageable);
    }

    // Get single order by Id
    @GetMapping("/{id}")
    public Order getOrderById(@PathVariable Long id) {
        return orderService.getOrderById(id);
    }

    // Place a new order
    @PostMapping("/place-order")
    public Order placeOrder(@RequestBody Order order) {
        return orderService.placeOrder(order);
    }

    // Cancel an order
    @PutMapping("/{id}/cancel")
    public String cancelOrder(@PathVariable Long id) {
        orderService.cancelOrder(id);
        return "Order with ID " + id + " has been canceled.";
    }
}
