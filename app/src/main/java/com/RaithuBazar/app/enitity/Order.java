package com.RaithuBazar.app.enitity;

import com.RaithuBazar.app.enums.OrderStatus;
import com.fasterxml.jackson.annotation.JsonIgnore;
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

    @Enumerated(EnumType.STRING)
    private OrderStatus status;

    private Integer quantity;   // units ordered
    private Double totalPrice;  // price * quantity

    // Buyer placing the order
    @ManyToOne
    @JoinColumn(name = "buyer_id", nullable = false)
    @JsonIgnore
    private User buyer;

    // Seller receiving the order
    @ManyToOne
    @JoinColumn(name = "seller_id", nullable = false)
    @JsonIgnore
    private User seller;

    // Product being ordered
    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    @JsonIgnore
    private Product product;
}
