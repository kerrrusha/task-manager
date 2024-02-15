package com.kerrrusha.taskmanagerbackend.repository;

import com.kerrrusha.taskmanagerbackend.domain.Column;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ColumnRepository extends MongoRepository<Column, String> {
}
