import Sidebar from "./Sidebar";
import {useState} from "react";
import KanbanTask from "./KanbanTask";
import AddNewTaskModal from "./AddNewTaskModal";

const data = {
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

export default function KanbanBoard() {
    const [activeBoard, setActiveBoard] = useState(data.boards[0]);

    return (
        <div className="main-board">
            <Sidebar activeBoardId={activeBoard.id} callback={setActiveBoard} />
            <div className="w-100 p-3">
                <div className="d-flex flex-row justify-between w-100">
                    <p className="background-primary font-bold fs-4 m-0">{activeBoard.name}</p>
                    <AddNewTaskModal />
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
