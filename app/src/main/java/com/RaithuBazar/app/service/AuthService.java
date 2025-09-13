package com.RaithuBazar.app.service;

import com.RaithuBazar.app.dto.AuthResponse;
import com.RaithuBazar.app.dto.BuyerRegisterRequest;
import com.RaithuBazar.app.dto.LoginRequest;
import com.RaithuBazar.app.dto.SellerRegisterRequest;
import com.RaithuBazar.app.enitity.User;
import org.springframework.stereotype.Service;

@Service
public interface AuthService {
    public AuthResponse login(LoginRequest request);
    public AuthResponse registerAsSeller(SellerRegisterRequest request);
    public AuthResponse registerAsBuyer(BuyerRegisterRequest request);
}
