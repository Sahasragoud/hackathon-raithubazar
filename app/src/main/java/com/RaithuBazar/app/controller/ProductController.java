package com.RaithuBazar.app.controller;

import com.RaithuBazar.app.dto.ProductRequest;
import com.RaithuBazar.app.enitity.Product;
import com.RaithuBazar.app.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    // 🟢 Create product with single image
    @PostMapping("/add")
    public ResponseEntity<Product> addProduct(
            @RequestPart("product") ProductRequest request,
            @RequestPart("image") MultipartFile imageFile) throws IOException {

        Product savedProduct = productService.addProductWithImage(request, imageFile);
        return ResponseEntity.ok(savedProduct);
    }

    // 🟢 Get product by id
    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        return ResponseEntity.ok(productService.getProductById(id));
    }

    // 🟢 Delete product
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
        return ResponseEntity.ok("Product deleted successfully!");
    }

    // 🟢 Edit product (update details + optionally image)
    @PutMapping("/{id}/edit")
    public ResponseEntity<Product> editProduct(
            @PathVariable Long id,
            @RequestPart("product") ProductRequest productRequest,
            @RequestPart(value = "image", required = false) MultipartFile imageFile
    ) throws IOException {
        return ResponseEntity.ok(productService.editProduct(id, productRequest, imageFile));
    }
}
