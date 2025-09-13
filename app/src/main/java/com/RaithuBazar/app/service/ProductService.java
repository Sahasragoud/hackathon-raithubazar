package com.RaithuBazar.app.service;

import com.RaithuBazar.app.dto.ProductRequest;
import com.RaithuBazar.app.enitity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface ProductService {

    Page<Product> getProductsBySellerId(Long sellerId, Pageable pageable);
    Product getProductById(Long id);
    public Product addProductWithImage(ProductRequest dto, MultipartFile imageFile) throws IOException;
    Product editProduct();
    void deleteProduct(Long id);
}
