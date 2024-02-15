package com.kerrrusha.taskmanagerbackend.domain;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Getter
@Setter
@Document
@NoArgsConstructor
@AllArgsConstructor
public class Task {
    @Id
    private String id;

    @NotBlank
    private String title;

    private String description;

    private String assignedTo;

    @NotBlank
    private String priority;

    @NotNull
    private LocalDate dueDate;
}
