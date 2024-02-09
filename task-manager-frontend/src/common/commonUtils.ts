import {AddNewTaskResponse, Task} from "./commonTypes";

export default function mapAddNewTaskResponseToTask(dto : AddNewTaskResponse) : Task {
    return {
        id: dto.id,
        title: dto.title,
        description: dto.description,
        assignedTo: dto.assignedTo,
        priority: dto.priority,
        dueDate: dto.dueDate,
    };
}
