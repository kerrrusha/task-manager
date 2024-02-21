package com.kerrrusha.taskmanagerbackend.controller;

import com.kerrrusha.taskmanagerbackend.domain.User;
import com.kerrrusha.taskmanagerbackend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/users")
public class UserController {

    private final UserRepository userRepository;

    @GetMapping("/all")
    @PreAuthorize("hasAuthority('ADMIN')")
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @GetMapping("/current")
    public ResponseEntity<?> getUserDetails(@AuthenticationPrincipal OAuth2User oauth2User) {
        if (oauth2User != null) {
            return ResponseEntity.ok(oauth2User.getAttributes());
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not authenticated");
        }
    }
}
