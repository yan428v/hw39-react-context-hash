import React, {useContext} from 'react';

const NavItem = ({item}) => {
    return (
        <li onClick={() => {window.location.hash = `#/${item.route}`}} className="nav-item btn btn-danger mx-1">{item.title}</li>
    );
};

export default NavItem;