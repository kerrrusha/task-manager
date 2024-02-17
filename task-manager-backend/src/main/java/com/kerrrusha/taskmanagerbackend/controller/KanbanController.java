package com.kerrrusha.taskmanagerbackend.controller;

import com.kerrrusha.taskmanagerbackend.domain.Board;
import com.kerrrusha.taskmanagerbackend.domain.User;
import com.kerrrusha.taskmanagerbackend.dto.board.request.CreateBoardRequestDto;
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
    public List<Board> findAll(Authentication authentication) {
        User user = (User) authentication.getPrincipal();
        return kanbanService.findAllBoards(user.getId());
    }

    @PostMapping("/boards/new")
    public Board createBoard(@Valid @RequestBody CreateBoardRequestDto boardRequestDto, Authentication authentication) {
        User user = (User) authentication.getPrincipal();
        return kanbanService.saveBoard(boardRequestDto, user.getId());
    }
}
