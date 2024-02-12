import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {AddNewColumnResponse, AddNewTaskResponse, Column, KanbanState, Task} from "../../common/commonTypes";
import {mapAddNewTaskResponseToTask} from "../../common/commonUtils";
import {RootState} from "../store";

const initialState: KanbanState = {
    activeBoardId: "61f7b91253a1a028d956e85d",
    boards: [
        {
            id: "61f7b91253a1a028d956e85d",
            name: "Fullstack Project Launch",
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
            name: "Fullstack Project Launch II",
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
        setActiveBoardId: (state, action: PayloadAction<string>) => {
            state.activeBoardId = action.payload;
        },
    },
});

export const { addNewTask, addNewColumn, setActiveBoardId } = kanbanSlice.actions;

export const selectActiveBoard = (state: RootState) => state.kanban.boards.filter(board => board.id === state.kanban.activeBoardId)[0];
