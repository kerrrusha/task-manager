package com.kerrrusha.taskmanagerbackend.repository;

import com.kerrrusha.taskmanagerbackend.domain.Board;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface BoardRepository extends MongoRepository<Board, String> {
    List<Board> findAllByUserId(String userId);
}
