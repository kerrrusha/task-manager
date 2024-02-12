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
                    {activeBoard.columns.map((col, index) => {
                        return (
                            <div key={index} className="mx-5 py-[10px] min-w-[280px]">
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
                    <div className="mx-5 py-[10px] min-w-[280px]">
                        <AddNewColumnModal boardId={activeBoard.id} />
                    </div>
                </div>
            </div>
        </div>
    );
}
