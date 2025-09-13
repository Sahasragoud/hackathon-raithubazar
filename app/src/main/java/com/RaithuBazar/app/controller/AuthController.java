package com.RaithuBazar.app.controller;

import com.RaithuBazar.app.dto.AuthResponse;
import com.RaithuBazar.app.dto.BuyerRegisterRequest;
import com.RaithuBazar.app.dto.LoginRequest;
import com.RaithuBazar.app.dto.SellerRegisterRequest;
import com.RaithuBazar.app.enitity.User;
import com.RaithuBazar.app.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register-seller")
    public ResponseEntity<?> register(@RequestBody SellerRegisterRequest request) {
        AuthResponse response = authService.registerAsSeller(request);
        return ResponseEntity.ok(Map.of(
                "message", "User registered successfully",
                "user", response
        ));
    }

    @PostMapping("/register-buyer")
    public ResponseEntity<?> register(@RequestBody BuyerRegisterRequest request) {
        AuthResponse response = authService.registerAsBuyer(request);
        return ResponseEntity.ok(Map.of(
                "message", "User registered successfully",
                "user", response
        ));
    }


    // Login (for Admin, Buyer, Seller)
    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest request) {
        return ResponseEntity.ok(authService.login(request));
    }
}
