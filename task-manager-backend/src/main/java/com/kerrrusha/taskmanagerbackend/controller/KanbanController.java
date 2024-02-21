package com.kerrrusha.taskmanagerbackend.controller;

import com.kerrrusha.taskmanagerbackend.domain.User;
import com.kerrrusha.taskmanagerbackend.dto.board.request.CreateBoardRequestDto;
import com.kerrrusha.taskmanagerbackend.dto.board.response.BoardResponseDto;
import com.kerrrusha.taskmanagerbackend.dto.column.request.CreateColumnRequestDto;
import com.kerrrusha.taskmanagerbackend.dto.task.request.CreateTaskRequestDto;
import com.kerrrusha.taskmanagerbackend.service.KanbanService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/kanban")
@RequiredArgsConstructor
public class KanbanController {

    private final KanbanService kanbanService;

    @GetMapping("/boards")
    public List<BoardResponseDto> findAllBoards(Authentication authentication) {
        User user = (User) authentication.getPrincipal();
        return kanbanService.findAllBoards(user.getId());
    }

    @PostMapping("/boards/new")
    public BoardResponseDto createBoard(@Valid @RequestBody CreateBoardRequestDto boardRequestDto) {
        return kanbanService.saveBoard(boardRequestDto);
    }

    @PostMapping("/columns/new")
    public BoardResponseDto createColumn(@Valid @RequestBody CreateColumnRequestDto columnRequestDto, Authentication authentication) {
        User user = (User) authentication.getPrincipal();
        return kanbanService.addColumn(columnRequestDto, user.getId());
    }

    @PostMapping("/tasks/new")
    public BoardResponseDto createColumn(@Valid @RequestBody CreateTaskRequestDto taskRequestDto, Authentication authentication) {
        User user = (User) authentication.getPrincipal();
        return kanbanService.addTask(taskRequestDto, user.getId());
    }
}