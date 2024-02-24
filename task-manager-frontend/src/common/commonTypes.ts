export type InputTarget = {
    target: HTMLInputElement;
}

export type ButtonTarget = {
    target: EventTarget;
}

export type SelectTarget = {
    target: HTMLSelectElement;
}

export type TextAreaTarget = {
    target: HTMLTextAreaElement;
}

export type IsLoggedInProps = {
    isLoggedIn: boolean;
}

export type AddNewTaskRequest = {
    boardId: string,
    columnId: string,
    title: string,
    description: string,
    assignedTo: string,
    priority: string,
    dueDate: string,
};

export type AddNewTaskResponse = {
    id: string,
    boardId: string,
    columnId: string,
    title: string,
    description: string,
    assignedTo: string,
    priority: string,
    dueDate: string,
};

export type AddNewColumnRequest = {
    boardId: string,
    title: string,
    background: string,
};

export type AddNewColumnResponse = {
    id: string,
    boardId: string,
    title: string,
    background: string,
    tasks: Array<Task>,
};

export type AddNewBoardRequest = {
    title: string,
}

export type AddNewBoardResponse = {
    id: string,
    title: string,
    columns: Array<Column>,
}

export type KanbanState = {
    activeBoardId: string,
    boards: Array<Board>,
};

export type Board = {
    id: string,
    title: string,
    columns: Array<Column>,
};

export type Column = {
    id: string,
    title: string,
    background: string,
    tasks: Array<Task>,
};

export type Task = {
    id: string,
    title: string,
    description: string,
    assignedTo: string,
    priority: string,
    dueDate: string,
};

export type DragTaskDto = {
    boardId: string,
    targetColId: string,
    prevColId: string,
    taskId: string,
};

export type User = {
    id: string,
    email: string,
    firstName: string,
    lastName: string,
    profilePhotoUrl: string,
};

export type AuthState = {
    user: User | null,
}
