import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";

const Layout = () => {
    return (
        <div className="wrapper">
            <header>
                <Header />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>footer</footer>
        </div>
    );
};

export default Layout;
