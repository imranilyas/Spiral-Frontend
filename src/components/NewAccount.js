import React, {useState} from "react";
import SelectUSState from 'react-select-us-states';

import './Components.css';

const NewAccount = () => {

    const [pan, setPan] = useState("");
    const [name, setName] = useState("");
    const [citizenUID, setCitizenUID] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState(""); 
    const [panExists, setPanExists] = useState("");

    // Address States
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("AL");
    const [zipCode, setZipCode] = useState("");

    //! Call Axios to check if PAN exists
    const checkPan = () => {
        if(pan) {
            setPanExists("✅ Account exists");
        } else {
            setPanExists("❌ No account exists");
        }
    }

    //! Will need to change this to an axios request + need validation
    const submit = () => {
        let address = street + " " + city + " " + state + " " + zipCode;
        console.log(address);
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
                <label>Citizen UID:</label>
                <input type="number" value = {citizenUID} onChange={e => setCitizenUID(e.target.value)}/>
            </div>
            <div>
                <label>Email Address:</label>
                <input type="email" value = {email} onChange={e => setEmail(e.target.value)}/>
                <label>Date of Birth:</label>
                <input type = "date" value = {dob} onChange={e => setDob(e.target.value)}/>
            </div>
            <div>
                <h2>Address</h2>
            </div>
            <div>
                <label>Street:</label>
                <input type = "text" value = {street} onChange={e => setStreet(e.target.value)} />
                <label>City:</label>
                <input type = "text" value = {city} onChange={e => setCity(e.target.value)} />
                <label>State:</label>
                <SelectUSState className="input" value={state} onChange={e => setState(e)}/>
            </div>
            <div>
                <label>Zip Code:</label>
                <input type = "number" value={zipCode} onChange = {e => setZipCode(e.target.value)} />
            </div>
            <div>
                <h2>Upload Proof of Identity</h2>
            </div>
            <div>
                <label>Personal Account Number:</label>
                <input type = "file" />
            </div>
            <div>
                <label>Citizen UID:</label>
                <input type = "file" />
            </div>
            <div>
                <p className="SubmitAccount" onClick = {submit}>Add Account</p>
            </div>
        </div>
    );
}

export default NewAccount;