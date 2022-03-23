import React, { useEffect, useState } from "react";
import Backdrop from "../notifications/Backdrop";
import Modal from "../notifications/Modal";
import Navbar from "./Navbar";
import NavDisplay from "./NavDisplay";

import './Screens.css';

const HomeScreen = () => {

    // Modal and Backdrop State
    const [closingModal, setClosingModal] = useState(false);

    // Opening and Closing Modal and Backdrop
    const modalAndBackdropHandler = (input) => {
        setClosingModal(input);
    }

    //! Will change this such that login will pass props here
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
            setActiveComponent("Create New Account");
        }
    }, [role]);

    return (
        <div className="HomeScreen">
            <Backdrop backdropState = {closingModal} />
            <Modal modalState = {closingModal} closeModal = {modalAndBackdropHandler} />
            <Navbar role = {role} active = {activeComponent} activeHandler = {activeHandler} />
            <NavDisplay active = {activeComponent} modal = {modalAndBackdropHandler} />
        </div>
    );
}

export default HomeScreen;