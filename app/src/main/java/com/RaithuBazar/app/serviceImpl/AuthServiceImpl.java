package com.RaithuBazar.app.serviceImpl;

import com.RaithuBazar.app.dto.AuthResponse;
import com.RaithuBazar.app.dto.BuyerRegisterRequest;
import com.RaithuBazar.app.dto.LoginRequest;
import com.RaithuBazar.app.dto.SellerRegisterRequest;
import com.RaithuBazar.app.enitity.User;
import com.RaithuBazar.app.enums.Role;
import com.RaithuBazar.app.repository.UserRepository;
import com.RaithuBazar.app.service.AuthService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    // Register for Buyer & Seller
    // Register for Buyer & Seller
    @Override
    public AuthResponse registerAsSeller(SellerRegisterRequest request) {
            User user = new User();
            user.setUsername(request.getUsername());
            user.setEmail(request.getEmail());
            user.setPassword(passwordEncoder.encode(request.getPassword()));
            user.setPhone(request.getPhone());
            user.setAddress(request.getAddress());
            user.setRole(Role.SELLER);

        userRepository.save(user);
        return new AuthResponse(user.getId(), user.getUsername(), user.getEmail(), user.getRole(),user.getPhone(), user.getAddress());
    }

    @Override
    public AuthResponse registerAsBuyer(BuyerRegisterRequest request) {
        User user = new User();
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setPhone(request.getPhone());
        user.setAddress(request.getAddress());
        user.setRole(Role.BUYER);

        userRepository.save(user);
        return new AuthResponse(user.getId(), user.getUsername(), user.getEmail(), user.getRole(),user.getPhone(), user.getAddress());

    }
    // Login with username only
    public AuthResponse login(LoginRequest request) {
        User user = userRepository.findByUsername(request.getUsername())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid credentials");
        }
        return new AuthResponse(user.getId(), user.getUsername(), user.getEmail(), user.getRole(),user.getPhone(), user.getAddress());
    }
}
