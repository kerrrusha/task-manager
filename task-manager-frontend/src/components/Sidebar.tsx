import SidebarButton from "./SidebarButton";
import React from "react";
import {useAppSelector} from "../hooks/useAppSelector";
import {Board} from "../common/commonTypes";

export default function Sidebar() {
    const boards: Array<Board> = useAppSelector((state) => state.kanban.boards);

    return (
        <aside className="sidebar background-secondary sticky">
            <p className="fs-5 font-bold mb-4 mx-3 mt-3">ALL BOARDS (<span id="boards-count">{boards.length}</span>)</p>
            <ul className="p-0 m-0">
                {boards.map((board, index) => (
                    <li key={index}>
                        <SidebarButton board={board} />
                    </li>)
                )}
            </ul>
        </aside>
    );
}
