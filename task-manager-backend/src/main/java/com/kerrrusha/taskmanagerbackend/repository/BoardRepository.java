package com.kerrrusha.taskmanagerbackend.repository;

import com.kerrrusha.taskmanagerbackend.domain.Board;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BoardRepository extends MongoRepository<Board, String> {
}
