import React from 'react';
import Navigation from "./Navigation.jsx";

const Header = () => {
    return (
        <header>
            <Navigation/>
            <p className="text-center py-4 h1">Luke Skywalker</p>
        </header>
    );
};

export default Header;