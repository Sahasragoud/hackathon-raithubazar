package com.RaithuBazar.app.serviceImpl;

import com.RaithuBazar.app.enitity.Order;
import com.RaithuBazar.app.enitity.Product;
import com.RaithuBazar.app.enitity.User;
import com.RaithuBazar.app.repository.OrderRepository;
import com.RaithuBazar.app.repository.ProductRepository;
import com.RaithuBazar.app.repository.UserRepository;
import com.RaithuBazar.app.service.AdminService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class AdminServiceImpl implements AdminService {

    private final OrderRepository orderRepository;
    private final UserRepository userRepository;
    private final ProductRepository productRepository;

    public AdminServiceImpl(OrderRepository orderRepository, UserRepository userRepository, ProductRepository productRepository) {
        this.orderRepository = orderRepository;
        this.userRepository = userRepository;
        this.productRepository = productRepository;
    }

    @Override
    public Page<Order> getAllOrders(Pageable pageable) {
        return orderRepository.findAll(pageable);
    }

    @Override
    public Page<User> getAllUsers(Pageable pageable) {
        return userRepository.findAll(pageable);
    }

    @Override
    public Page<Product> getAllProducts(Pageable pageable) {
        return productRepository.findAll(pageable);
    }

    @Override
    public void deleteUser(Long userId) {
        if (!userRepository.existsById(userId)) {
            throw new RuntimeException("User not found with id: " + userId);
        }
        userRepository.deleteById(userId);
    }

    @Override
    public void deleteOrder(Long orderId) {
        if (!orderRepository.existsById(orderId)) {
            throw new RuntimeException("Order not found with id: " + orderId);
        }
        orderRepository.deleteById(orderId);
    }

    @Override
    public void deleteProduct(Long productId) {
        if(!productRepository.existsById(productId)){
            throw new RuntimeException("Product not found with id: " + productId);
        }

        productRepository.deleteById(productId);
    }
}
