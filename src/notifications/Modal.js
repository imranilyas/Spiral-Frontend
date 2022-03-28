import React from 'react';

import './Notifications.css';

const Modal = (props) => {

    // Button values
    const no = "No";
    const yes = "Yes";

    // Uplift value and dismiss modal
    const modalHandler = (input) => {
        console.log(input);
        if(input === yes) {
            props.response();
        } else {
            //! Uplift negative value
        }
        // Dismiss modal
        props.closeModal(true);
    } 

    return (
        <div className={'Modal ' + (props.modalState && 'Close')}>
            <p className = 'ModalHeader'>CAUTION : User Transaction</p>
            <p className='ModalBody'>Are you sure you want to continue this transaction?</p>
            <div>
                <button value = "No" onClick={e => modalHandler(e.target.value)}>No</button>
                <button value = "Yes" onClick={e => modalHandler(e.target.value)}>Yes</button>
            </div>
        </div>
    );
}

export default Modal;