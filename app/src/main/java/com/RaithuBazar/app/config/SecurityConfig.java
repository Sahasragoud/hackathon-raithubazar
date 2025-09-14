package com.RaithuBazar.app.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable()) // disable CSRF for simplicity (only for testing)
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/auth/**").permitAll() // allow register/login
                        .requestMatchers("/api/products/**").permitAll() // allow register/login
                        .requestMatchers("/api/orders/**").permitAll() // allow register/login
                        .requestMatchers("/api/admin/**").permitAll() // allow register/login
                        .anyRequest().authenticated() // protect other endpoints
                )
                .httpBasic(httpBasic -> {}); // still allow basic auth if needed

        return http.build();
    }
}
