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
//! Will need Account number, amount you want to take out or put in, and submit button
//! Upon selecting an account, the current balance appears below it
//! Will need error checking especially for withdraw such that you cannot withdraw more than balance
//! All withdraw and deposits are cash, transfer is transfer

// Requirements for Transfer
//! May need a screen for all user transactions
//! Transfer requires both a withdrawl account and a deposit account id
//! Balance will appear upon selecting the user's account
//! User can only deposit when making transfers

// Layout
//! Deposit and Withdraw will be stacked and Transfer will be to the right of it --CHECK
//! Arrow pointing downwards indicating the direction of money

const WithdrawDeposit = () => {

    const [accountIdDeposit, setAccountIdDeposit] = useState("");
    const [depositBalance, setDepositBalance] = useState("");

    const accountHandler = (id) => {
        // Find the balance associated with that account number
        if(id !== "") {
            const current = data.filter(acc => acc.account_number.toString() === id)[0].current_balance;
            setDepositBalance(current);
        } else {setDepositBalance("");}
        setAccountIdDeposit(id);
    }

    return (
        <div className="WithdrawDepositContainer">
            <div className = "WithdrawDeposit">
                <h1 className="title">Deposit</h1>
                
                <p>Current Balance: {accountIdDeposit && "$" + depositBalance.toFixed(2)}</p>

                <p>Select Account</p>
                <select value = {accountIdDeposit} onChange={(e) => accountHandler(e.target.value)}>
                    <option value = ""></option>
                    {data.map((account) => {
                        return(
                            <option value={account.account_number} key = {account.account_number}>{account.account_number}</option>
                        );
                    })}
                </select>

                <p>Deposit Balance</p>
                <input type="number"></input>

                <input type="submit" value = "Deposit"></input>
            </div>

            <div className = "WithdrawDeposit">
                <h1 className="title">Withdraw</h1>
            </div>
        </div>

    );
}

export default WithdrawDeposit;