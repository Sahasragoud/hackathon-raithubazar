package com.RaithuBazar.app.repository;

import com.RaithuBazar.app.enitity.ProductImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductImageRepository extends JpaRepository<ProductImage, Long> {
    // Optional: add custom queries if needed
    ProductImage findByProductId(Long productId);
}
