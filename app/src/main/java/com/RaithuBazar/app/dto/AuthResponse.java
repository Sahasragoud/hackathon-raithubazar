package com.RaithuBazar.app.dto;
import com.RaithuBazar.app.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AuthResponse {
    private Long id;
    private String username; // only for Buyer
    private String email;    // only for Admin/Seller
    private Role role;   // ADMIN / SELLER / BUYER
    private String phone;
    private String address;
}