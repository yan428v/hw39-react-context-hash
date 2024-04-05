import React, {useContext} from 'react';
import {navItems} from "../utils/constants.jsx";
import NavItem from "./NavItem.jsx";

const Navigation = () => {

        return (
        <nav className="fixed-top mt-2 ms-5">
            <ul className="nav">
                {navItems.map(item => <NavItem key={item.title} item={item}/>)}
            </ul>
        </nav>
    );
};
export default Navigation;