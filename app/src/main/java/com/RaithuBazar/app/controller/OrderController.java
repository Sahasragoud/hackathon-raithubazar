package com.RaithuBazar.app.controller;

import com.RaithuBazar.app.dto.OrderRequest;
import com.RaithuBazar.app.dto.OrderResponse;
import com.RaithuBazar.app.enitity.Order;
import com.RaithuBazar.app.service.OrderService;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

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
    public ResponseEntity<OrderResponse> placeOrder(@Valid @RequestBody OrderRequest orderRequest) {
        OrderResponse placedOrder = orderService.placeOrder(orderRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(placedOrder);
    }


    // Cancel an order
    @PutMapping("/{id}/cancel")
    public ResponseEntity<Map<String, String>> cancelOrder(@PathVariable Long id) {
        orderService.cancelOrder(id);
        return ResponseEntity.ok(Map.of("message", "Order with ID " + id + " has been canceled."));
    }

}
