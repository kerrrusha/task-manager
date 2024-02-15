package com.kerrrusha.taskmanagerbackend.domain;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Document
@NoArgsConstructor
@AllArgsConstructor
public class Board {
    @Id
    private String id;

    @NotBlank
    private String title;

    private List<Column> columns = new ArrayList<>();
}