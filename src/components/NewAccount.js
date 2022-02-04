import React from "react";
import { useState } from "react/cjs/react.development";

import './Components.css';

const NewAccount = () => {

    const [pan, setPan] = useState("");
    const [name, setName] = useState("");
    const [panExists, setPanExists] = useState("❌ No account exists");

    //! Call Axios to check if PAN exists
    const checkPan = () => {
        console.log(pan);
        if(pan) {
            setPanExists("✅ Account exists");
        } else {
            setPanExists("❌ No account exists");
        }
    }

    return (
        <div className="NewAccount">
            <div>
                <h1>Create a New Account</h1>
            </div>
            <div>
                <label>Personal Account Number:</label>
                <input type="number" value = {pan} onChange={e => setPan(e.target.value)}/>
                <input type = "submit" value = "Check" onClick={checkPan} />
                <label>{panExists}</label>
            </div>
            <div>
                <label>Applicant Name:</label>
                <input type="text" value = {name} onChange={e => setName(e.target.value)}/>
            </div>
        </div>
    );
}

export default NewAccount;