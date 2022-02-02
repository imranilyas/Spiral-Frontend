import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import NavDisplay from "./NavDisplay";

import './Screens.css';

const HomeScreen = () => {

    const [role] = useState("Account Holder");
    const [activeComponent, setActiveComponent] = useState("");

    const activeHandler = (element) => {
        setActiveComponent(element);
    }

    // Loading up components
    useEffect(() => {
        console.log("Inside the useEffect");
        if(role === "Account Holder") {
            setActiveComponent("Accounts");
        } else {
            setActiveComponent("Create");
        }
    }, [role]);

    return (
        <div className="HomeScreen">
            <Navbar role = {role} active = {activeHandler} />
            <NavDisplay active = {activeComponent} />
        </div>
    );
}

export default HomeScreen;