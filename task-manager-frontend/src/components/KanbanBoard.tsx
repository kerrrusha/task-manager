import Sidebar from "./Sidebar";
import KanbanTask from "./KanbanTask";
import AddNewTaskModal from "./AddNewTaskModal";
import {useAppSelector} from "../hooks/useAppSelector";
import {Board} from "../common/commonTypes";
import {selectActiveBoard} from "../redux/slices/kanbanSlice";
import AddNewColumnModal from "./AddNewColumnModal";

export default function KanbanBoard() {
    const activeBoard: Board = useAppSelector(selectActiveBoard);
    return (
        <div className="main-board scrollbar-hide overflow-x-scroll height-not-header">
            <Sidebar />
            <div>
                <div className="px-5 mt-3 d-flex flex-row items-center width-not-sidebar" style={{zIndex: -1}}>
                    <p className="background-primary font-bold fs-4 mb-0 mr-8">{activeBoard.name}</p>
                    <AddNewTaskModal columns={activeBoard.columns} boardId={activeBoard.id} />
                </div>
                <hr className="my-3 w-100" />
                <div className="px-3 flex flex-row w-100 h-100">
                    {activeBoard.columns.map((col, index) => {
                        return (
                            <div key={index} className="mx-5 pt-[10px] min-w-[280px]">
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
                    <div className="mx-5 pt-[10px] min-w-[280px]">
                        <AddNewColumnModal boardId={activeBoard.id} />
                    </div>
                </div>
            </div>
        </div>
    );
}
