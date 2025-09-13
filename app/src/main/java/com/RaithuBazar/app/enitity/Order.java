package com.RaithuBazar.app.enitity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "orders")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDateTime orderDate;

    private String status; // PENDING, CONFIRMED, DELIVERED, CANCELED

    private Integer quantity;   // units ordered
    private Double totalPrice;  // price * quantity

    // Buyer placing the order
    @ManyToOne
    @JoinColumn(name = "buyer_id", nullable = false)
    private User buyer;

    // Seller receiving the order
    @ManyToOne
    @JoinColumn(name = "seller_id", nullable = false)
    private User seller;

    // Product being ordered
    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;
}
