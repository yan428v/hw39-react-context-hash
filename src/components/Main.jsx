import React, {useContext} from 'react';
import {navItems} from "../utils/constants.jsx";
import AboutMe from "./AboutMe.jsx";
import StarWars from "./StarWars.jsx";
import Contact from "./Contact.jsx";
import Home from "./Home.jsx";
import {UserContext} from "../utils/userContext.js";

const Main = () => {
    const {currentPage} = useContext(UserContext);

    console.log(currentPage)
    switch (currentPage.title){
        case navItems[0].title:
            return <Home/>;
        case navItems[1].title:
            return <AboutMe/>;
        case navItems[2].title:
            return <StarWars/>;
        case navItems[3].title:
            return <Contact/>;
    }
};

export default Main;