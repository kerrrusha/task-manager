package com.kerrrusha.taskmanagerbackend.mapper;

import com.kerrrusha.taskmanagerbackend.config.MapperConfig;
import com.kerrrusha.taskmanagerbackend.domain.Board;
import com.kerrrusha.taskmanagerbackend.dto.board.request.CreateBoardRequestDto;
import org.mapstruct.Mapper;

@Mapper(config = MapperConfig.class)
public interface BoardMapper {
    Board toEntity(CreateBoardRequestDto boardRequestDto);
}
