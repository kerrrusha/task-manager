import Sidebar from "./Sidebar";
import {useState} from "react";

export default function KanbanBoard() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="main-board">
            <Sidebar activeIndex={activeIndex} callback={setActiveIndex} />
            <div>
                <div className="flex space-x-4 items-center md:space-x-6">
                    <button className="button">+ Add New Task</button>
                </div>
            </div>
        </div>
    );
}
