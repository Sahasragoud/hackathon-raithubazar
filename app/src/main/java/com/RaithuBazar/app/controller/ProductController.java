package com.RaithuBazar.app.controller;

import com.RaithuBazar.app.dto.ProductRequest;
import com.RaithuBazar.app.enitity.Product;
import com.RaithuBazar.app.service.ProductService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

}