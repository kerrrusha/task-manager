package com.kerrrusha.taskmanagerbackend.service;

import com.kerrrusha.taskmanagerbackend.dto.board.request.CreateBoardRequestDto;
import com.kerrrusha.taskmanagerbackend.dto.board.response.BoardResponseDto;
import com.kerrrusha.taskmanagerbackend.dto.column.request.CreateColumnRequestDto;
import com.kerrrusha.taskmanagerbackend.dto.task.request.CreateTaskRequestDto;

import java.util.List;

public interface KanbanService {

    List<BoardResponseDto> findAllBoards(String userId);

    BoardResponseDto saveBoard(CreateBoardRequestDto boardRequestDto);

    BoardResponseDto addColumn(CreateColumnRequestDto columnRequestDto, String userId);

    BoardResponseDto addTask(CreateTaskRequestDto columnRequestDto, String userId);
}
