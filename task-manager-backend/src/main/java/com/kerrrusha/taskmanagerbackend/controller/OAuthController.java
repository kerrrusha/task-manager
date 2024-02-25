package com.kerrrusha.taskmanagerbackend.controller;

import com.google.common.net.HttpHeaders;
import com.kerrrusha.taskmanagerbackend.dto.oauth.GoogleOAuthLoginRequestDto;
import com.kerrrusha.taskmanagerbackend.dto.user.response.UserResponseDto;
import com.kerrrusha.taskmanagerbackend.security.GoogleOAuthService;
import com.kerrrusha.taskmanagerbackend.service.UserService;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequiredArgsConstructor
@RequestMapping("/oauth")
public class OAuthController {

    public static final String AUTH_TOKEN = "AUTH-TOKEN";

    private final GoogleOAuthService googleOAuthService;
    private final UserService userService;

    @GetMapping("/user/info")
    public UserResponseDto getUserInfo(Principal principal) {
        String userId = principal.getName();
        return userService.findByEmail(userId);
    }

    @PostMapping("/google/login")
    public ResponseEntity<Void> loginGoogle(@RequestBody GoogleOAuthLoginRequestDto requestBody, HttpServletResponse response) {
        String authToken = googleOAuthService.authenticate(requestBody);
        final ResponseCookie cookie = ResponseCookie.from(AUTH_TOKEN, authToken)
                .httpOnly(true)
                .maxAge(7 * 24 * 3600)
                .path("/")
                .secure(false)
                .build();
        response.addHeader(HttpHeaders.SET_COOKIE, cookie.toString());
        return ResponseEntity.ok().build();
    }
}
