import Sidebar from "./Sidebar";
import KanbanTask from "./KanbanTask";
import AddNewTaskModal from "./AddNewTaskModal";
import {useAppSelector} from "../hooks/useAppSelector";
import {Board} from "../common/commonTypes";
import {selectActiveBoard} from "../redux/slices/kanbanSlice";

export default function KanbanBoard() {
    const activeBoard: Board = useAppSelector(selectActiveBoard);

    return (
        <div className="main-board">
            <Sidebar />
            <div className="w-100 p-3">
                <div className="d-flex flex-row justify-between w-100">
                    <p className="background-primary font-bold fs-4 m-0">{activeBoard.name}</p>
                    <AddNewTaskModal columns={activeBoard.columns} boardId={activeBoard.id} />
                </div>
                <hr />
                <div className="flex flex-row">
                    {activeBoard.columns.map((col, index) => {
                        return (
                            <div key={index} className="scrollbar-hide mx-5 pt-[10px] min-w-[280px]">
                                <div className="font-semibold flex items-center gap-2 tracking-widest md:tracking-[.2em] text-[#828fa3]">
                                    <div className="rounded text-[white] px-2" style={{background: col.background}}>
                                        {col.title}
                                    </div>
                                    ({col.tasks.length})
                                </div>
                                {col.tasks.map((task, index) => <KanbanTask data={task} key={index} />)}
                            </div>
                    );
                    })}
                </div>
            </div>
        </div>
    );
}
