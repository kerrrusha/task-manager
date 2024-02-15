package com.kerrrusha.taskmanagerbackend.service;

import com.kerrrusha.taskmanagerbackend.domain.Role;
import com.kerrrusha.taskmanagerbackend.domain.User;
import com.kerrrusha.taskmanagerbackend.repository.UserRepository;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

import java.util.Collections;

@Slf4j
@Component
@RequiredArgsConstructor
public class BootstrapService implements ApplicationListener<ContextRefreshedEvent> {

    private final UserRepository userRepository;

    @Override
    public void onApplicationEvent(@NonNull ContextRefreshedEvent event) {
        saveAdminIfNotExists();
    }

    private void saveAdminIfNotExists() {
        User admin = new User();
        admin.setEmail("admin@admin.com");
        admin.setFirstName("First");
        admin.setLastName("Last");
        admin.setPassword("qwerty");
        admin.setRoles(Collections.singleton(Role.builder().name(Role.RoleName.ADMIN).build()));

        if (userRepository.findByEmail(admin.getEmail()).isPresent()) {
            return;
        }

        log.info("Saving user: {}", admin);
        userRepository.save(admin);
    }
}
