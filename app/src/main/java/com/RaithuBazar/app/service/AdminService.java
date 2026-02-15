package com.RaithuBazar.app.service;

import com.RaithuBazar.app.enitity.Order;
import com.RaithuBazar.app.enitity.Product;
import com.RaithuBazar.app.enitity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public interface AdminService {
    Page<Order> getAllOrders(Pageable pageable);
    Page<User> getAllUsers(Pageable pageable);
    Page<Product> getAllProducts(Pageable pageable);
    void deleteUser(Long UserId);
    void deleteOrder(Long Order);
    void deleteProduct(Long productId);

}
