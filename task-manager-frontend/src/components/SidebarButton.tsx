import {useState} from "react";
import {setActiveButton} from "../redux/actions";
import {connect} from "react-redux";

interface SidebarButtonProps {
    name: string;
    url: string;
    key_: number;
    active_?: boolean;
}

function SidebarButton({name, url, key_, active_=false} : SidebarButtonProps) {
    const [active, setActive] = useState(active_);
    const [key] = useState(key_);

    const handleClick = () => {
        if (active) {
            return;
        }
        setActive(true);

        //todo fix redux activeKey (not affects)
        setActiveButton(key);
    };

    return (
        <button className={active ? "flex items-center rounded-full active" : "flex items-center rounded-full"} onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                 stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"/>
            </svg>
            <p>{name}</p>
        </button>
    );
}

const mapDispatchToProps = {
    setActiveButton
};

export default connect(null, mapDispatchToProps)(SidebarButton);
