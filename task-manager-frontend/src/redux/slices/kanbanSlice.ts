import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    AddNewBoardResponse,
    AddNewColumnResponse,
    AddNewTaskResponse,
    Board,
    Column, DragTaskDto, KanbanBoardsResponse,
    KanbanState,
    Task
} from "../../common/commonTypes";
import {mapAddNewTaskResponseToTask} from "../../common/commonUtils";
import {RootState} from "../store";
import assert from "assert";

const initialState: KanbanState = {
    activeBoardId: "61f7b91253a1a028d956e85d",
    boards: [
        {
            id: "61f7b91253a1a028d956e85d",
            title: "Fullstack Project Launch",
            columns: [
                {
                    id: "61f7b91253a1a028d956e85d",
                    title: "Backlog",
                    background: "rgb(110, 54, 48)",
                    tasks: [
                        {
                            id: "61f7b91253a1a028d956e85d",
                            title: "Finish frontend part of Kanban board",
                            description: "Complete board React component, sign-in, sign-out, user profile pages",
                            assignedTo: "Kirill",
                            priority: "High",
                            dueDate: "2024-02-06"
                        }
                    ]
                },
                {
                    id: "2137b91253a1a028d956e123",
                    title: "In Progress",
                    background: "rgb(40, 69, 108)",
                    tasks: [
                        {
                            id: "61f7b91253a1a028d956e85d",
                            title: "Build UI for onboarding flow",
                            description: "We need to build some things using other things to make our app look great",
                            assignedTo: "John",
                            priority: "High",
                            dueDate: "2024-03-15"
                        },
                        {
                            id: "61f7b91253a1a028d956e85d",
                            title: "Build UI for onboarding flow",
                            description: "We need to build some things using other things to make our app look great",
                            assignedTo: "John",
                            priority: "High",
                            dueDate: "2024-03-15"
                        }
                    ]
                }
            ]
        },
        {
            id: "1237b91253a1a028d956e123",
            title: "Fullstack Project Launch II",
            columns: [
                {
                    id: "61f7b91253a1a028d956e85d",
                    title: "Backlog",
                    background: "rgb(110, 54, 48)",
                    tasks: [
                        {
                            id: "61f7b91253a1a028d956e85d",
                            title: "Finish frontend part of Kanban board",
                            description: "Complete board React component, sign-in, sign-out, user profile pages",
                            assignedTo: "Kirill",
                            priority: "High",
                            dueDate: "2024-02-06"
                        }
                    ]
                }
            ]
        }
    ]
};

export const kanbanSlice = createSlice({
    name: 'kanban',
    initialState,
    reducers: {
        setKanban: (state, action: PayloadAction<any>) => {
            const dto: KanbanBoardsResponse = action.payload;

            state.boards = dto.boards;
        },
        addNewTask: (state, action: PayloadAction<AddNewTaskResponse>) => {
            const dto: AddNewTaskResponse = action.payload;
            const task: Task = mapAddNewTaskResponseToTask(dto);

            const boardIndex = state.boards.findIndex(board => board.id === dto.boardId);
            const columnIndex = state.boards[boardIndex].columns.findIndex(column => column.id === dto.columnId);

            state.boards[boardIndex].columns[columnIndex].tasks.push(task);
        },
        addNewColumn: (state, action: PayloadAction<AddNewColumnResponse>) => {
            const dto: AddNewColumnResponse = action.payload;
            const column: Column = dto;

            const boardIndex = state.boards.findIndex(board => board.id === dto.boardId);

            state.boards[boardIndex].columns.push(column);
        },
        addNewBoard: (state, action: PayloadAction<AddNewBoardResponse>) => {
            const dto: AddNewBoardResponse = action.payload;
            const board: Board = dto;

            state.boards.push(board);
        },
        setActiveBoardId: (state, action: PayloadAction<string>) => {
            state.activeBoardId = action.payload;
        },
        dragTask: (state, action: PayloadAction<DragTaskDto>) => {
            const dto: DragTaskDto = action.payload;

            const board = state.boards.find((board) => board.id === dto.boardId);
            assert(board !== undefined, `Can't find such board with id=${dto.boardId}`);

            const prevCol = board.columns.find(col => col.id === dto.prevColId);
            assert(prevCol !== undefined, `Can't find such previous column with id=${dto.prevColId}`);

            const taskIndex = prevCol.tasks.findIndex(task => task.id === dto.taskId);
            const task = prevCol.tasks[taskIndex];
            prevCol.tasks.splice(taskIndex, 1);

            const targetCol = board.columns.find(col => col.id === dto.targetColId);
            assert(targetCol !== undefined, `Can't find such target column with id=${dto.targetColId}`);

            targetCol.tasks.push(task);
        },
    },
});

export const { addNewTask, addNewColumn, setActiveBoardId, addNewBoard, dragTask, setKanban } = kanbanSlice.actions;

export const selectActiveBoard = (state: RootState) => state.kanban.boards.filter(board => board.id === state.kanban.activeBoardId)[0];
