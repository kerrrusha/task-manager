import Sidebar from "./Sidebar";
import {setActiveButton} from "../redux/actions";

export default function KanbanBoard() {
    const DEFAULT_ACTIVE_KEY = 0;

    return (
        <div className="main-board">
            <Sidebar activeKey={DEFAULT_ACTIVE_KEY} setActiveButton={setActiveButton}/>
            <div>
                <div className="flex space-x-4 items-center md:space-x-6">
                    <button className="button">+ Add New Task</button>
                </div>
            </div>
        </div>
    );
}