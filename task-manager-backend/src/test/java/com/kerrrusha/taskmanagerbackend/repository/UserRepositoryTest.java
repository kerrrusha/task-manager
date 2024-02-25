package com.kerrrusha.taskmanagerbackend.repository;

import com.kerrrusha.taskmanagerbackend.domain.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    @Test
    void save_ok() {
        User user = new User();

        user.setFirstName("asd");
        user.setLastName("asd");
        user.setEmail("test@test.com");
        user.setPassword("test");

        userRepository.save(user);
    }

}