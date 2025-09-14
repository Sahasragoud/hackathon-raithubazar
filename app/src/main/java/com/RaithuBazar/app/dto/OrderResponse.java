package com.RaithuBazar.app.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OrderResponse {
    private Long id;
    private String productName;
    private String sellerName;
    private String buyerName;
    private Integer quantity;
    private String status;
    private String address;
}
