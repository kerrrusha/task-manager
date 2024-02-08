import SidebarButton from "./SidebarButton";
import React from "react";

interface SidebarProps {
    activeBoardId : string;
    callback : Function;
}

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

export default function Sidebar({activeBoardId, callback} : SidebarProps) {
    return (
        <aside className="sidebar background-secondary sticky">
            <p className="fs-5 font-bold mb-4 mx-3 mt-3">ALL BOARDS (<span id="boards-count">{data.boards.length}</span>)</p>
            <ul className="p-0 m-0">
                {data.boards.map((board, index) => (
                    <li key={index}>
                        <SidebarButton name={board.name} onClickCallback={() => callback(board)} active={board.id === activeBoardId} />
                    </li>)
                )}
            </ul>
        </aside>
    );
}
