import React, { useState, useEffect } from "react";

import './Components.css';

//! Will be deleted when axios implemented
const data = [
    {"account_number": 23424, "current_balance": 365445365.46},
    {"account_number": 897654, "current_balance": 4.20},
    {"account_number": 2345, "current_balance": 3454.20},
    {"account_number": 98765434567, "current_balance": 57467.65},
    {"account_number": 987654, "current_balance": 574467.65}
];

const Accounts = (props) => {

    const [myAccounts, setMyAccounts] = useState([]);

    //! Route to Transaction and pass in account number and user id(passed through props)?
    const routeTransaction = (input) => {
        // Either call a Navigate function or do some bubbling
        console.log("On to transaction with account number: " + input);
        props.viewTransactions(false);
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
                        <p><b>Account Number:</b> <i>{account.account_number}</i></p>
                        <p><b>Current Balance:</b> <i>${account.current_balance.toFixed(2)}</i></p>
                    </div>
                );
            })}
        </div>
    );
}

export default Accounts;