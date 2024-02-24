package com.kerrrusha.taskmanagerbackend.controller;

import com.kerrrusha.taskmanagerbackend.dto.auth.JwtAuthenticationResponse;
import com.kerrrusha.taskmanagerbackend.dto.user.request.UserLoginRequestDto;
import com.kerrrusha.taskmanagerbackend.dto.user.request.UserRegistrationRequestDto;
import com.kerrrusha.taskmanagerbackend.dto.user.response.UserResponseDto;
import com.kerrrusha.taskmanagerbackend.security.AuthenticationService;
import com.kerrrusha.taskmanagerbackend.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
@Tag(name = "Authentication", description = "Registration and authentication endpoints")
public class AuthController {

    private final UserService userService;
    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    @Operation(summary = "Register a new user")
    public UserResponseDto register(@Valid @RequestBody UserRegistrationRequestDto request) {
        return userService.register(request);
    }

    @PostMapping("/login")
    @Operation(summary = "Authenticate a user")
    public JwtAuthenticationResponse login(@Valid @RequestBody UserLoginRequestDto request) {
        return authenticationService.authenticate(request);
    }
}
