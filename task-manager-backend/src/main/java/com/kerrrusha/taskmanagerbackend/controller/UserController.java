package com.kerrrusha.taskmanagerbackend.controller;

import com.kerrrusha.taskmanagerbackend.domain.User;
import com.kerrrusha.taskmanagerbackend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {

    private final UserRepository userRepository;

    //todo remove
    @GetMapping("/all")
    @PreAuthorize("hasRole('ADMIN')")
    public List<User> findAll() {
        return userRepository.findAll();
    }

}
