import Sidebar from "./Sidebar";
import {useState} from "react";
import KanbanTask from "./KanbanTask";

export default function KanbanBoard() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="main-board">
            <Sidebar activeIndex={activeIndex} callback={setActiveIndex} />
            <div className="w-100 p-3">
                <div className="d-flex flex-row justify-between w-100">
                    <p className="background-primary font-bold fs-4 m-0">Platform Launch</p>
                    <button className="button background-action">+ Add New Task</button>
                </div>
                <hr />
                <div>
                    <div className="scrollbar-hide mx-5 pt-[10px] min-w-[280px] ">
                        <p className=" font-semibold flex  items-center  gap-2 tracking-widest md:tracking-[.2em] text-[#828fa3]">
                            <div className="rounded-full w-4 h-4 bg-orange-500 "></div>
                            Todo (4)
                        </p>
                        <KanbanTask />
                        <KanbanTask />
                        <KanbanTask />
                        <KanbanTask />
                        <KanbanTask />
                    </div>
                </div>
            </div>
        </div>
    );
}
