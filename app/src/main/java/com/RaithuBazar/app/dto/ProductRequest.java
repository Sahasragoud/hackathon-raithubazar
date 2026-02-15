package com.RaithuBazar.app.dto;

import com.RaithuBazar.app.enitity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductRequest {
    private String name;
    private String category;   // Fruits, Vegetables, Grains
    private Double price;
    private Integer quantity;  // available stock
    private String unit;       // e.g., KG, Dozen
    private Long sellerId;
}
