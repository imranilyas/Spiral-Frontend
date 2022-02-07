import React, { useState, useEffect } from "react";

import './Components.css';

//! Will be deleted when axios implemented
const data = [
    {"account_number": 23424, "current_balance": 34536546},
    {"account_number": 897654, "current_balance": 420},
    {"account_number": 2345, "current_balance": 345420},
    {"account_number": 98765434567, "current_balance": 5746765}
];

const Accounts = () => {

    const [myAccounts, setMyAccounts] = useState([]);

    //! Route to Transaction and pass in account number and user id(passed through props)?
    const routeTransaction = (input) => {
        // Either call a Navigate function or do some bubbling
        console.log("On to transaction with account number: " + input);
    }

    //! Call axios function for getting all accounts
    useEffect(() => {
        console.log("Inside the use Effect of Accounts");
        setMyAccounts(data);
    }, []);

    return (
        <div className="NewAccount">
            <div>
                <h1>My Accounts</h1>
            </div>
            
            {myAccounts.map(account => {
                return (
                    <div className = "Account" key = {account.account_number} onClick = {() => routeTransaction(account.account_number)}>
                        <h2>Account Number: {account.account_number}</h2>
                        <h2>Current Balance: {account.current_balance}</h2>
                    </div>
                );
            })}
        </div>
    );
}

export default Accounts;