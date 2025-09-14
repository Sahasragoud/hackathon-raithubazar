package com.RaithuBazar.app.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OrderRequest {
    @NotNull(message = "Product ID is required")
    private Long productId;

    @NotNull(message = "Buyer ID is required")
    private Long buyerId;

    @NotNull(message = "Seller ID is required")
    private Long sellerId;

    @NotNull(message = "Quantity is required")
    @Min(value = 1, message = "Quantity must be at least 1")
    private Integer quantity;}
