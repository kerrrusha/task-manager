import KanbanTask from "./KanbanTask";
import {Column} from "../common/commonTypes";
import React from "react";
import {useAppDispatch} from "../hooks/useAppDispatch";
import {dragTask} from "../redux/slices/kanbanSlice";

interface KanbanColumnProps {
    column: Column,
    boardId: string,
}

export default function KanbanColumn({column, boardId} : KanbanColumnProps) {
    const dispatch = useAppDispatch();

    const handleOnDrop = (e : React.DragEvent) => {
        const { taskId, prevColId } = JSON.parse(
            e.dataTransfer.getData("text")
        );

        if (column.id !== prevColId) {
            dispatch(dragTask({ boardId, targetColId: column.id, prevColId, taskId }));
        }
    };

    const handleOnDragOver = (e : React.DragEvent) => {
        e.preventDefault();
    };

    return (
        <div className="mx-5 py-[10px] min-w-[280px]"
             onDrop={handleOnDrop}
             onDragOver={handleOnDragOver} >
            <div className="font-semibold flex items-center gap-2 tracking-widest md:tracking-[.2em] text-[#828fa3]">
                <div className="rounded text-[white] px-2" style={{background: column.background}}>
                    {column.title}
                </div>
                ({column.tasks.length})
            </div>
            {column.tasks.map((task, index) => <KanbanTask task={task} columnId={column.id} key={index} />)}
        </div>
    );
};
