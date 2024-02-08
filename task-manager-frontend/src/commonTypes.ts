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

export type Task = {
    id: string,
    title: string,
    description: string,
    assignedTo: string,
    priority: string,
    dueDate: string,
};

export type AddNewTaskRequest = {
    boardId: string,
    columnId: string,
    title: string,
    description: string,
    assignedTo: string,
    priority: string,
    dueDate: string,
};

export type Column = {
    id: string,
    title: string,
    background: string,
    tasks: Array<Task>,
};

export type AddNewTaskModalProps = {
    columns: Array<Column>,
};

export type KanbanBoard = {
    id: string,
    name: string,
    columns: Array<Column>,
};

export type KanbanState = {
    boards: Array<KanbanBoard>,
};
