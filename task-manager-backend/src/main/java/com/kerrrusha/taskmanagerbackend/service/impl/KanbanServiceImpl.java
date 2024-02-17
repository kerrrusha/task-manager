package com.kerrrusha.taskmanagerbackend.service.impl;

import com.kerrrusha.taskmanagerbackend.domain.Board;
import com.kerrrusha.taskmanagerbackend.dto.board.request.CreateBoardRequestDto;
import com.kerrrusha.taskmanagerbackend.mapper.BoardMapper;
import com.kerrrusha.taskmanagerbackend.repository.BoardRepository;
import com.kerrrusha.taskmanagerbackend.service.KanbanService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class KanbanServiceImpl implements KanbanService {

    private final BoardRepository boardRepository;
    private final BoardMapper boardMapper;

    @Override
    public List<Board> findAllBoards(String userId) {
        return boardRepository.findAllByUserId(userId);
    }

    @Override
    public Board saveBoard(CreateBoardRequestDto boardRequestDto, String userId)  {
        Board board = boardMapper.toEntity(boardRequestDto);
        board.setUserId(userId);
        return boardRepository.save(board);
    }
}
