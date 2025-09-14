package com.RaithuBazar.app.serviceImpl;

import com.RaithuBazar.app.dto.OrderResponse;
import com.RaithuBazar.app.dto.OrderRequest;
import com.RaithuBazar.app.enitity.Order;
import com.RaithuBazar.app.enitity.Product;
import com.RaithuBazar.app.enitity.User;
import com.RaithuBazar.app.repository.OrderRepository;
import com.RaithuBazar.app.repository.ProductRepository;
import com.RaithuBazar.app.repository.UserRepository;
import com.RaithuBazar.app.service.OrderService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;
    private final ProductRepository productRepository;
    private final UserRepository userRepository;


    public OrderServiceImpl(OrderRepository orderRepository, ProductRepository productRepository, UserRepository userRepository) {
        this.orderRepository = orderRepository;
        this.productRepository = productRepository;
        this.userRepository = userRepository;
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
    public OrderResponse placeOrder(OrderRequest orderRequest) {
        Product product = productRepository.findById(orderRequest.getProductId())
                .orElseThrow(() -> new RuntimeException("Product not found"));

        User buyer = userRepository.findById(orderRequest.getBuyerId())
                .orElseThrow(() -> new RuntimeException("Buyer not found"));

        Order order = Order.builder()
                .product(product)
                .buyer(buyer)
                .seller(product.getSeller())
                .quantity(orderRequest.getQuantity())
                .status("PENDING")
                .orderDate(LocalDateTime.now())
                .totalPrice(product.getPrice() * orderRequest.getQuantity())
                .build();

        orderRepository.save(order);

        return new OrderResponse(order.getId(), order.getProduct().getName(), order.getBuyer().getUsername(), order.getSeller().getUsername(),order.getQuantity(), order.getStatus(), order.getBuyer().getAddress());
    }


    @Override
    public void cancelOrder(Long orderId) {
        Order order = getOrderById(orderId);
        order.setStatus("CANCELED");
        orderRepository.save(order);
    }
}
