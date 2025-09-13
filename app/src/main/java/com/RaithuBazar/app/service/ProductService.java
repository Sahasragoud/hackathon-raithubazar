package com.RaithuBazar.app.service;

import com.RaithuBazar.app.enitity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ProductService {

    // Get all products of a specific seller
    Page<Product> getProductsBySellerId(Long sellerId, Pageable pageable);

    // Get a product by ID
    Product getProductById(Long id);

    // Save (add/update) a product
    Product saveProduct(Product product);

    // Delete product by ID
    void deleteProduct(Long id);
}
