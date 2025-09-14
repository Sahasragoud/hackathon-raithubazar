package com.RaithuBazar.app.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BuyerRegisterRequest {
    private String username; // only for Buyer
    private String email;    // only for Admin/Seller
    private String password;
    private String phone;
    private String address;

}
