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

    public ProductServiceImpl(ProductRepository productRepository, UserRepository userRepository,ProductImageRepository productImageRepository) {
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
    public Product addProductWithImage(ProductRequest dto, MultipartFile imageFile) throws IOException, IOException {
        // 1️⃣ Save product
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

        // 2️⃣ Rename & save image
        String renamedFile = System.currentTimeMillis() + "_" + imageFile.getOriginalFilename();
        Path folder = Paths.get("uploads/");
        if (!Files.exists(folder)) Files.createDirectories(folder); // create folder if missing
        Path filePath = folder.resolve(renamedFile);
        Files.write(filePath, imageFile.getBytes());

        // 3️⃣ Save ProductImage
        ProductImage productImage = ProductImage.builder()
                .imageUrl(filePath.toString()) // save renamed file path
                .product(product)
                .build();
        productImageRepository.save(productImage);

        return product;
    }


    @Override
    public Product editProduct(Long productId, ProductRequest dto, MultipartFile imageFile) throws IOException {
        // 1️⃣ Fetch existing product
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found with id: " + productId));

        // 2️⃣ Update fields from DTO
        product.setName(dto.getName());
        product.setCategory(dto.getCategory());
        product.setPrice(dto.getPrice());
        product.setQuantity(dto.getQuantity());
        product.setUnit(dto.getUnit());

        product = productRepository.save(product);

        // 3️⃣ If a new image is provided, replace it
        if (imageFile != null && !imageFile.isEmpty()) {
            // Optionally delete old image file here

            String renamedFile = System.currentTimeMillis() + "_" + imageFile.getOriginalFilename();
            Path folder = Paths.get("uploads/");
            if (!Files.exists(folder)) Files.createDirectories(folder);
            Path filePath = folder.resolve(renamedFile);
            Files.write(filePath, imageFile.getBytes());

            ProductImage productImage = productImageRepository.findByProductId(productId);
            if (productImage == null) {
                productImage = new ProductImage();
                productImage.setProduct(product);
            }
            productImage.setImageUrl(filePath.toString());
            productImageRepository.save(productImage);
        }

        return product;
    }

    @Override
    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }
}
