package com.RaithuBazar.app.serviceImpl;

import com.RaithuBazar.app.dto.ProductRequest;
import com.RaithuBazar.app.enitity.Product;
import com.RaithuBazar.app.enitity.ProductImage;
import com.RaithuBazar.app.repository.ProductImageRepository;
import com.RaithuBazar.app.repository.ProductRepository;
import com.RaithuBazar.app.repository.UserRepository;
import com.RaithuBazar.app.service.ProductService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;
    private final UserRepository userRepository;
    private final ProductImageRepository productImageRepository;

    public ProductServiceImpl(ProductRepository productRepository,
                              UserRepository userRepository,
                              ProductImageRepository productImageRepository) {
        this.productRepository = productRepository;
        this.productImageRepository = productImageRepository;
        this.userRepository = userRepository;
    }

    @Override
    public Page<Product> getProductsBySellerId(Long sellerId, Pageable pageable) {
        return productRepository.findAllBySellerId(sellerId, pageable);
    }

    @Override
    public Product getProductById(Long id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found with id: " + id));
    }

    @Override
    public Product addProductWithImage(ProductRequest dto, MultipartFile imageFile) throws IOException {
        // 1️⃣ Save product first
        Product product = Product.builder()
                .name(dto.getName())
                .category(dto.getCategory())
                .price(dto.getPrice())
                .quantity(dto.getQuantity())
                .unit(dto.getUnit())
                .seller(userRepository.findById(dto.getSellerId())
                        .orElseThrow(() -> new RuntimeException("Seller not found")))
                .build();
        product = productRepository.save(product);

        // 2️⃣ Save image (if provided)
        if (imageFile != null && !imageFile.isEmpty()) {
            String imageUrl = saveImage(imageFile);

            ProductImage productImage = ProductImage.builder()
                    .imageUrl(imageUrl)   // ✅ store relative URL
                    .product(product)
                    .build();

            productImageRepository.save(productImage);
            product.setImage(productImage);
        }

        return product;
    }

    @Override
    public Product editProduct(Long productId, ProductRequest dto, MultipartFile imageFile) throws IOException {
        // 1️⃣ Fetch existing product
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found with id: " + productId));

        // 2️⃣ Update fields
        product.setName(dto.getName());
        product.setCategory(dto.getCategory());
        product.setPrice(dto.getPrice());
        product.setQuantity(dto.getQuantity());
        product.setUnit(dto.getUnit());
        product = productRepository.save(product);

        // 3️⃣ Replace image if new one provided
        if (imageFile != null && !imageFile.isEmpty()) {
            String imageUrl = saveImage(imageFile);

            ProductImage productImage = productImageRepository.findByProductId(productId);
            if (productImage == null) {
                productImage = new ProductImage();
                productImage.setProduct(product);
            } else {
                // Optionally delete old image file
                deleteFileIfExists(productImage.getImageUrl());
            }

            productImage.setImageUrl(imageUrl);
            productImageRepository.save(productImage);
            product.setImage(productImage);
        }

        return product;
    }

    @Override
    public void deleteProduct(Long id) {
        ProductImage productImage = productImageRepository.findByProductId(id);

        if (productImage != null) {
            // delete physical file
            deleteFileIfExists(productImage.getImageUrl());

            // delete ProductImage record
            productImageRepository.delete(productImage);
        }

        productRepository.deleteById(id);
    }

    // 📌 Helper: Save image to /uploads folder and return relative URL
    private String saveImage(MultipartFile imageFile) throws IOException {
        String renamedFile = System.currentTimeMillis() + "_" + imageFile.getOriginalFilename();
        Path folder = Paths.get("uploads/");
        if (!Files.exists(folder)) Files.createDirectories(folder);
        Path filePath = folder.resolve(renamedFile);
        Files.write(filePath, imageFile.getBytes());
        return "/uploads/" + renamedFile; // ✅ relative URL
    }

    // 📌 Helper: Delete old file from disk if exists
    private void deleteFileIfExists(String imageUrl) {
        if (imageUrl != null && imageUrl.startsWith("/uploads/")) {
            String filePath = imageUrl.replaceFirst("/uploads/", "uploads/");
            try {
                Files.deleteIfExists(Paths.get(filePath));
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
