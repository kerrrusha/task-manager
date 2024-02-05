import SidebarButton from "./SidebarButton";
import React from "react";
import DarkModeSwitch from "./DarkModeSwitch";

const data = [
    {name: "Platform Launch", url: "/"},
    {name: "Marketing Plan", url: "/"},
    {name: "Roadmap", url: "/"},
]

interface SidebarProps {
    activeIndex : number
    callback : Function
}

export default function Sidebar({activeIndex, callback} : SidebarProps) {
    return (
        <div className="sidebar">
            <div className="flex flex-column flex-1">
                <h5 className="font-bold mb-4 mx-3 mt-3">ALL BOARDS (<span id="boards-count">{data.length}</span>)</h5>
                <ul className="p-0 m-0">
                    {data.map((e, index) => (
                        <li key={index}>
                            <SidebarButton name={e.name} url={e.url} onClickCallback={() => callback(index)} active={index === activeIndex} />
                        </li>)
                    )}
                </ul>
            </div>
            <div className="flex">
                <DarkModeSwitch />
            </div>
        </div>
    );
}
