import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    AddNewBoardResponse,
    AddNewColumnResponse,
    AddNewTaskResponse,
    Column, DragTaskDto, KanbanBoardsResponse,
    KanbanState,
    Task
} from "../../common/commonTypes";
import {mapAddNewTaskResponseToTask} from "../../common/commonUtils";
import {RootState} from "../store";
import assert from "assert";

const initialState: KanbanState = {
    activeBoardId: "",
    boards: []
};

function getActiveBoardId(stateCopy : KanbanState) {
    const boards = stateCopy.boards;
    if (!boards || boards.length === 0) {
        console.warn("Can't choose active board");
        return "";
    }
    return (!stateCopy.activeBoardId || stateCopy.activeBoardId.length === 0)
        ? boards[0].id
        : stateCopy.activeBoardId;
}

export const kanbanSlice = createSlice({
    name: 'kanban',
    initialState,
    reducers: {

        setKanban: (state, action: PayloadAction<any>) => {
            const dto: KanbanBoardsResponse = action.payload;

            state.boards = dto.boards;
            state.activeBoardId = getActiveBoardId({ ...state });
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
        saveNewBoard: (state, action: PayloadAction<AddNewBoardResponse>) => {
            const savedBoard: AddNewBoardResponse = action.payload;
            state.boards.push(savedBoard);
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

export const { addNewTask, addNewColumn, setActiveBoardId, saveNewBoard, dragTask, setKanban } = kanbanSlice.actions;

export const selectActiveBoardId = (state: RootState) => state.kanban.activeBoardId;

export const selectActiveBoard = (state: RootState) =>
    state.kanban.boards.filter(board => board.id === selectActiveBoardId(state))[0];
