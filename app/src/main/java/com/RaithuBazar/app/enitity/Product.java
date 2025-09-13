package com.RaithuBazar.app.enitity;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "products")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    private String category;   // Fruits, Vegetables, Grains
    private Double price;
    private Integer quantity;  // available stock
    private String unit;       // e.g., KG, Dozen

    // Seller who owns this product
    @ManyToOne
    @JoinColumn(name = "seller_id", nullable = false)
    private User seller;

    // Orders that include this product
    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Order> orders;
}
