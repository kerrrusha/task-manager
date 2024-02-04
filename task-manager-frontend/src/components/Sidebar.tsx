import SidebarButton from "./SidebarButton";
import {setActiveButton} from "../redux/actions";
import {connect, ConnectedProps} from "react-redux";
import React from "react";

const data = [
    {name: "Platform Launch", url: "/"},
    {name: "Marketing Plan", url: "/"},
    {name: "Roadmap", url: "/"},
]

interface SidebarProps {
    activeKey : number
}

function Sidebar({activeKey} : SidebarProps) {
    console.log(activeKey);

    return (
        <div className="sidebar">
            <h1 className="font-bold">ALL BOARDS (<span id="boards-count">{data.length}</span>)</h1>
            <ul>
                {data.map((e, index) => (
                    <li key={index}>
                        <SidebarButton name={e.name} url={e.url} key_={index} active_={activeKey === index}/>
                    </li>)
                )}
            </ul>
        </div>
    );
}

const mapStateToProps = (state : any) => ({
    activeKey: state.sidebar.activeKey
});

const mapDispatchToProps = {
    setActiveButton
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Sidebar) as React.FC<PropsFromRedux>;
