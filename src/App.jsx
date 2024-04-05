import React, {useEffect, useState} from 'react';
import "./App.css";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import {navItems} from "./utils/constants.jsx";
import {UserContext} from "./utils/userContext.js";

const App = () => {
    const [currentPage, setCurrentPage] = useState(navItems[0]);

    const changePage = (page) => {
        setCurrentPage(page);
    }

    const getItemByRoute = () => {
        const route = window.location.hash.split('/')[1]; //["#", "aboutMe"];
        const item = navItems.find(item => item.route === route);
        return item ?? navItems[0];
    }

    useEffect(() => {
        const page = getItemByRoute();
        changePage(page);
        window.addEventListener('hashchange', () => {
            const page = getItemByRoute();
            changePage(page);
        })
    }, []);

    return (
        <div>
            <UserContext.Provider value={{
                currentPage
            }}>
                <Header/>
                <Main/>
                <Footer/>
            </UserContext.Provider>
        </div>
    );
};

export default App;