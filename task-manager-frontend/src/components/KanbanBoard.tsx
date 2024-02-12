import Sidebar from "./Sidebar";
import AddNewTaskModal from "./AddNewTaskModal";
import {useAppSelector} from "../hooks/useAppSelector";
import {Board} from "../common/commonTypes";
import {selectActiveBoard} from "../redux/slices/kanbanSlice";
import AddNewColumnModal from "./AddNewColumnModal";
import KanbanColumn from "./KanbanColumn";
import React from "react";

export default function KanbanBoard() {
    const activeBoard: Board = useAppSelector(selectActiveBoard);

    return (
        <div className="flex flex-row overflow-x-scroll overflow-y-scroll scrollbar-hide height-not-header">
            <Sidebar />
            <div className="flex flex-col">
                <div>
                    <div className="px-5 pt-3 flex flex-row items-center width-not-sidebar">
                        <AddNewTaskModal columns={activeBoard.columns} boardId={activeBoard.id} />
                        <p className="background-primary font-bold fs-4 mb-0 ml-8">{activeBoard.title}</p>
                    </div>
                    <hr className="w-100 mb-0" />
                </div>
                <div className="flex flex-1 flex-row px-3 w-100 my-3">
                    {activeBoard.columns.map((col, index) => <KanbanColumn column={col} boardId={activeBoard.id} key={index} />)}
                    <div className="mx-5 py-[10px] min-w-[280px]">
                        <AddNewColumnModal boardId={activeBoard.id} />
                    </div>
                </div>
            </div>
        </div>
    );
}
