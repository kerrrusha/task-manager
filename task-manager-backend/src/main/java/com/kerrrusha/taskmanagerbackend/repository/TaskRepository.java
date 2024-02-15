package com.kerrrusha.taskmanagerbackend.repository;

import com.kerrrusha.taskmanagerbackend.domain.Task;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TaskRepository extends MongoRepository<Task, String> {
}
