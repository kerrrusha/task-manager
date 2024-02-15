package com.kerrrusha.taskmanagerbackend.service;

import com.kerrrusha.taskmanagerbackend.domain.User;
import com.kerrrusha.taskmanagerbackend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;

@RequiredArgsConstructor
public class BootstrapService implements CommandLineRunner {

    private final UserRepository userRepository;

    @Override
    public void run(String... args) throws Exception {
        User exampleUser = new User();
        exampleUser.setEmail("example@mail.com");
        exampleUser.setFirstName("First");
        exampleUser.setLastName("Last");
        exampleUser.setPassword("qwerty");

        userRepository.save(exampleUser);
    }
}
