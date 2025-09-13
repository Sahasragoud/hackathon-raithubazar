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
    private final ProductImageRepository imageRepository;

    public ProductServiceImpl(ProductRepository productRepository, UserRepository userRepository,ProductImageRepository imageRepository) {
        this.productRepository = productRepository;
        this.imageRepository = imageRepository;
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
        imageRepository.save(productImage);

        return product;
    }


    @Override
    public Product editProduct() {
        return null;
    }

    @Override
    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }
}
