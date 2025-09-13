package com.RaithuBazar.app.service;

import com.RaithuBazar.app.dto.ProductRequest;
import com.RaithuBazar.app.enitity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
public interface ProductService {

    Page<Product> getProductsBySellerId(Long sellerId, Pageable pageable);
    Product getProductById(Long id);
    public Product addProductWithImage(ProductRequest dto, MultipartFile imageFile) throws IOException;
    public Product editProduct(Long productId, ProductRequest dto, MultipartFile imageFile) throws IOException ;
    void deleteProduct(Long id);
}
