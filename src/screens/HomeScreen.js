import React from "react";
import Navbar from "../components/Navbar";
import NavDisplay from "../components/NavDisplay";

import './Screens.css';

const HomeScreen = () => {
    return (
        <div className="HomeScreen">
            <Navbar />
            <NavDisplay />
        </div>
    );
}

export default HomeScreen;