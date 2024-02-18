package com.kerrrusha.taskmanagerbackend.dto.board.response;

import com.kerrrusha.taskmanagerbackend.dto.column.response.ColumnResponseDto;
import lombok.Data;

@Data
public class BoardResponseDto {
    private final String id;
    private final String createdAt;
    private final String createdByUserId;
    private final String title;
    private ColumnResponseDto[] columns;
}
