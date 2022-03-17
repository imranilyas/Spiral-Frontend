import React, {useState} from "react";

import './Components.css';

const data = [
    {"account_number": 23424, "current_balance": 365445365.46},
    {"account_number": 897654, "current_balance": 4.20},
    {"account_number": 2345, "current_balance": 3454.20},
    {"account_number": 98765434567, "current_balance": 57467.65},
    {"account_number": 987654, "current_balance": 574467.65}
];

const Transfer = () => {

    // Transfer States
    const [sendAccountId, setSendAccountId] = useState("");
    const [receiveAccountId, setReceiveAccountId] = useState("");
    const [amount, setAmount] = useState("");
    const [currentBalance, setCurrentBalance] = useState("");

    // Error States
    const [successfulTransfer, setSuccessfulTransfer] = useState(true);
    const [idError, setIdError] = useState(true);
    const [idReceiveError, setIdReceiveError] = useState(true);
    const [balanceError, setBalanceError] = useState(true);

    // Selecting an Account
    const accountHandler = (id) => {
        if(id !== "") {
            const current = data.filter(acc => acc.account_number.toString() === id)[0].current_balance;
            setCurrentBalance(current);
        } else {setCurrentBalance("");}
        setSendAccountId(id);

        // Error Checking
        if(id === "") {
            setIdError(true);
        } else {setIdError(false);}
    }

    const receivingAccountHandler = (id) => {
        setReceiveAccountId(Number(id));
        // Error Checking Account ID
        if(id.length === 12) {
            setIdReceiveError(false);
        } else {setIdReceiveError(true);}
    }

    // Transfer Amount
    const amountHandler = (input) => {
        setAmount(input);

        // Error Checking
        if(input <= 0 || input >= 1000) {
            setBalanceError(true);
        } else {setBalanceError(false);}
    }
    
    // Transfer Button
    const transferHandler = () => {
        console.log(sendAccountId);
        console.log(receiveAccountId);
        console.log(amount);
        if(idError || idReceiveError || balanceError) {
            setSuccessfulTransfer(false);
        } else {
            // Reset Input States
            setSendAccountId("");
            setReceiveAccountId("");
            setAmount("");
            
            // Reset Error States
            setIdError(true);
            setIdReceiveError(true);
            setBalanceError(true);
            
            setSuccessfulTransfer(true);
            console.log("Transfer Successful");
        }
    }

    return (
        <div className="Transfer">
            <h1 className = "title">Transfer</h1>

            <h3>Current Balance: {sendAccountId && "$" + currentBalance.toFixed(2)}</h3>
             
            <h4>Select Account<i className="Red">{!successfulTransfer && idError && " Please select an account"}</i></h4>
            <select value = {sendAccountId} onChange={(e) => accountHandler(e.target.value)}>
                <option value = ""></option>
                {data.map((account) => {
                    return(
                        <option value={account.account_number} key = {account.account_number}>{account.account_number}</option>
                    );
                })}
            </select>
            
            <h4>Receiving Account<i className="Red">{!successfulTransfer && idReceiveError && " Please enter a valid account"}</i></h4>
            <input type = "text" value = {receiveAccountId} onChange={e => receivingAccountHandler(e.target.value)} />

            <h4>Deposit Balance<i className="Red">{!successfulTransfer && balanceError && " Must be between 0 and $1000.00"}</i></h4>
            <input className="DepositBalance" type="number" value = {amount} onChange = {e => amountHandler(e.target.value)} />

            <input type="submit" value = "Transfer" onClick = {transferHandler} />
        </div>
    );
}

export default Transfer;