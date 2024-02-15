package com.kerrrusha.taskmanagerbackend.dto.user.response;

import lombok.Data;

@Data
public class UserResponseDto {
    private String id;
    private String email;
    private String firstName;
    private String lastName;
    private String profilePhotoUrl;
}
