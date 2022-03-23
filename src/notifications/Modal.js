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
            //! Uplift a value 
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
                <button onClick={e => modalHandler(e.target.value)}>{no}</button>
                <button onClick={e => modalHandler(e.target.value)}>{yes}</button>
            </div>
        </div>
    );
}

export default Modal;