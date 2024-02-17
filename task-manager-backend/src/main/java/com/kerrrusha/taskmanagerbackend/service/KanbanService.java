package com.kerrrusha.taskmanagerbackend.service;

import com.kerrrusha.taskmanagerbackend.domain.Board;
import com.kerrrusha.taskmanagerbackend.dto.board.request.CreateBoardRequestDto;

import java.util.List;

public interface KanbanService {

    List<Board> findAllBoards(String userId);

    Board saveBoard(CreateBoardRequestDto board, String userId);
}
