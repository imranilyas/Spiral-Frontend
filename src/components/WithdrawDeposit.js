import React, { useState } from "react";

import './Components.css';

const data = [
    {"account_number": 23424, "current_balance": 365445365.46},
    {"account_number": 897654, "current_balance": 4.20},
    {"account_number": 2345, "current_balance": 3454.20},
    {"account_number": 98765434567, "current_balance": 57467.65},
    {"account_number": 987654, "current_balance": 574467.65}
];

// Requirements for Withdraw and Deposit
//! Will need error checking especially for withdraw such that you cannot withdraw more than balance
//! All withdraw and deposits are cash, transfer is transfer

// Requirements for Transfer
//! May need a screen for all user transactions
//! Transfer requires both a withdrawl account and a deposit account id
//! Balance will appear upon selecting the user's account
//! User can only deposit when making transfers

// Layout
//! Arrow pointing downwards indicating the direction of money

const WithdrawDeposit = () => {

    // Deposit States
    const [accountIdDeposit, setAccountIdDeposit] = useState("");
    const [depositBalance, setDepositBalance] = useState("");
    const [depositAmount, setDepositAmount] = useState("");
    
    // Deposit Error Checking
    const [idError, setIdError] = useState(true);
    const [depositError, setDepositError] = useState(true);
    const [successfulDeposit, setSuccessfulDeposit] = useState(true);

    // Find the balance associated with that account number
    const accountHandler = (id) => {
        if(id !== "") {
            const current = data.filter(acc => acc.account_number.toString() === id)[0].current_balance;
            setDepositBalance(current);
        } else {setDepositBalance("");}
        setAccountIdDeposit(id);

        // Error Checking
        if(id === "") {
            setIdError(true);
        } else {setIdError(false);}

    }

    // Deposit Amount
    const depositChangeHandler = (amount) => {
        setDepositAmount(amount);

        // Error Checking
        if(amount <= 0 || amount >= 5000) {
            setDepositError(true);
        } else {setDepositError(false);}
    }

    // Deposit Button
    const depositHandler = () => {
        console.log(idError);
        console.log(depositError);
        if(idError === false && depositError === false) {
            //! Call Axios function for depositing to an account
            console.log("Successful Deposit Handler");

            // Reset States
            setAccountIdDeposit("");
            setDepositAmount("");

            // Reset Error Checking
            setIdError(true);
            setDepositError(true);
            setSuccessfulDeposit(true);
        } else {
            // Will display all the errors
            setSuccessfulDeposit(false);
        }

    }

    // Withdraw States
    const [accountIdWithdraw, setAccountIdWithdraw] = useState("");
    const [withdrawBalance, setWithdrawBalance] = useState("");
    const [withdrawAmount, setWithdrawAmount] = useState("");
    
    // Withdraw Error Checking
    const [withdrawIdError, setWithdrawIdError] = useState(true);
    const [withdrawError, setWithdrawError] = useState(true);


    return (
        <div className="WithdrawDepositContainer">
            {/* Deposit Section */}
            <div className = "WithdrawDeposit">
                <h1 className="title">Deposit</h1>
                
                <h3>Current Balance: {accountIdDeposit && "$" + depositBalance.toFixed(2)}</h3>

                <h4>Select Account<i className="Red">{!successfulDeposit && idError && " Please select an account"}</i></h4>
                <select value = {accountIdDeposit} onChange={(e) => accountHandler(e.target.value)}>
                    <option value = ""></option>
                    {data.map((account) => {
                        return(
                            <option value={account.account_number} key = {account.account_number}>{account.account_number}</option>
                        );
                    })}
                </select>

                <h4>Deposit Balance<i className="Red">{!successfulDeposit && depositError && " Must be between 0 and $5000.00"}</i></h4>
                <input className="DepositBalance" type="number" value = {depositAmount} onChange = {e => depositChangeHandler(e.target.value)} />

                <input type="submit" value = "Deposit" onClick = {depositHandler} />
            </div>
            
            {/* Withdraw Section */}
            <div className = "WithdrawDeposit">
                <h1 className="title">Withdraw</h1>
                
                <h3>Current Balance: {accountIdDeposit && "$" + depositBalance.toFixed(2)}</h3>

                <h4>Select Account</h4>
                <select value = {accountIdDeposit} onChange={(e) => accountHandler(e.target.value)}>
                    <option value = ""></option>
                    {data.map((account) => {
                        return(
                            <option value={account.account_number} key = {account.account_number}>{account.account_number}</option>
                        );
                    })}
                </select>

                <h4>Withdraw Balance</h4>
                <input className="DepositBalance" type="number" value = {depositAmount} onChange = {e => depositChangeHandler(e.target.value)} />

                <input type="submit" value = "Withdraw" onClick = {depositHandler} />
            </div>

        </div>

    );
}

export default WithdrawDeposit;