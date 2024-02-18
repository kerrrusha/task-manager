package com.kerrrusha.taskmanagerbackend.service.impl;

import com.kerrrusha.taskmanagerbackend.domain.Board;
import com.kerrrusha.taskmanagerbackend.domain.Column;
import com.kerrrusha.taskmanagerbackend.domain.Task;
import com.kerrrusha.taskmanagerbackend.dto.board.request.CreateBoardRequestDto;
import com.kerrrusha.taskmanagerbackend.dto.board.response.BoardResponseDto;
import com.kerrrusha.taskmanagerbackend.dto.column.request.CreateColumnRequestDto;
import com.kerrrusha.taskmanagerbackend.dto.task.request.CreateTaskRequestDto;
import com.kerrrusha.taskmanagerbackend.mapper.BoardMapper;
import com.kerrrusha.taskmanagerbackend.mapper.ColumnMapper;
import com.kerrrusha.taskmanagerbackend.mapper.TaskMapper;
import com.kerrrusha.taskmanagerbackend.repository.BoardRepository;
import com.kerrrusha.taskmanagerbackend.repository.ColumnRepository;
import com.kerrrusha.taskmanagerbackend.repository.TaskRepository;
import com.kerrrusha.taskmanagerbackend.service.KanbanService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

import static java.util.stream.Collectors.toList;

@Service
@RequiredArgsConstructor
public class KanbanServiceImpl implements KanbanService {

    private final BoardRepository boardRepository;
    private final ColumnRepository columnRepository;
    private final TaskRepository taskRepository;

    private final BoardMapper boardMapper;
    private final ColumnMapper columnMapper;
    private final TaskMapper taskMapper;

    @Override
    public List<BoardResponseDto> findAllBoards(String userId) {
        return boardRepository.findAllByCreatedByUserId(userId).stream()
                .map(boardMapper::toDto)
                .collect(toList());
    }

    @Override
    public BoardResponseDto saveBoard(CreateBoardRequestDto boardRequestDto)  {
        Board board = boardMapper.toEntity(boardRequestDto);
        return boardMapper.toDto(boardRepository.save(board));
    }

    @Override
    public BoardResponseDto addColumn(CreateColumnRequestDto columnRequestDto, String userId) {
        Board board = boardRepository.findByIdAndCreatedByUserId(columnRequestDto.getBoardId(), userId).orElseThrow();

        Column column = columnMapper.toEntity(columnRequestDto);
        column.setBoardId(board.getId());
        columnRepository.save(column);

        return boardMapper.toDto(board);
    }

    @Override
    public BoardResponseDto addTask(CreateTaskRequestDto taskRequestDto, String userId) {
        Column column = columnRepository.findByIdAndCreatedByUserId(taskRequestDto.getColumnId(), userId).orElseThrow();

        Task task = taskMapper.toEntity(taskRequestDto);
        task.setColumnId(column.getId());
        taskRepository.save(task);

        Board board = boardRepository.findById(column.getBoardId()).orElseThrow();
        return boardMapper.toDto(board);
    }
}
